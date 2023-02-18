import React, { Component } from 'react'
import {Button} from'react-bootstrap'
import {Link } from "react-router-dom"

export default class Home extends Component {
    render() {
        return (
            <div className='Background'>
                <h1 className='text'>Home Made Pizza</h1>
                <div>
                  <Link to="/menu">
                    <Button variant="dark" size="lg">
                        Place an Order
                    </Button>
                  </Link>

                </div>


            </div>
        )
    }
}
