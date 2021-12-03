


const SelectedFood = ({ quantity, title, calorie }) => {

    
    
    return (
        <div key={title} className="food" >
            <div className="content">
                <h4>{title}</h4>
                <p>{calorie*quantity}</p>
            </div>
           
        </div>
    )
}


export default SelectedFood