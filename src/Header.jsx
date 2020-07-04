import React from "react";
import {Navbar, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "./image/profil.jpg"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand>
                        <Link to="/">
                            <Image src={logo} alt="profile picture" rounded/>
                        </Link>
                    </Navbar.Brand>

                </Navbar>
            </>
        )
    }
}

