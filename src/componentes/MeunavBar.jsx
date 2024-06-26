import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { GerenciarLogin } from "./GerenciarLogin";

function MeunavBar () {
    return (
      <>  

    {/* <Navbar expand="lg" className="bg-body-tertiary navbar navbar-expand navbar-dark bg-dark fixed-top"> */}
    <Navbar expand="lg" className="bg-body-tertiary bg-dark  fixed-top">
        {/* <Navbar expand="lg" className="bg-body-tertiary"> */}
        <Container>
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/produtos">Produtos</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <GerenciarLogin />
                </Navbar.Text>
            </Navbar.Collapse>

        </Container>
    </Navbar>
    
    </>
    );
}
export {MeunavBar};