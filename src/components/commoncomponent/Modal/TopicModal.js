import React, { useState } from 'react'
import { Modal, Button} from "react-bootstrap";
import './TopicModal.scss'
// import { Dropdown } from 'react-bootstrap';
// import choose from 'assets/images/choose.png';
// import topicIcon from 'assets/images/topic-icon2.png'
// import voiceImage from 'assets/images/voice-image.png'

export const TopicModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <div onClick={handleShow}>
                Topic
            </div>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h5 className="title title-border">Create Post</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                                      

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
