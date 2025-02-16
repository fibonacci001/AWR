import React from "react";
import chartImg from "../../assets/img/images/chart.png";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { MdVerified } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import Popcoin from "../../component/Popularcoin";
import Popmodal from "../../component/Popmodal";
import { useState, useEffect } from "react";
import '../../component/styles.css';
const Sales = () => {
     const [modalShow, setModalShow] = useState(false);
      const [openmodal, setopenmodal] = useState(false)
      const handlepop = () => {
          setopenmodal(true)
      }
  
  const chart_info_list = [
    "Early Supporters: 70%",
    "Community Rewards: 30%",
    "Liquidity & Staking: 10%",
    "Exclusive Bonuses",
    "Ecosystem Growth:10%",
    "Referral Incentives",
  ];

  return (
    <>
    <section id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src={chartImg} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title="CLAIM AIRDROP"
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />

                  <SalesTabButton
                    title="CONNECT WALLET"
                    className=""
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={false}
                  />
                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="Get rewarded instantly with Airdrop tokens!"
                    description=" Link your wallet to claim your free cleared airdrop instantly. 
                    Secure, seamless, and rewarding—don’t miss out on exclusive token benefits!"
                    link="/"
                  />

                  <SalesTabContent
                    className={""}
                    id="token"
                    ariaLabel="token-tab"
                    title="Seamless access to your Token rewards!"
                    description=" Link your wallet securely and start enjoying the benefits of RWA airdrop claim platform.
                     Instant access, hassle-free transactions, and exclusive rewards await!"
                    link="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
export default Sales;
