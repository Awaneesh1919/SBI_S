import Card from 'react-bootstrap/Card';


function Smallcard() {
  return (
    <>
    <h4>Blog</h4>
    <div className='row g-3'>
    <Card className='col-sm-3 p-2' >
    
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/news/blog/lp/How%20to%20read%20equity%20research%20reports.webp" />
  </Card>

  <Card className='col-sm-3'>
    
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/news/blog/lp/How%20to%20read%20equity%20research%20reports.webp" />
  </Card>

  <Card className='col-sm-3' >
    
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/news/blog/lp/Brainbees%20Solutions%20Ltd.-Firstcry-IPO%20Note.png" />
  </Card>

  <Card className='col-sm-3' >
    
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/news/blog/Investors%20guide%20to%20read%20annual%20reports-tn.webp" />
  </Card>

  </div>

  <h4>Video</h4>
  <Card className='col-sm-3' >
    
    <Card.Img variant="top" src="https://www.sbisecurities.in/fileserver/assets/images/demo/SBI%20Securities%20Brand%20Film.webp" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
    </Card.Body>
  </Card>
  
  </>
  );
}

export default Smallcard;