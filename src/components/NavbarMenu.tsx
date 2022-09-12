import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import logo from "../assets/logo.png";
import { userInfo } from "../mocks/mocks";
import doctor from "../mocks/doctor.png";

const NavbarMenu = () => {
	let language = "EN";

	return (
		<nav className="navbar-container">
			<div className="navbar-buttons">
				<Navbar expand="lg">
					<Container fluid>
						<Navbar.Brand href="#home">
							<img className="logo-image" src={logo}></img>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbar-menu" />
						<Navbar.Collapse id="navbar-menu">
							<Nav>
								<NavDropdown
									id="nav-dropdown-menu"
									title={[
										"Dashboard",
										<span className="material-symbols-outlined">
											expand_more
										</span>,
									]}
									className="dashboard-title btn-secondary">
									<NavDropdown.Item href="#action/3.2">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Setup</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.4">
										Separated link
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Menu</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.4">
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown
									id="nav-dropdown-menu"
									title={[
										"Setup",
										<span className="material-symbols-outlined">
											expand_more
										</span>,
									]}
									className="dashboard-title btn-secondary"
								>
									<NavDropdown.Item href="#action/3.1">page</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">page</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">page</NavDropdown.Item>
								</NavDropdown>{" "}
								<NavDropdown
									id="nav-dropdown-menu"
									title={[
										"Menu",
										<span className="material-symbols-outlined">
											expand_more
										</span>,
									]}
									className="dashboard-title btn-secondary"
								>
									<NavDropdown.Item href="#action/3.1">page</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">page</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">page</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
			<section className="user-info">
				{userInfo.admin ? (
					<span className="material-symbols-outlined">star</span>
				) : (
					""
				)}
				<div className="user-info__name">{userInfo.user}</div>
				<div className="user-info__photo">
					<img className="user-info__photo-user" src={doctor}></img>
				</div>
				<span className="badge badge-pill badge-info">5</span>

				<Dropdown className="dropdown-language" align="end">
					<DropdownToggle id="dropdown-language-button">
						{language}
						<span className="material-symbols-outlined">expand_more</span>
					</DropdownToggle>

					<DropdownMenu>
						<Dropdown.Item className="dropdown-menu-language" href="#">
							English
						</Dropdown.Item>
						<Dropdown.Item className="dropdown-menu-language" href="#">
							French
						</Dropdown.Item>
						<Dropdown.Item className="dropdown-menu-language" href="#">
							Spanish
						</Dropdown.Item>
					</DropdownMenu>
				</Dropdown>
			</section>
		</nav>
	);
};

export default NavbarMenu;
