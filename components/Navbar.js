import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Styles from '../styles/navbar.module.css'
function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#" className='text-danger fs-3'>Reflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className=' text-bg-light'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home" className={Styles.li}>Home</Nav.Link>
            <Nav.Link href="/discover" className={Styles.li}>Discover</Nav.Link>
            <Nav.Link href="/playing" className={Styles.li}>Playing</Nav.Link>
            <Nav.Link href="/popular" className={Styles.li}>Popular</Nav.Link>
            <Nav.Link href="/top" className={Styles.li}>Top</Nav.Link>
            <Nav.Link href="/upcoming" className={Styles.li}>Upcoming</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 text-bg-secondary border border-0 shadow-none rounded-5"
            />
            <Button variant="outline-success shadow-none border border-0 bg-danger text-light rounded-5">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavScrollExample;