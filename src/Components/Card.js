
export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} alt="" className="card--img"/>
            <div className="card-location">
                <img src="https://cdn-icons.flaticon.com/png/512/186/premium/186250.png?token=exp=1642067321~hmac=1ef352542262d52f6ff37853e49dc748" className="pin"/>
                <h3>{props.location}</h3>
                <a href="{props.googleMapsUrl}"> View on Google Maps </a>
            </div>            
            <h1>{props.title}</h1>
            <h7>{props.startDate} - {props.endDate}</h7>
            <p>{props.description}</p>
            <hr></hr>
        </div>
    )
}