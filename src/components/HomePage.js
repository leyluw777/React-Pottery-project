import React, { Component } from 'react'
import Header from './Header'
import About from './About'
import Delivery from './Delivery'
import Shop from './Shop'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'
//import {BrowserRouter, Route, Link} from 'react-router-dom';


export class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
     <About />
     <Delivery />
     <Shop />
     <Blog />
     <Contact />
     <Footer />
            </div>
        )
    }
}

export default HomePage
