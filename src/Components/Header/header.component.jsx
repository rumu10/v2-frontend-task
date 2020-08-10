import React, { Component } from 'react';
import profile_img from '../../Asset/img_3.jpg';

import './header.style.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark header_bar">
                    {this.props.part == "first" ?
                        <div>
                            <img src={profile_img} width="40" height="40" className="profile_img"></img>
                            <div className="user_info">
                                <div className="navbar-brand user_name"> Sudipta</div>
                                <div className="user_status">Status Will be Here</div>
                            </div>


                        </div>

                        : this.props.part == "second" ?
                            <div>
                                <a className="navbar-brand part_2">{this.props.title}</a>
                                <p className="ap">to Assigned Person Name <span><i className="fa fa-ellipsis-v detail_icon" aria-hidden="true"></i></span></p>
                            </div>

                            : <a className="navbar-brand">{this.props.title}</a>
                    }
                </nav>
            </div>
        )
    }
}

export default Header;
