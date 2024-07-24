import React from "react";
import Banner from "../components/Banner.jsx";
import Collapse from "../components/Collapse.jsx";
import bannerImage from "../assets/banner.jpg";
import {aboutList} from "../datas/aboutList.js";

function A_propos() {

    return (
        <section className='info'>
            <Banner backgroundImage={bannerImage} alt="paysage vallée montagneuse"/>
            <div className='info__collapses'>
                {
                    aboutList.map((elem, index) =>
                        <Collapse key={elem.title + index} title={elem.title} contentString={elem.content}/>
                    )
                }
            </div>
        </section>
    )
}

export default A_propos;
