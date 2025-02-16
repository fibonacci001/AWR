import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Popcoin from "../../component/Popularcoin";
import Popmodal from "../../component/Popmodal";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { MdVerified } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";
import '../../component/styles.css';
const SalesTabContent = (props) => {
    const [modalShow, setModalShow] = useState(false);
        const [openmodal, setopenmodal] = useState(false)
        const handlepop = () => {
            setopenmodal(true)
        }
    
  return (
    <>
    
    <div
      className={cn("tab-pane fade", props.className)}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.ariaLabel}
    >
      <div className="chart-content-inner">
        <h2 className="title">{props.title}</h2>
        <p>{props.description}</p>
        <Link  className="btn" onClick={() => setModalShow(true)}>
          CONNECT
        </Link>
      </div>
    </div>
    <VerticallyCenteredModal
        show={modalShow}
        setModalShow ={setModalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

function VerticallyCenteredModal({show, onHide, setModalShow}) {
  const [isopen, setisopen] = useState(true)
  if (isopen === false) {
    setModalShow(false)
  }
    return (
      <Modal
      show={show}
      onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter mod-title">
            Connect a wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
       
          <Popcoin  />

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default SalesTabContent;
