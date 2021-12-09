import React from 'react'

export default function Contact() {
    return (
        <div>
            <section class="contact">
                <h1 class="heading"> contact <span>me</span> </h1>
                <div class="row">
                    <div class="info-container">
                        <h1>get in touch</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem sunt sapiente vel minus eaque voluptate fugit corrupti omnis tempora?</p>
                        <div class="box-container">
                            <div class="box">
                                <i class="fas fa-map"></i>
                                <div class="info">
                                    <h3>address :</h3>
                                    <p>mumbai, india - 400104</p>
                                </div>
                            </div>

                            <div class="box">
                                <i class="fas fa-envelope"></i>
                                <div class="info">
                                    <h3>email :</h3>
                                    <p>sanashaikh@gmail.com</p>
                                </div>
                            </div>

                            <div class="box">
                                <i class="fas fa-phone"></i>
                                <div class="info">
                                    <h3>number :</h3>
                                    <p>+123-456-7890</p>
                                </div>
                            </div>
                        </div>

                        <div class="share">
                            <span class="fab fa-facebook-f"></span>
                            <span class="fab fa-twitter"></span>
                            <span class="fab fa-instagram"></span>
                            <span class="fab fa-linkedin"></span>
                        </div>
                    </div>

                    <form action="">
                        <div class="inputBox">
                            <input type="text" placeholder="your name" />
                            <input type="number" placeholder="your number" />
                        </div>

                        <div class="inputBox">
                            <input type="email" placeholder="your email" />
                            <input type="text" placeholder="your subject" />
                        </div>

                        <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>
                        <input type="submit" value="send message" class="btn" />
                    </form>
                </div>
            </section>
        </div>
    )
}
