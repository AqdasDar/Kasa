import {useNavigate, useParams} from "react-router-dom"

import {useEffect, useState} from "react"

import Carrousel from "../components/Carrousel"
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"

import logement from "../datas/logements.json"
import Thumbnail from "../components/Thumbnail"

import './Logement.scss'

function Logement() {

    const param = useParams()
    const [annonce, setAnnonce] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        let result = logement.find((el) => el.id === param.id)
        if (!result) {
            navigate("/404")
        }
        setAnnonce(result)
    }, []);

    return (
        <section>
            {
                (annonce && <div>
                    <Carrousel images={annonce.pictures}/>
                    <div className="logement">
                        <div className="logement__left">
                            <h1 className="logement__left__h1">{annonce.title}</h1>
                            <p className="logement__left__p">{annonce.location}</p>
                            {
                                annonce.tags.map((tag) =>
                                    <span className="logement__left__tag" key={tag}>{tag}</span>
                                )
                            }
                        </div>
                        <div className="logement__right">
                            <Thumbnail name={annonce.host.name} picture={annonce.host.picture}/>
                            <Rating ratingValue={annonce.rating}/>
                        </div>
                    </div>
                    <div className="logement__collapses">
                        <Collapse className="logement__collapses__collapse" title="Description"
                                  contentString={annonce.description}/>
                        <Collapse className="logement__collapses__collapse" title="Equipements"
                                  contentArray={annonce.equipments}/>
                    </div>
                </div>)
            }
        </section>
    )
}

export default Logement
