import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './searchbox.style.scss';

class SearchBox extends Component {
    render() {
        return (
            <div>
                <Form inline>
                    <FormControl type="text" placeholder= {this.props.placeholder} className="mr-sm-2 search_field" />
                    <span className="fa fa-search search_icon"></span>
                </Form>
            </div>
        )
    }
}

export default SearchBox;
