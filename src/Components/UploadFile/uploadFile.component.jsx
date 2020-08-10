import React, { Component } from 'react';
import img from '../../Asset/img_2.jpg';
import img2 from '../../Asset/img_3.jpg';

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
                <div className="row uploaded_files">
                    <div className="col-3">
                        <img className="" src={img} width="80" height="80" />
                    </div>
                    <div className="col-3">
                        <img className="" src={img2} width="80" height="80" />
                    </div>
                    <div className="col-3">
                        <img className="" src={img} width="80" height="80" />
                    </div>
                    <div className="col-3">
                        <img className="" src={img2} width="80" height="80" />
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadFile;
