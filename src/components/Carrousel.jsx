import {useState} from "react"
import arrowNext from "../assets/arrow_next.png"
import arrowPrev from "../assets/arrow_prev.png"
import './Carrousel.scss'

function Carrousel({images}) {

    const [index, setIndex] = useState(0)

    function nextImage() {
        index < images.length - 1 ? setIndex(index + 1) : setIndex(0)
    }

    function prevImage() {
        index > 0 ? setIndex(index - 1) : setIndex(images.length - 1)
    }

    return (
        <div className="carrousel">
            {
                (images.length > 1 &&
                    <>
                        <button className="carrousel__btn" onClick={prevImage}>
                            <img className="carrousel__btn__img" src={arrowPrev} alt="précedente"/>
                        </button>

                        <img className="carrousel__img" src={images[index]} alt="logement"/>

                        <p className="carrousel__index">{(index + 1) + "/" + (images.length)}</p>

                        <button className="carrousel__btn" onClick={nextImage}>
                            <img className="carrousel__btn__img" src={arrowNext} alt="suivante"/>
                        </button>
                    </>)
                ||
                <img className="carrousel__img" src={images[index]} alt="logement"/>
            }
        </div>
    )
}

export default Carrousel
