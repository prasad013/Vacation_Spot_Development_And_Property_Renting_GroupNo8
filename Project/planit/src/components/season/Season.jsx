import React from 'react'
import './season.css'

function Season() {
    return (
        <div className="select">
        <div className="season">
            <img src={season.photo} className="seasonImg" alt="seasonImg"/>
            <div className="seasonInfo">
                <Link to={`/post/${post._id}`} className="link">
                    <span className="seasonTitle">{season.title}</span>
                </Link>
            </div>
            <p className="seasonDesc">{season.desc}</p>
        </div>
        </div>
    )
}

export default Season
