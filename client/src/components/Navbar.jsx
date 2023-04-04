import { Link, useNavigate, NavLink } from "react-router-dom";
import baseURL from "../utils/baseURL";
import { useDispatch, useSelector } from "react-redux";
import { REMOVEUSER } from "../redux/userSlice";
import { GetAllCartItems } from "../redux/cartSlice";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";

const NavbarMain = () => {
  const count = useSelector(GetAllCartItems);
  const user = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const Links = {
    Home: "/",
    Products: "/products",
    SignIn: "/sign-in",
    SignUp: "/sign-up",
  };

  const navigate = useNavigate();
  const handleSignOut = async () => {
    const res = await baseURL.get("http://localhost:4500/api/v1/auth/signout");
    localStorage.removeItem("name");
    dispatch(REMOVEUSER());
    navigate("/");
  };
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ top: "0", position: "sticky", zIndex: "10" }}
    >
      <Container fluid>
        <Link to="/" className="navbar-brand">
          🛒QuikBay
        </Link>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-4"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="md-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
            {user ? (
              <>
                <Navbar.Text>{user}</Navbar.Text>
                <Button
                  onClick={() => {
                    dispatch(REMOVEUSER());
                  }}
                >
                  signout
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/sign-up" className="nav-link">
                  signup
                </NavLink>
                <NavLink to="/sign-in" className="nav-link">
                  signin
                </NavLink>
              </>
            )}
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <NavLink
          to="/cart"
          className="cart nav-link"
          style={{ postion: "relative" }}
        >
          <BsCart4 style={{ fontSize: "30px" }} />
          <span>{count.items.length}</span>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
