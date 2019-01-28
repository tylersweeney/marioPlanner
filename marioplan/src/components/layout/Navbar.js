import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './signedinlinks'
import SignedOutLinks from './signedoutlinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props
    // console.log(auth)
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to= '/' className="left brand-logo">MarioPlan</Link>
                { links }
            </div>
        </nav>   
    )
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);