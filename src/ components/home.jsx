import React from "react"
import Food from "./Food"
import jsonfood from "./foodsource"



const Home = () => {
    let list = []
    const fooddata = (arg) => {
        list.push(arg)
        console.log(list);

    }


    const ui = jsonfood.map(ele => <Food getdata={fooddata} key={ele.name} title={ele.name} calorie={ele.calories} imgpath={ele.image} />)

    return (
        <React.Fragment>
            <div>
                <div>
                    <label htmlFor="foodsearch">Search:  </label>
                    <input type="search" name="foodsearch" id="foodsearch" placeholder="Food" />

                </div>
                {ui}

            </div>
            <div></div>
        </React.Fragment>
    )
}
export default Home