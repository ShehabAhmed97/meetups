import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import classes from './navigation.module.css'
import FavouratesContext from '../../store/favourates-context'
import { Navbar, Container, Nav } from 'react-bootstrap';
function Navigation() {
    const Ctx = useContext(FavouratesContext)
    const totalFavorites = Ctx.totalFavourates;
    return (
        <div>
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand style={{fontSize:"2.5rem",color:"#FC997C"}}>Meetups App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link>
                        <Link to="/meetups">All meetups</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/meetups/newmeetups">New meetups</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/meetups/favourates">Favorites</Link>
                        <span className={classes.badge}>{totalFavorites}</span>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}
export default Navigation 