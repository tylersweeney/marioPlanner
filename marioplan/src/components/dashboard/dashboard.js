import React, { Component} from 'react'
import Notifications from './notifications'
import ProjectList from '../projects/projectlist'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        //console.log(this.props)
        const {projects} = this.props;
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
    return{
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);