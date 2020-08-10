import React, { Component } from 'react';
import Dropzone from "react-dropzone";

import pdf from '../../Asset/pdf.png';
import msword from '../../Asset/msword.png';
import msexcel from '../../Asset/msexcel.png';
import otherfile from '../../Asset/file.png';

import './uploadFile.style.scss';

class UploadFile extends Component {
    constructor() {
        super();

        this.state = {
            file_list: []
        }
    };

    onFileUpload = (acceptedFiles ,draggedFiles) => {   //Method for adding all files in a list on upload or on drag
        let file_list = this.state.file_list;
        let files = acceptedFiles;
        let draged_files=draggedFiles;
        let i = 0;
        while (i < files.length) {
            file_list.push(files[i]);
            i++;
        }
        while (i < draged_files.length) {
            file_list.push(files[i]);
            i++;
        }
        this.setState({
            file_list: file_list
        })
    };

    onFileRemove = (fileName) => {  //method for removinf the uploaded files
        let file_list = this.state.file_list;
        file_list = file_list.filter((file) => { return file.name !== fileName.name });
        this.setState({
            file_list: file_list
        })
    };

    get_file_extension = (fileName) => {    //method for getting different file extention
        let ext = '';
        let splitted = fileName.split('.');
        if (splitted.length > 1) {
            ext = splitted[splitted.length - 1];
        }
        return ext;
    };

    file_to_thumbnail = (file) => {     //method for showing thumbnails of iploaded files
        let ext = this.get_file_extension(file['name']).toLowerCase();
        const imgtypes = ['png', 'jpg', 'jpeg', 'bmp'];
        const pdftypes = ['pdf'];
        const xltypes = ['xls', 'xlsx', 'xlx', 'csv'];
        const doctypes = ['doc', 'docx', 'odt'];
        if (imgtypes.indexOf(ext) !== -1) {
            if (file['id']) {
                return file['name'];
            } else {
                return window.webkitURL.createObjectURL(file);
            }
        } else if (pdftypes.indexOf(ext) !== -1) {
            return pdf;
        } else if (xltypes.indexOf(ext) !== -1) {
            return msexcel;
        } else if (doctypes.indexOf(ext) !== -1) {
            return msword;
        } else {
            return otherfile;
        }
    };

    render() {
        return (
            <div className="upload">
                <h6>Upload Attachment</h6>
                <div className="up_box">
                    <Dropzone onDrop={this.onFileUpload}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ className: "dropzone" })}>
                                <input {...getInputProps()} />
                                <p>Drag'n'drop files, or click to select files</p>
                                <i className="fa fa-cloud-upload up_icon" aria-hidden="true"></i>
                            </div>
                        )}
                    </Dropzone>

                </div>
                <div className="row uploaded_files">
                    {this.state.file_list && [...this.state.file_list].map((file, i) => (
                        <div className="col-md-3" key={i}>
                            <div className="thumbnail">
                                <button
                                    type="button"
                                    className="close"
                                    style={{ marginBottom: -20, }}
                                    onClick={this.onFileRemove.bind(this, file)}>×</button>
                                <img src={this.file_to_thumbnail(file)} alt="" width="80" height="80" />
                                <p className="file_name">{file['name']}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default UploadFile;
