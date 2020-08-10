import React, { Component } from 'react';

import './person.style.scss';

class Person extends Component {
    render() {
        return (
            <li className="list-group-item list-group-item-action mb-3 items">

                <div className="person_inbox">
                    <div className="row">
                        <div className="col-3 img_section">
                            <img className="person_img" src={this.props.person.img} width="40" height="40" />
                        </div>
                        <div className="col-7 text_section">
                            {this.props.status == "overdue" ? <h6>{this.props.person.name}<span> <i className="fas fa-clock status_icon" aria-hidden="true"></i></span></h6>
                                : this.props.status == "complete" ? <h6>{this.props.person.name} <span> <i className="fa fa-check-circle complete_icon" aria-hidden="true"></i></span></h6> :
                                    <h6>{this.props.person.name}</h6>}

                            <p className="text">Hey lets arrange a call..</p>
                            <p className="date">Tue 17, Sep 2019 <span className="time">11:20 AM</span></p>
                        </div>
                        <div className="col-2 icon_section">
                            <i className="fa fa-list" aria-hidden="true"></i><br />
                            <i className="fa fa-comment-o" aria-hidden="true"></i><br />
                            <i className="fa fa-paperclip" aria-hidden="true"></i>
                        </div>
                    </div>

                </div>
            </li>
        )
    }
}

export default Person;
