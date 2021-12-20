import React, { useEffect } from 'react'
import User from "../images/profile.jpg"

export default function Home() {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])
    return (
        <div>
            <section className="home">
                <div className="image">
                    <img src={User} alt="" />
                </div>
                <div className="content">
                    <h3>hi, i am Agni Saha</h3>
                    <span>front-end developer</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro facere expedita ab atque a consectetur odit vel soluta itaque.</p>
                    <a href="/about" className="btn"> about me <i className="fas fa-user"></i> </a>
                </div>
            </section>
        </div>
    )
}
