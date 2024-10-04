import React from 'react';
import './style.css'; 

const Footer = () => {
  return (
    <>
    <footer className="container footer mt-5">
      <div className="col-md-12 pt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4 col-6 pb-4">
                <h5 className="mb-1 fw-bold">Quick Links</h5>
                <p className="mb-1">
                  <a href="/about-us" className="footer-links">About Us</a>
                </p>
                <p className="mb-1">
                  <a href="/csr" className="footer-links">CSR</a>
                </p>
                <p className="mb-1">
                  <a href="/trading-platform" className="footer-links">Platforms</a>
                </p>
                <p className="mb-1">
                  <a href="/holiday-calendar" className="footer-links">Holiday Calendar</a>
                </p>
              </div>
              <div className="col-md-4 col-6 pb-4">
                <h5 className="mb-1 fw-bold">Login</h5>
                <p className="mb-1">
                  <a href="https://trade.sbisecurities.in/" target="_blank" rel="noreferrer" className="footer-links">Trade Login</a>
                </p>
                <p className="mb-1">
                  <a href="https://app.sbisecurities.in/sslreport/dplogin_v2.aspx" target="_blank" rel="noreferrer" className="footer-links">DP Login</a>
                </p>
                <p className="mb-1">
                  <a href="/open-nri-investment-account" target="_blank" rel="noreferrer" className="footer-links">NRI Zone</a>
                </p>
              </div>
              <div className="col-md-4 col-6 pb-4">
                <h5 className="mb-1 fw-bold">Important Communication</h5>
                <p className="mb-1">
                  <a href="/procurement-news" className="footer-links">Request for Proposal</a>
                </p>
                <p className="mb-1">
                  <a href="/disclosure" className="footer-links">Disclosures</a>
                </p>
                <p className="mb-1">
                  <a href="/announcement" className="footer-links">Announcements</a>
                </p>
              </div>
              <div className="col-md-4 col-6 pb-4">
                <h5 className="mb-1 fw-bold">Knowledge Centre</h5>
                <p className="mb-1">
                  <a href="/knowledge-center/expert-talk" className="footer-links">Blog</a>
                </p>
              </div>
              <div className="col-md-4 col-6 pb-4">
                <h5 className="mb-1 fw-bold">Useful Links</h5>
                <p className="mb-1">
                  <a href="/careers" className="footer-links">Careers</a>
                </p>
                <p className="mb-1">
                  <a href="/downloads" className="footer-links">Downloads</a>
                </p>
                <p className="mb-1">
                  <a href="/contact-us" className="footer-links">Contact Us</a>
                </p>
                <p className="mb-1">
                  <a href="/payment-recovery" className="footer-links">Recovery Module</a>
                </p>
                <p className="mb-1">
                  <a href="https://udn.sbisecurities.in/Freeze/" target="_blank" rel="noreferrer" className="footer-links">Block Online Access</a>
                </p>
              </div>
              <div className="col-md-4 col-6 pb-4">
                <h5 className="mb-1 fw-bold">Where we are</h5>
                <p className="mb-1">Marathon Futurex, B-wing, 12th Floor, Lower Parel East, Mumbai - 400013</p>
                <p className="mb-1">
                  <a href="tel:02268545555" className="footer-link">022 6854 5555</a> / 
                  <a href="tel:02240014155" className="footer-link">022 4001 4155</a>
                </p>
                <p className="mb-1">
                  <a href="mailto:helpdesk@sbicapsec.com" className="footer-link">helpdesk@sbicapsec.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-12 pb-3">
              <h5 className="fw-bold">Our Apps</h5>
              <p>
                <span>
                  <a href="https://www.sbisecurities.in/android" target="_blank" rel="noreferrer">
                    <img src="https://www.sbisecurities.in/assets/images/download-sbi-securities-app-google-play.png" alt="Google Play Store" className="footer-img me-2"/>
                  </a>
                </span>
                <span>
                  <a href="https://www.sbisecurities.in/ios" target="_blank" rel="noreferrer">
                    <img src="https://www.sbisecurities.in/assets/images/download-sbi-securities-app-app-store.png" alt="Apple App Store" className="footer-img me-3"/>
                  </a>
                </span>
              </p>
            </div>
            <div className="col-md-12 pb-4">
              <h5 className="fw-bold">Stay Connected</h5>
              <p>
                <span>
                  <a href="https://www.facebook.com/sbisecurities" target="_blank" rel="noreferrer">
                    <i className="bi bi-facebook social-icon"></i>
                  </a>
                </span>
                <span>
                  <a href="https://twitter.com/_sbisecurities" target="_blank" rel="noreferrer">
                    <i className="bi bi-twitter social-icon"></i>
                  </a>
                </span>
                <span>
                  <a href="https://in.linkedin.com/company/sbisecurities" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin social-icon"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/sbisecurities/" target="_blank" rel="noreferrer">
                    <i className="bi bi-instagram social-icon"></i>
                  </a>
                </span>
                <span>
                  <a href="https://youtube.com/channel/UCpAG_iCjKJ8BK8YHgn9cxCQ" target="_blank" rel="noreferrer">
                    <i className="bi bi-youtube social-icon"></i>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-1 col-md-12 text-center">
      <p className="address_cls">
        <b>SBICAP Securities Limited</b><br />
        AMFI Registered Mutual Fund Distributor<br />
        CIN: U65999MH2005PLC155485
      </p>
      <p>
      Equities: Trading through SBICAP Securities Limited I Website: www.sbisecurities.in SEBI Registration No.: Stock Broker: INZ000200032 | DP Registration No.: IN-DP-314-2017 | Research Analyst : INH000000602 | IRDAI Corporate Agency Reg. No. CA0103; AMFI Reg. No. ARN-0011 (Date of initial registration: 19th August 2005 and valid upto 18th February 2027); PFRDA Reg. No. POP26092018. In case of any grievances please write to complaints@sbicapsec.com DP related grievance can be sent to :dp.grievance@sbicapsec.com | NPS related grievance can be sent to : Npsgrievance@sbicapsec.com | Compliance officer – Mr. Rajiv Kejriwal , email -compliance@sbicapsec.com; Tel No.- 022 – 69316510 
       </p>
       <p>SBICAP Securities Limited is authorized by the Insurance Regulatory and Development Authority of India to act as a Corporate Agent from 01- April- 2022 to 31-March 2025 for procuring or soliciting insurance business of Life, General and Health under license number CA0103, Category: Composite. SBICAP Securities Ltd. does not underwrite the risk or act as an insurer. The advertisement contains only an indication of the cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale. SBI Logo displayed belongs to State Bank of India and used by SBICAP Securities Limited under license. Personal information as submitted by you will be shared with SBICAP and insurer in order to complete your application. By continuing, you provide your consent for the above and authorize SBICAP Securities representatives to contact you through call, SMS, WhatsApp or E-mail for providing assistance towards the application process. </p>
       <p>BEWARE OF SPURIOUS PHONE CALLS AND FICTITIOUS /FRAUDULENT OFFERSIRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint. To read more, please click here - </p>
      <p>Copyright © 2024. All rights Reserved. SBICAP Securities Limited.Site is best viewed in edge browser, Firefox 38+, Chrome 50+ at 1366x768 pixel resolution. Windows 10 and above</p>
      
    </div>
    </footer>
    <div>
            <div> <hr /></div>
      <div className="col-md-12 text-center pb-5 mb-3">
        <small className="sub-footer">
          <a href="/investor-charter" className="footer-links">Investor Charter</a> |
          <a href="/investor-awareness" className="footer-links">Investor Awareness</a> |
          <a href="/security-tips" className="footer-links">Security Tips</a> |
          <a href="/disclaimer" className="footer-links">Disclaimer</a> |
          <a href="/privacy-policy" className="footer-links">Privacy Policy</a> |
          <a href="/cookies-policy" className="footer-links">Cookies Policy</a>
        </small>
      </div>
    </div>
    </>
  );
};

export default Footer;
