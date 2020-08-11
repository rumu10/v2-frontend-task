import React, { Component } from 'react';

import './searchbox.style.scss';

class SearchBox extends Component {
    render() {
        return (
            <div className="form-group has-search search-field ">
                <input type="text" className="form-control"  placeholder= {this.props.placeholder} />
                <span className="fa fa-search form-control-feedback"></span>
            </div>
        )
    }
}

export default SearchBox;
