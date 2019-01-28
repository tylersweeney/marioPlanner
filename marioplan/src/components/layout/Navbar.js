import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './signedinlinks'
import SignedOutLinks from './signedoutlinks'
import { connect } from 'react-redux'

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to= '/' className="left brand-logo">MarioPlan</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>   
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return{

    }
}

export default connect(mapStateToProps)(Navbar);