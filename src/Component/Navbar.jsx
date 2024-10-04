import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbars() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top" >
            <Container>
                <Navbar.Brand href="#home">
                    <img src="https://www.sbisecurities.in/assets/images/sbi-securities-logo.png" alt="SBI Securities" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <NavDropdown title="Product" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/1.1">Equity</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2">
                                Derivative
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.3">Margin Trading Facility</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.4">Equity Sip</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.5">ETF</NavDropdown.Item>
                            <NavDropdown title="Fixed Income" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/1.6.1">Corporate Fds</NavDropdown.Item>
                                <NavDropdown.Item href="#action/1.6.2">
                                    54EC Bonds
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Item href="#action/3.3">Mutual Fund </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">NRI Zone </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Home Loan </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Car Loan </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Insurance </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Research" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">Fundamental Research</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">
                                Technical Derivatives
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.3">Mutual Fund Research</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#support">Support</Nav.Link>
                        <NavDropdown title="More" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/Blog">Blog</NavDropdown.Item>
                            <NavDropdown.Item href="#action/Trading">
                                Trading Plateforms
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/FAQs">FAQs</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#refer"className='refer'>Refer & Earn</Nav.Link>
                        {/* <span className='refer'>Refer & Earn</span> */}
                    </Nav>
                    <Nav>
                        <Button variant="outline-danger" >
                            Login
                        </Button> &nbsp;
                        <Button variant="primary" className='demat_btn'>
                            Open a Demat A/C
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='container'>
        <Image src="https://www.sbisecurities.in/Home-Page-Web-Banner.5861b21b34c98e3c.webp" fluid />;
        </div>
        </>
    );
}

export default Navbars;