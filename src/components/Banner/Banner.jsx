import React from "react";
import shape01 from "../../assets/img/banner/banner_shape01.png";
import shape02 from "../../assets/img/banner/banner_shape02.png";
import shape03 from "../../assets/img/banner/banner_shape03.png";
import fireIcon from "../../assets/img/icon/fire.png";
import CountDownOne from "../CountDown/CountDownOne";
import CounterArea from "../../components/CounterArea/CounterArea";

const Banner = (props) => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img src={shape01} alt="" className="img-one" />
        <img src={shape02} alt="" className="img-two" />
        <img src={shape03} alt="" className="img-three" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img src={fireIcon} alt="" />
              <h2 className="title">
              Claim Your <span>Airdrop</span> Instantly & Securely
              </h2>
              <h5>Seamless, secure, and hassle-free. Connect your wallet and receive your airdrop in just one click.</h5>
            </div>
            <div className="banner-progress-wrap mb-20">
              <ul>
                <li>Pre-Launch</li>
                <li>Live Airdrops</li>
                <li>Bonus Rewards</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                {/* 65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span> */}
              </h4>
            </div>
          </div>
        </div>
       
      </div>
       <div className="row justify-content-center mt-20">
         
          <div className="col-xl-10 mt-20">
            <div className="banner-countdown-wrap">
              <CounterArea />
            </div>
            
            </div>
        </div>
    </section>
  );
};

export default Banner;

 {/* <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">ICO Will Start In..</h2>

              <CountDownOne />
            </div>
          </div> */}