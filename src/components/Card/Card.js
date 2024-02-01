import './Card.css'

const Card = ({ average_rating, id, poster_path, title}) => {

    return (
        <div className='card'>
            <h3>{title}</h3>
            <img src={poster_path}></img>
            <p>Thank You!</p>
        </div>
    )
}

export default Card;