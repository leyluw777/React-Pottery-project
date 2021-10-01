import React, { Component } from 'react'
import Logo from './../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row ">
                        <div className="first-col col-12 col-md-3 col-lg-3 col-xl-3 mb-5">
                            <img src={Logo} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, molestias.</p>
                            <div className="foot-icons">
                            <FontAwesomeIcon icon={faFacebook} className="foot-i" />
                            <FontAwesomeIcon icon={faTwitter} className="foot-i" />
                            <FontAwesomeIcon icon={faGoogle} className="foot-i" />
                            <FontAwesomeIcon icon={faInstagram} className="foot-i" />
                            </div>
                        </div>
                        <div className="second-col col-12 col-md-3 col-lg-3 col-xl-3 mb-5">
                            <p>Products</p>
                            <ul>
                                <li><a href="">About us</a></li>
                                <li><a href="">Prices</a></li>
                                <li><a href="">All products</a></li>
                                <li><a href="">Best sales </a></li>
                                <li><a href="">Sitemap</a></li>
                                <li><a href="">Adress</a></li>
                            </ul>
                        </div>
                        <div className="third-col col-12 col-md-3 col-lg-3 col-xl-3 mb-5">
                            <p>Your account</p>
                            <ul>
                                <li><a href="">Personal info</a></li>
                                <li><a href="">Orders</a></li>
                                <li><a href="">Credit slips</a></li>
                                <li><a href="">My wishlists</a></li>
                            </ul>
                        </div>
                        <div className="fourth-col col-12 col-md-3 col-lg-3 col-xl-3 mb-5">
                            <p>Contact us</p>
                            <div className="adress">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="adr-i" />
                                <p>Calista Wise 7292 Str, Sample State. Sample city</p>
                            </div>
                            <div className="adress">
                                <FontAwesomeIcon icon={faMobileAlt} className="adr-i" />
                                <p> (+33) 1 23 45 67 89</p>
                            </div>
                            <div className="adress">
                                <FontAwesomeIcon icon={faEnvelope} className="adr-i"  />
                                <p>demo@demo.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
