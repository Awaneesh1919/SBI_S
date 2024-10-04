import './style.css'; 

import React from "react";
import { Container } from 'react-bootstrap';
import OwlCarousel from "react-owl-carousel";

const Testimonials = () => {
  return (
    <Container className="pt-5">
    <div className="col-md-12 pb-5">
      <h2 className="text-center">Trust Aur Growth, Dono</h2>
      <p className="text-center p1 pt-2">
        India's trusted investment partner of choice
      </p>
      <div className="row pt-5">
        <div className="col-lg-12">
          <OwlCarousel
            className="owl-theme testimonials-carousel"
            loop
            margin={10}
            nav
            items={3}
            dots={false}
            autoplay={true}
            autoplayTimeout={3000}
            navText={[
              '<i class="fa fa-long-arrow-left"></i>',
              '<img class="arrow-right" src="https://www.sbisecurities.in/assets/images/arrow_forward_24px.png" />',
            ]}
          >
            <div>
              <img src="https://www.sbisecurities.in/assets/images/Vector.png" className="quotes-img" alt="quote" />
              <div className="testimonials-box">
                <p className="content">
                  Thank you for the new platform. It is very easy to operate. As I am a regular trader, I've migrated from the free plan to the paid plan to save on brokerage charges.
                </p>
                <p>
                  - <span className="blog-nm">Omkar</span>
                </p>
              </div>
            </div>

            <div>
              <img src="https://www.sbisecurities.in/assets/images/Vector.png" className="quotes-img" alt="quote" />
              <div className="testimonials-box">
                <p className="content">
                  I would like to thank the SBI Securities team for the awesome trading platform and easy-to-read reports. Their regular research inputs help in making diligent and timely calls for my investments. Well done😊
                </p>
                <p>
                  - <span className="blog-nm">Vishal</span>
                </p>
              </div>
            </div>

            <div>
              <img src="https://www.sbisecurities.in/assets/images/Vector.png" className="quotes-img" alt="quote" />
              <div className="testimonials-box">
                <p className="content">
                  I had a memorable experience with SBI Securities. I am a big fan of their professional trading platform. With the advanced app, I can trade on the go. Also, the Watchlist feature in the app is the best thing they have. Thank you again!
                </p>
                <p>
                  - <span className="blog-nm">Poornima</span>
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Testimonials;
