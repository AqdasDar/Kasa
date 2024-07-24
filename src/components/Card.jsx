import './Card.scss'

function Card({title, cover}) {
    return (
        <article className='card'>
            <img className='card__img' src={cover} alt={title}/>
            <p className='card__p'>{title}</p>
        </article>
    )
}

export default Card
