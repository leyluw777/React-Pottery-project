import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons'
import { faHandshake} from '@fortawesome/free-solid-svg-icons'


const Service = (props) => {
    return(
        <div className="delService mt-3 mb-3 col-12 col-md-3 col-lg-3 col-xl-3">
            <FontAwesomeIcon icon={props.icon} className="service-i" />
            <h5>{props.header}</h5>
            <p>{props.info}</p>
        </div>

    )
}


export class Delivery extends Component {
    render() {
        return (
            <div className="delivery">
                <div className="container pt-5 pb-5 mt-5 mb-5">
                    <div className="row ">
                        <div className="delivery-part col-12">
                            <div className="row col-12">
                            <Service icon= {faShippingFast} header= "Free shipping" info = "Order over $150 week"  />
                            <Service icon= {faPhoneAlt} header= "Support service" info = "24/7 hour’s support&help"  />
                            <Service icon= {faHandHoldingUsd} header= "Money back" info = "Send within 30 days"  />
                            <Service icon= {faHandshake} header= "Shopping Guide" info = "We happy to help you"   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Delivery
