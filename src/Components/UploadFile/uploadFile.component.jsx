import React, { Component } from 'react';

import './uploadFile.style.scss';

class UploadFile extends Component {
    render() {
        return (
            <div className="upload">
                <h6>Upload Attachment</h6>
                <div className="up_box">
                    <div className="text-center">Drop your Ataachment here or Click to Upload</div>
                    <i className="fa fa-cloud-upload up_icon" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default UploadFile;
