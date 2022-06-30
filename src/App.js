import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { Button ,NavDropdown,Nav,Form,FormControl,Navbar,Container,Card} from 'react-bootstrap';
import k1 from "./imagg/k1.jpg";
import k2 from "./imagg/k2.png";
import m1 from "./imagg/m1.jpg";
import m2 from "./imagg/m2.jpeg";
import m3 from "./imagg/m3.jpg";
import Childe from './component/Childe';

class App extends React.Component {
  state={
    show : false,
    }
    showfun = () => {
      this.setState({
        ...this.state,
        show: !this.state.show,
      })
    }
  render() {
  return (
    <div className="App">
<Navbar bg="light" expand="lg">
  <Container fluid>
    <img className='imgg' src={k1}></img>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'  }}
        navbarScroll
      >
        <Nav.Link href="#action1" className='nav-link'>Home</Nav.Link>
        <Nav.Link href="#action2" className='nav-link'>Link</Nav.Link>
        <NavDropdown title="Link"  id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" className='nav-link'>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div>
<Card className="bg-dark text-white">
  <Card.Img src={k2} alt="Card image" />
  <Card.ImgOverlay>
    {/* <Card.Title>Toyota</Card.Title>
    <Card.Text>
    Toyota Motor Corporation, is a Japanese multinational automobile manufacturer headquartered in Toyota, Aichi, Japan. In 2017, Toyota had a structure of 364,445 employees worldwide and as of September 2018, it was the sixth largest company in the world by revenue.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text> */}
  </Card.ImgOverlay>
</Card>
<br></br>
<Form className='formc'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='form'>Vehicle Type</Form.Label>
    <Form.Control type="email" placeholder="search " />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='form'>production date</Form.Label>
    <Form.Control type="search " placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<br></br>
<div className='divcard'>
<Card style={{ width: '18rem' }}>
  <Card.Img height="300px" variant="top" src={m3} />
  <Card.Body>
    <Card.Title className='rad'>Toyota Shas 2022</Card.Title>
    <Card.Text className='rad'>
    The Toyota Shas 2022 came with many specifications, as it is distinguished by its great popularity and popularity among Saudis and Emiratis, due to the distinctive and traditional design of the car, as the design of the exterior structure is characterized by a rectangular grille,
    </Card.Text>
    <Button  variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img height="300px" variant="top" src={m2} />
  <Card.Body>
    <Card.Title className='rad'>Toyota Land Cruiser 2022</Card.Title>
    <Card.Text className='rad'>
    The 2022 Land Cruiser comes with a length of 4.97 meters, a width of about 1.99 meters, while the height of the car is about 1.86 meters. The car has a strong wheelbase of 2.9 meters. The car has the same exterior design as the platform
    </Card.Text>
    <Button  variant="primary">Go somewhere</Button>
  </Card.Body>
</Card><Card style={{ width: '18rem' }}>
  <Card.Img height="300px" variant="top" src={m1} />
  <Card.Body>
    <Card.Title className='rad'>Toyota Hilux 2022</Card.Title>
    <Card.Text className='rad'>
    Toyota introduced a new sports model from Hilux known as "Toyota Hilux Gr" with the appearance of a sports car, such as the model that was introduced in the Toyota Land Cruiser 2022. The car comes with a four-wheel drive and 6-cylinder engine.

    </Card.Text>
    <Button  variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
</div>
<br></br>
<p>An employee at Toyota, to know more, click on the blue button</p>
<Button  variant="primary" onClick={this.showfun}>Go somewhere</Button>
<br></br>
{this.state.show === true ? <Childe/> : null}

<div className='footer'>
<footer className="page-footer font-small blue pt-4 footer1">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            <img className='imgg' src={k1}></img>
              <p>
                Our site translates and publishes the latest versions of the
                Manhwa comics, and we maintain the privacy of our subscribers
                and the arrival of everything new to them We also welcome your
                contact with us...
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Email address : alshwaweshalsharidi@gmail.com</a>
                </li>
                <li>
                  <a href="#!">Phone Number : 00218925547007</a>
                </li>
                <li>
                  <a href="#!">Other Ph Num : 00218915547007</a>
                </li>
                <li>
                  <a href="#!">Address : Aluwaina-tunes</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <i class="fa-brands fa-instagram-square"></i>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="#"> Mangateam.com</a>
        </div>
      </footer>
      </div>
    </div>
  );
}
}
export default App;
