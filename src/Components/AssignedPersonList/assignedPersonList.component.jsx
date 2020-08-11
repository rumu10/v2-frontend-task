import React, { Component } from 'react'
import Header from '../Header/header.component';
import Person from '../Person/person.component';
import SearchBox from '../SearchBox/searchbox.component';
import img from '../../Asset/img_2.jpg';
import img2 from '../../Asset/img_3.jpg';

import './assignedpersonList.style.scss';

class AssignedPersonList extends Component {
    constructor() {
        super();

        this.state = {
            overdue_personList: [
                {
                    name: "Luccy Lee",
                    id: 1,
                    img: img
                },
                {
                    name: "Mike Wilson",
                    id: 2,
                    img: img2
                }
            ],
            today_personList: [
                {
                    name: "Luccy Lee",
                    id: 1,
                    img: img
                }
            ],
            searchfeild: ''
        }
    }
    render() {
        const {overdue_personList ,searchfeild}=this.state;
        const filrertednames = overdue_personList.filter(nm =>
            nm.name.toLowerCase().includes(searchfeild.toLowerCase())
          )
        return (
            <div className="person_list">
                <Header part="first" />
                <div>
                    <div className="row section_1">
                        <div className="col-2  g_icon">
                            <i className="fa fa-th-large" aria-hidden="true"></i>
                        </div>
                        <div className="col-10 search">
                            <SearchBox placeholder="search person...."  
                                handleChange={e => {this.setState({searchfeild: e.target.value })}}/>
                        </div>
                    </div>
                    <p className="text-center at" type="button">Add Task</p>
                    <hr className="work_status_hr" />
                    <div className="invite"><i className="fa fa-users" aria-hidden="true"></i> <span className="invite_text"> Invite a friend</span></div>
                    <hr className="work_status_hr" />
                    <div className="list">
                        <div className="work_status"><p className="status_title">Overdue</p></div>
                        <ul className="list-group">
                            {filrertednames.map(person => (
                                <Person
                                    person={person}
                                    key={person.id}
                                    status="overdue"
                                />
                            ))}
                        </ul>
                        <div className="work_status"><p className="status_title">Today</p></div>
                        <ul className="list-group">
                            {this.state.overdue_personList.map(person => (
                                <Person
                                    person={person}
                                    key={person.id}
                                    status="today"
                                />
                            ))}
                        </ul>
                        <div className="work_status"><p className="status_title">Later</p></div>
                        <ul className="list-group">
                            {this.state.today_personList.map(person => (
                                <Person
                                    person={person}
                                    key={person.id}
                                    status="later"
                                />
                            ))}
                        </ul>
                        <div className="work_status"><p className="status_title">Complete</p></div>
                        <ul className="list-group">
                            {this.state.today_personList.map(person => (
                                <Person
                                    person={person}
                                    key={person.id}
                                    status="complete"
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AssignedPersonList;
