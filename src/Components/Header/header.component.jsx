import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

import './header.style.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark header_bar">
                    {this.props.part == "first" ?
                        <div>
                            {/* <Image src="./Asset/img.jpg/171x180" roundedCircle /> */}
                            <a className="navbar-brand part_1">Sudipta</a>
                            <p className="status">Status Will be Here</p>
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
