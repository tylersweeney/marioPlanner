import React, { Component} from 'react'
import Notifications from './notifications'
import ProjectList from '../projects/projectlist'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        //console.log(this.props)
        const {projects, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="dashboard container">
                <div className="row">
                    {/* div for project list on the left*/}
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    {/* div for notifications on the right */}
                    <div className="col s12 m5 offest-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
    )(Dashboard);