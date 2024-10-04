
import './style.css'; 

import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Container, Row, Col } from "react-bootstrap";

const AwardCarousel = () => {
  return (
    <Container className="pt-5">
      <Row>
        <Col lg={12}>
          <OwlCarousel
            className="owl-theme awards-carousel"
            loop
            margin={10}
            nav
            items={4}
            dots={false}
            autoplay={false}
            autoplayTimeout={3000}
          >
            <div className="award-box">
              <img
                src="https://www.sbisecurities.in/assets/images/award-cdsl-1.webp"
                alt="Received Appreciation from CDSL"
                className="img-responsive"
              />
              <p className="fw-bold mb-1 sub-head">Appreciation from CDSL</p>
              <p>Contribution to 3 Crore Active Accounts in CDSL (2021)</p>
            </div>

            <div className="award-box">
              <img
                src="https://www.sbisecurities.in/assets/images/award-bse-2.png"
                alt="Received Top Performer Award in OFS Segment from BSE"
                className="img-responsive"
              />
              <p className="fw-bold mb-1 sub-head">BSE Award</p>
              <p>Top Performer in OFS Segment FY 2018-19</p>
            </div>

            <div className="award-box">
              <img
                src="https://www.sbisecurities.in/assets/images/award-technology-excellence-3.webp"
                alt="Received Technology Excellence Awards 2022"
                className="img-responsive"
              />
              <p className="fw-bold mb-1 sub-head">
                Technology Excellence Awards 2022
              </p>
              <p>
                (Quantic) Digital Customer Experience Transformation Initiative
              </p>
            </div>

            <div className="award-box">
              <img
                src="https://www.sbisecurities.in/assets/images/award-nsdl-4.webp"
                alt="Received Star Performer Award from NSDL"
                className="img-responsive"
              />
              <p className="fw-bold mb-1 sub-head">
                NSDL Star Performer Award (2019)
              </p>
              <p>Best performance in accounts growth rate (BIG DPs)</p>
            </div>
          </OwlCarousel>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col md={12}>
          <div className="bg-theme">
            <Row className="justify-content-center">
              <Col md={12}>
                <Row className="row-reverse">
                  <Col lg={6}>
                    <img
                      src="https://www.sbisecurities.in/assets/images/home-open-demat-account-mobile.webp"
                      alt="Demat and Trading Account Online"
                      className="sec-img disp-web"
                    />
                    <img
                      src="https://www.sbisecurities.in/assets/images/Phone_Mock_Render_1 1.svg"
                      alt="Demat and Trading Account Online"
                      className="disp-mob"
                    />
                  </Col>
                  <Col lg={6}>
                    <div className="ps-2 pe-2 invest-sec">
                      <h2>Stop Scrolling, Start investing!</h2>
                      <p className="bg-theme-p">
                        Investing on the go made simple, fast and intuitive.
                      </p>
                      <div className="pt-3">
                        <p>
                          <span>
                            <a
                              href="https://www.sbisecurities.in/android"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://www.sbisecurities.in/assets/images/download-sbi-securities-app-google-play.png"
                                alt="SBI Securities App Download button for Google Play Store"
                                className="invest-icon me-2"
                              />
                            </a>
                          </span>
                          <span>
                            <a
                              href="https://www.sbisecurities.in/ios"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://www.sbisecurities.in/assets/images/download-sbi-securities-app-app-store.png"
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
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AwardCarousel;
