import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import './postModal.scss';
import { Dropdown } from 'react-bootstrap';
import choose from 'assets/images/choose.png';
import topicIcon from 'assets/images/topic-icon2.png'
import voiceImage from 'assets/images/voice-image.png'

export const PostModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <div onClick={handleShow}>
                Post
            </div>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h5 className="title title-border">Create Post</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group mt-5">
                            {/* <select class="form-control">
        <option data-thumbnail="images/topic-icon2.png"> Choose a topic</option>
        <option>Choose a topic</option>
        <option>Choose a topic</option>
      </select> */}
                            <select id="id_select2_example" className="form-control">
                                <option data-img src={topicIcon}> Choose a topic</option>
                                <option data-img_src={topicIcon}> Choose a topic</option>
                                <option data-img_src={topicIcon}> Choose a topic</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" name className="form-control" placeholder="Title (Max 50 Characters)" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Labels (Ex: #kerala)" defaultValue={""} />
                        </div>
                        <div className="form-group">
                            <h5 className="form-heading-post pt-2 pb-2">Audio</h5>
                            <img src={voiceImage} className="img-fluid mb-4" />
                        </div>
                        <div className="form-group">
                            <div className="row float-right pr-4">
                                <div className="btn btn-round btn-outline-primary font-12  pl-4 pr-4">REMOVE</div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-4">
                                    <div className="card-box-dotted p-5 text-center"> <i className="fa fa-music text-dark" />
                                        <div>
                                            <small><span className="text-primary"><u>Upload</u></span> your audio here</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="circle mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                                        </svg>
                                    </div>
                                    <h6 className="text-center">Record</h6>
                                </div>
                                <div className="col-2">
                                    <div className="circleRed mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-app" viewBox="0 0 16 16">
                                            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                                        </svg>
                                    </div>
                                    <h6 className="text-center">Stop</h6>
                                </div>
                                <div className="col-4">
                                    <div className="btn-dropdawn pl-5">
                                        <Dropdown >
                                            <Dropdown.Toggle className="dropdown-modal" id="dropdown-basic">
                                                Audio Language
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="drp-menu">
                                                <Dropdown.Item className="drp-item" href="#/action-1">Hindi</Dropdown.Item>
                                                <Dropdown.Item className="drp-item" href="#/action-2">English</Dropdown.Item>
                                                <Dropdown.Item className="drp-item" href="#/action-3">Tamil</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <h5 className="form-heading-post pt-2 pb-2">Images</h5>
                            <div className="col-12">
                                <label htmlFor="exampleFormControlTextarea1" />
                                <div className="card-box-dotted p-5 text-center"> <img src={choose} className="img-fluid mb-4" />
                                    <div><small> Drag &amp; Drop Images OR Upload <br />( MAX 4 Images ) {/* <a class='btn btn-outline-primary btn-round font-12' href='javascript:;'> Choose File...
            <input type="file" style='position:absolute;z-index:2;top:0;left:0;filter: alpha(opacity=0);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0;background-color:transparent;color:transparent;' name="file_source" size="40"  onchange='$("#upload-file-info").html($(this).val());'>
            </a> &nbsp; <span class='label label-info' id="upload-file-info"></span> */} </small></div><small>
                                    </small></div><small>
                                </small></div><small>
                            </small></div><small>
                            <div className="form-group">
                                <label htmlFor="comment" className="form-heading-post pt-2 pb-1">Text</label><br />
                                <span>What's on Your mind?</span>
                                <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                            </div>
                            <div className="form-group row">
                                <div className="col-6">
                                    <div className="form-check-inline mt-3">
                                        <div className="custom-control custom-checkbox pmd-checkbox">
                                            <input className="custom-control-input" type="checkbox" defaultValue id="customCheckbox1" defaultChecked />
                                            <label className="custom-control-label pmd-checkbox-ripple-effect" htmlFor="customCheckbox1"> Lock Topic <br />
                                                <small className="font-blue"> Other users can not post on your topic.</small> </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 pl-5">
                                    <div className="mt-4">
                                        <button type="button" className="btn prm-btn btn-round font-12 mr-1" onClick={handleClose}>POST</button>
                                        <button type="button" className="btn btn-outline-primary btn-round font-12">SAVE DRAFT</button>
                                    </div>
                                </div>
                            </div>
                        </small></form>


                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}
