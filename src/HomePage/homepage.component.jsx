import React from 'react';
import './homepage.style.scss'
import AssignedPersonList from '../Components/AssignedPersonList/assignedPersonList.component';
import AddTask from '../Components/AddTask/addTask.component';
import TaskConversation from '../Components/TaskConversation/taskConv.component';

const HomePage = () => (
    <div className="container-fluid">
        <div className='row homepage'>
            <div className="col-md-3 first">
                <AssignedPersonList />
            </div>
            <div className="col-md-6 second">
                <AddTask />
            </div>
            <div className="col-md-3 third">
                <TaskConversation />
            </div>
        </div>
    </div>

);

export default HomePage;
