import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Bg from './../img/about-bg.jpg'
import Bg1 from './../img/about-bg-1.jpg'
import AboutImg from './../img/about.jpg'
import About1 from './../img/about-1.jpg'
import {BrowserRouter, Route, Link} from 'react-router-dom';



export class About extends Component {
    render() {
        return (
            <div className="about ">
                <div className="container pt-5 pb-5">
                    <div className="row justify-content-between">
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 about-left" >
                        <Slide top>
                             <h5> Our History</h5>
                             <h2>About us</h2>
                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia, aperiam minima blanditiis accusamus libero. Quas laborum laboriosam eaque dolorem.</p>
                             <Link className="about-link" to="/about">Read more</Link>
                        </Slide>


                    </div>


                    <div className=" col-12 col-md-7 col-lg-7 col-xl-7 about-right">
                        <img src={About1} alt="" className="about-img" />


                        <Fade top>
                        <img src={Bg1} alt="" />
                        </Fade>
                        
                     

                        
                    </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default About
