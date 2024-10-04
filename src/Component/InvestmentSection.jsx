import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import './style.css'; 

const InvestmentSection = () => {
    return (
      <Container className="bg-theme pt-5 pb-5">
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2">
            <img
              src="https://www.sbisecurities.in/assets/images/home-open-demat-account-mobile.webp"
              alt="Demat and Trading Account Online"
              className="sec-img disp-web img-fluid"
            />
          </Col>
          <Col lg={6} className="order-lg-1">
            <div className="ps-2 pe-2 invest-sec">
              <h2>Stop Scrolling, Start investing!</h2>
              <p>Investing on the go made simple, fast, and intuitive.</p>
              <div className="pt-3">
                <p>
                  <span>
                    <a href="https://www.sbisecurities.in/android" target="_blank" rel="noopener noreferrer">
                      <img
                        src="assets/images/download-sbi-securities-app-google-play.png"
                        alt="SBI Securities App Download button for Google Play Store"
                        className="invest-icon me-2"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.sbisecurities.in/ios" target="_blank" rel="noopener noreferrer">
                      <img
                        src="assets/images/download-sbi-securities-app-app-store.png"
                        alt="SBI Securities App Download button for Apple Store"
                        className="invest-icon me-3"
                      />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };


  export default InvestmentSection