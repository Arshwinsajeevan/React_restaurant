import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://i.postimg.cc/9XYhLXwH/1600w-je-SR74-GRMC8.webp"
                            width="50"
                            height="50"
                            className="d-inline-block align-center"
                        />{' '}
                        Thattukada
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header