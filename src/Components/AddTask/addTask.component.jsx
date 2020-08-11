import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Header from '../Header/header.component';
import UploadFile from '../UploadFile/uploadFile.component';

import './addTask.style.scss';

class AddTask extends Component {
    constructor() {
        super();
    }
    render() {
        const now = 100;
        return (
            <div>
                <Header title="Add New Task" part="second" />
                <div className="task_details">
                    <h6>Task Name</h6>
                    <div className="task_name">
                        <i className="fa fa-pencil-square-o task_icon"></i><span className="task_des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
                    </div>
                    <div className="row time_details">
                        <div className="col-4 completion_date">
                            <h6>Date</h6>
                            <div className="detail_col">
                                <i className="fa fa-calendar-o task_icon"></i><span className="value">Sun, Sep 26, 2019</span>
                            </div>
                        </div>
                        <div className="col-4 completion_time">
                            <h6>Time</h6>
                            <div className="detail_col">
                                <i className="fa fa-clock-o task_icon"></i><span className="value">8:10 AM</span>
                            </div>
                        </div>
                        <div className="col-4 reminder">
                            <h6>Reminder</h6>
                            <div className="detail_col">
                                <i className="fa fa-bell-o task_icon"></i><span className="value">On Time</span>
                            </div>
                        </div>
                    </div>
                    <ProgressBar now={now} className="pg" />
                    <p className="text-center pbar">{`${now}% complete`}</p>
                    <div className="subtask">
                        <div className="st"><i className="fa fa-check-square" aria-hidden="true"></i> <span className="value"> Subtask 1</span></div>
                        <div className="cross_icon"><i type ="button" className="fa fa-times" aria-hidden="true"></i></div>
                    </div>
                    <div className="subtask2">
                        <div className="st2"><i className="fa fa-check-square" aria-hidden="true"></i> <span className="value"> Subtask 2</span></div>
                        <div className="cross_icon2"><i type ="button" className="fa fa-times" aria-hidden="true"></i></div>
                    </div>
                    <div className="add_task">
                        <div className="text-center text-success"> <i className="fa fa-plus" aria-hidden="true"></i> Add Subtask</div>
                    </div>
                    <UploadFile />
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-light light">Cancel</button>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-dark dark">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTask;
