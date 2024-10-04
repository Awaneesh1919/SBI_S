import React from 'react';
import { Tab, Tabs, Card, Button, Container } from 'react-bootstrap';
import './style.css';
import './styleFet.css'
const AppFeatures = () => {
  return (
    <Container className="pt-5">
    <div className="col-md-12 text-center">
      <h2>Karo Ek Nayi Shuruvaat, Humare Saath!</h2>
      <div className="features-tab col-sm p-2">
        <Tabs defaultActiveKey="equity" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="equity" title="Equity">
            <Card className="text-center mt-4">
              <Card.Body>
                <div className="row">
                  <div className="col-md-5">
                    <img src="https://www.sbisecurities.in/assets/images/home-equity-icon.png" alt="Invest in Equity" className="feature-img" />
                  </div>
                  <div className="col-md-7">
                    <Card.Title>Equity</Card.Title>
                    <ul>
                      <li>Comprehensive offerings</li>
                      <li>Investment ideas for both short-term profits and long-term growth.</li>
                      <li>Custom-tailored advisory service</li>
                    </ul>
                    <Button variant="primary" href="/products/equity-investments">Know More...</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="derivative" title="Derivative">
            <Card className="text-center mt-4">
              <Card.Body>
                <div className="row">
                  <div className="col-md-5">
                    <img src="https://www.sbisecurities.in/assets/images/home-derivatives-icon.webp" alt="Trade in Derivatives" className="feature-img" />
                  </div>
                  <div className="col-md-7">
                    <Card.Title>Derivative</Card.Title>
                    <ul>
                      <li>Gain from higher leverage and the ability to hedge your positions</li>
                      <li>Trade currency pairs for a future settlement date</li>
                      <li>Make more informed trading decisions, quickly and efficiently</li>
                    </ul>
                    <Button variant="primary" href="/products/derivatives-trading">Know More...</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="mutualfund" title="Mutual Fund">
            <Card className="text-center mt-4">
              <Card.Body>
                <div className="row">
                  <div className="col-md-5">
                    <img src="https://www.sbisecurities.in/assets/images/home-mutual-funds-icon.webp" alt="Invest in Mutual Funds" className="feature-img" />
                  </div>
                  <div className="col-md-7">
                    <Card.Title>Mutual Fund</Card.Title>
                    <ul>
                      <li>Systematically invest in well-managed and diversified funds</li>
                      <li>Maximize compounding and average purchase cost benefits</li>
                      <li>One-time solution to invest in professionally managed diversified fund for the long run</li>
                    </ul>
                    <Button variant="primary" href="/products/mutual-funds">Know More...</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="loans" title="Loans">
            <Card className="text-center mt-4">
              <Card.Body>
                <div className="row">
                  <div className="col-md-5">
                    <img src="https://www.sbisecurities.in/assets/images/home-pg-loans-icon.webp" alt="Apply for Loan" className="feature-img" />
                  </div>
                  <div className="col-md-7">
                    <Card.Title>Loans</Card.Title>
                    <ul>
                      <li>Invest in your dream property simply and quickly</li>
                      <li>Quick resolution to housing finance queries and attractive loan rates</li>
                      <li>Obtain a car loan quickly in a few simple steps</li>
                    </ul>
                    <Button variant="primary" href="https://app.sbisecurities.in/Loans/HomeLoan">Know More...</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="fixedIncome" title="Fixed Income">
            <Card className="text-center mt-4">
              <Card.Body>
                <div className="row">
                  <div className="col-md-5">
                    <img src="https://www.sbisecurities.in/assets/images/fd-img.webp" alt="Fixed Income Investment" className="feature-img" />
                  </div>
                  <div className="col-md-7">
                    <Card.Title>Fixed Income</Card.Title>
                    <ul>
                      <li>A perfect balance of returns, income, and security</li>
                      <li>Corporate Fixed Deposits</li>
                      <li>54EC Capital Gain Bonds</li>
                    </ul>
                    <Button variant="primary" href="/products/corporate-fds">Know More...</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
</Container>
  );
};

export default AppFeatures;
