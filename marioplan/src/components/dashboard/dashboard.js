import React, { Component} from 'react'
import Notifications from './notifications'
import ProjectList from '../projects/projectlist'

class Dashboard extends Component {
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    {/* div for project list on the left*/}
                    <div className="col s12 m6">
                        <ProjectList/>
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

export default Dashboard;