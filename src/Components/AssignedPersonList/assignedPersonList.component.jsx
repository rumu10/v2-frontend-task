import React, { Component } from 'react'
import Header from '../Header/header.component';
import Person from '../Person/person.component';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import * as Icon from 'react-bootstrap-icons';

import './assignedpersonList.style.scss';
class AssignedPersonList extends Component {
    constructor() {
        super();

        this.state = {
            personList: [
                {
                    name: "A",
                    id: 1
                },
                {
                    name: "B",
                    id: 2
                }
            ]
        }
    }
    render() {
        return (
            <div className="person_list">
                <Header part="first" />
                <div className="">
                    {/* <div className="grid_icon">
                        <Icon.Grid />
                    </div> */}
                    <div className="search">
                        <Form inline>
                            <FormControl type="text" placeholder="Search.." className="mr-sm-2" />
                        </Form>
                    </div>
                </div>
                <div className="list">
                    {this.state.personList.map(person => (
                        <Person
                            person={person}
                            key={person.id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default AssignedPersonList;
