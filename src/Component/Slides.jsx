
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import Nav from 'react-bootstrap/Nav';



function Slides() {
  return (
    <>
      <h4>Check What's New</h4>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div class="d-flex justify-content-sm-evenly">
            <div class=" d-flex justify-content-sm-evenly m-20 p-10">
              <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/CFD-July_Web.webp" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className='demat_btn'>Invest Now</Button>
                </Card.Body>
              </Card>
            </div>
            <div class=" d-flex justify-content-sm-evenly m-20 p-10">
              <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/platforms.webp" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className='demat_btn'>Download app</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="d-flex flex-row justify-content-sm-evenly flex-wrap m-2">
            <div class=" d-flex justify-content-sm-evenly m-30 p-20">
              <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/Emargin-card.webp" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className='demat_btn'>Invest Now</Button>
                </Card.Body>
              </Card>
            </div>
            <div class=" d-flex justify-content-sm-evenly m-30 p-20">
              <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/MF_ThodaKaro_Web-Banner.webp" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className='demat_btn'>Invest Now</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="d-flex flex-row justify-content-sm-evenly flex-wrap m-2">
            <div class=" d-flex justify-content-center m-20 p-10">
              <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/NPS_Tax_Benefit_01_Landing_Page.webp" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className='demat_btn'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div class=" d-flex justify-content-center m-20 p-10">
              <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/bg/Options-Arena-card_1.webp" alt='picture' />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" className='demat_btn'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>


      <h4>Karo Ek Nayi Shuruvaat, Humare Saath!</h4>
      <Tabs defaultValue={0}>
        <TabsList className='TabsList'>
          <Tab value={0}>Aquity</Tab>
          <Tab value={1}>Derivative</Tab>
          <Tab value={2}>Mutual Fund</Tab>
          <Tab value={3}>Loan</Tab>
          <Tab value={4}>Fixed Income</Tab>
        </TabsList>
        <TabPanel value={0}>
          <div class="card mb-3 container" style={{ width: '90%' }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <div className='hi'>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://www.sbisecurities.in/assets/images/home-equity-icon.png"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Equity</h5>
                <ul>
                  <li>Comprehensive offerings</li>
                  <li>Investment ideas for both for short-term profits or long-term growth.</li>
                  <li>Custom-tailored advisory service</li>
                </ul>
                <Button variant="primary" className='demat_btn'>
                  Know More...
                </Button>
              </div>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel value={1}><div class="card mb-3 container" style={{ width: '90%' }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <div className='hi'>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://www.sbisecurities.in/assets/images/home-equity-icon.png"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Equity</h5>
                <ul>
                  <li>Comprehensive offerings</li>
                  <li>Investment ideas for both for short-term profits or long-term growth.</li>
                  <li>Custom-tailored advisory service</li>
                </ul>
                <Button variant="primary" className='demat_btn'>
                  Know More...
                </Button>
              </div>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel value={2}>
        <div class="card mb-3 container" style={{ width: '90%' }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <div className='hi'>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://www.sbisecurities.in/assets/images/home-equity-icon.png"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Equity</h5>
                <ul>
                  <li>Comprehensive offerings</li>
                  <li>Investment ideas for both for short-term profits or long-term growth.</li>
                  <li>Custom-tailored advisory service</li>
                </ul>
                <Button variant="primary" className='demat_btn'>
                  Know More...
                </Button>
              </div>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel value={3}><div class="card mb-3 container" style={{ width: '90%' }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <div className='hi'>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://www.sbisecurities.in/assets/images/home-equity-icon.png"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Equity</h5>
                <ul>
                  <li>Comprehensive offerings</li>
                  <li>Investment ideas for both for short-term profits or long-term growth.</li>
                  <li>Custom-tailored advisory service</li>
                </ul>
                <Button variant="primary" className='demat_btn'>
                  Know More...
                </Button>
              </div>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel value={4}>
        <div class="card mb-3 container" style={{ width: '90%' }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <div className='hi'>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://www.sbisecurities.in/assets/images/home-equity-icon.png"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Equity</h5>
                <ul>
                  <li>Comprehensive offerings</li>
                  <li>Investment ideas for both for short-term profits or long-term growth.</li>
                  <li>Custom-tailored advisory service</li>
                </ul>
                <Button variant="primary" className='demat_btn'>
                  Know More...
                </Button>
              </div>
            </div>
          </div>
        </div>
        </TabPanel>
      </Tabs>
      <div>


      </div>

    </>
  );
}

export default Slides;