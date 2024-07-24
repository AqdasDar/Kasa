import {useState} from "react"
import Arrow from '../assets/arrow.png'
import './Collapse.scss'

function Collapse({title, contentString, contentArray}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <dl className="collapse">
            <dt className="collapse__dt">{title}
                <button
                    className={isOpen ? "collapse__dt__button collapse__dt__button--open" : "collapse__dt__button collapse__dt__button--close"}
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}>
                    <img className="collapse__dt__button__img" src={Arrow} alt="bouton fleche"/>
                </button>
            </dt>
            <div className="dd__overflow">
                {
                    <dd className={isOpen ? "collapse__dd collapse__dd--open" : "collapse__dd collapse__dd--close"}>
                        {
                            contentString ? <p>{contentString}</p> : contentArray.map((el, index) => <p key={index + el}
                                                                                                        className="collapse__dd__p">{el}</p>)
                        }
                    </dd>
                }
            </div>
        </dl>
    )
}

export default Collapse
