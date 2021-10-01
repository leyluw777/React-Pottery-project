import React, { Component } from 'react'
import Image from './../img/contact.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

export class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="right-contact col-12 col-md-6 col-lg-6 col-xl-6 mb-3">
                           <Fade left>

                            <img src={Image} alt="" />

                            </Fade >
                        </div>
                        <div className="left-contact col-12 col-md-6 col-lg-6 col-xl-6">
                               <Fade top>
                               
                                <h2>JOIN THE COMMUNITY TO BE UPDATED FIRSTLY?</h2>
                                <h5>Join Now And Get 10% Off Your Next Purchase !</h5>
                                <FontAwesomeIcon icon = {faEnvelopeOpenText} className="contact-i" />
                                <form action="">
                                    <input type="email" placeholder = "Enter your e-mail..." />
                                    <button>Submit</button>
                                </form>

                            </Fade>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
