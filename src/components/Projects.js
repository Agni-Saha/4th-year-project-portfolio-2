import React from 'react'
import Navbar from './Navbar'

import Blog1 from "../images/blog1.jpg"
import Blog2 from "../images/blog2.jpg"
import Blog3 from "../images/blog3.jpg"
import Blog4 from "../images/blog4.jpg"
import Blog5 from "../images/blog5.jpg"
import Blog6 from "../images/blog6.jpg"

export default function Projects() {
    return (
        <div>

            <Navbar />
            <section class="blogs">

                <h1 class="heading"> <span>my</span> projects </h1>

                <div class="box-container">

                    <div class="box">
                        <div class="image">
                            <img src={Blog1} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="/"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>project title goes here.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                            <a href="/" class="btn"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={Blog2} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="/"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>project title goes here.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                            <a href="/" class="btn"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={Blog3} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="/"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>project title goes here.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                            <a href="/" class="btn"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={Blog4} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="/"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>project title goes here.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                            <a href="/" class="btn"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={Blog5} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="/"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>project title goes here.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                            <a href="/" class="btn"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={Blog6} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="/"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                                <a href="/"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>project title goes here.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                            <a href="/" class="btn"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}
