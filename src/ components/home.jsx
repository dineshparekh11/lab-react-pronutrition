import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Food from "./Food"

import jsonfood from "./foodsource"
import SelectedFood from "./selectedfood"



const Home = () => {
    const [filterui, setfilter] = useState()
    const [food, setfoodlist] = useState([])


    const sharedata = (arg) => {
        console.log(arg);
        const foodstate = food
        if (foodstate.length === 0) {
            foodstate.unshift(arg)
            setfoodlist(foodstate)
        }
        else {
            let isnotexist = true
            foodstate.forEach(ele => {
                if (ele.name === arg.name) {
                    isnotexist = false
                    ele.quantity = arg.quantity
                }
            })
            if (isnotexist) {
                foodstate.unshift(arg)
                setfoodlist(foodstate)
            }
        }
        const cartui = foodstate.filter(ele=> ele.quantity !== 0).map(ele => <SelectedFood quantity={ele.quantity} title={ele.name} calorie={ele.calorie} />)
        ReactDOM.render(cartui, document.querySelector(".carlist"))
        //  console.log(foodstate);
    }


    console.log(food);

    const filterfood = (e) => {
        if (e.target.value)
            setfilter(jsonfood.filter(ele => ele.name.toLowerCase().startsWith(e.target.value)).map(ele => <Food getdata={sharedata} key={ele.name} title={ele.name} calorie={ele.calories} imgpath={ele.image} />))
        else
            setfilter(undefined)
    }

    const ui = jsonfood.map(ele => <Food getdata={sharedata} key={ele.name} title={ele.name} calorie={ele.calories} imgpath={ele.image} />)

    return (
        <React.Fragment>
            <div>
                <div>
                    <label htmlFor="foodsearch">Search:  </label>
                    <input type="search" name="foodsearch" id="foodsearch" onKeyUp={filterfood} placeholder="Food" />

                </div>
                {filterui ? filterui : ui}

            </div>
            <div className="carlist">
            </div>
        </React.Fragment>
    )
}

export default Home