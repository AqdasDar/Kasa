import redStar from "../assets/star_red.png"
import grayStar from "../assets/star_gray.png"
import './Rating.scss'

function Rating({ratingValue}) {

    const ratingTab = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {
                ratingTab.map((ratingI) =>
                    ratingValue >= ratingI ? (
                        <img key={ratingI} src={redStar} alt={ratingValue} height="24" width="24px"/>
                    ) : (
                        <img key={ratingI} src={grayStar} alt={ratingValue} height="24px" width="24px"/>
                    )
                )
            }
        </div>
    )
}

export default Rating
