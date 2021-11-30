


const Food = ({ imgpath, title, calorie, getdata }) => {


    document.forms[title]?.addEventListener("submit",
        (e) => {


            document.querySelector("#quantity").value !== '' ? getdata(
                {
                    name: title,
                    calorie: calorie,
                    quantitly: document.querySelector("#quantity").value
                })
                : getdata({})
            e.preventDefault()
        }
    )

    return (
        <div key={title} className="food" >
            <img src={imgpath} alt={title} />
            <div className="content">
                <h4>{title}</h4>
                <p>{calorie}</p>
            </div>
            <div className="inputfield">
                <form name={title}>
                    <input type="number" name="quantity" id="quantity" />
                </form>
            </div>
        </div>
    )
}


export default Food