import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from '../datas/logements.json';
import bannerImage from '../assets/bannerBackground.jpg';
import {Link} from "react-router-dom";
import './Home.scss'

const bannerTitre = "Chez vous, partout et ailleurs"

function Home() {

    return (
        <section className="home">
            <Banner backgroundImage={bannerImage} titre={bannerTitre} alt="paysage falaise bord de mer"/>
            <div className="home__div">
                {
                    logements.map((annonce) =>
                        <Link className="link__card" to={`/Logement/${annonce.id}`} key={annonce.id}>
                            <Card {...annonce} key={annonce.id}/>
                        </Link>
                    )
                }
            </div>
        </section>
    )
}

export default Home;
