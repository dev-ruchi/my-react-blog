import { Navbar, Container } from 'react-bootstrap'

export default function Nav() {
    return (
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Container>
                <Navbar.Brand href="#home">
                    ReactBlogApp
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
