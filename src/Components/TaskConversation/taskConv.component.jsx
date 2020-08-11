import React, { Component } from 'react'
import Header from '../Header/header.component';

import './taskConv.style.scss';

class TaskConversation extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header title="Task Conversation" part="third" />
                <div className="text-center  mssg_icon"><i className="fa fa-commenting-o" aria-hidden="true"></i></div>  
                <div className="write_text">
                    <input className="form form-control input-field" type="text" placeholder="Write your message..." />
                    <span className="fa fa-paperclip icon" aria-hidden="true"></span>
                </div>
            </div>
        )
    }
}

export default TaskConversation;
