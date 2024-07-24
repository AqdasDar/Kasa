import {useMemo, useState} from 'react'
import './Thumbnail.scss'

function Thumbnail({name, picture}) {

    const [user, setUser] = useState([])

    useMemo(() => {
        let fullName = name.split(" ")
        setUser(fullName)
    }, [name])

    return (
        <div className="host">
            <div className="host__name">
                <p className="host__name__p">{user[0]}</p>
                <p className="host__name__p">{user[1]}</p>
            </div>
            <img className="host__img" src={picture} alt={name}/>
        </div>
    )
}

export default Thumbnail
