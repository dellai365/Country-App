import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { Nav, Form, FormControl, Navbar, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterActions } from './Slice'
const Bar = () => {


    const dispatch = useDispatch();
    let searchterm = useRef();

    const handleFilterByRegion = (reg) => {
        dispatch(filterActions.filterreg(reg))

    }


    const HandleReset = () => {
        dispatch(filterActions.resetAll())
    }

    const handleClick = (reg) => {
        HandleReset()
        handleFilterByRegion(reg)

    }

    const cherche = (name) => {
        dispatch(filterActions.cherche(name))
    }

    const handleSearch = (name) => {

        HandleReset()
        cherche(name)

        searchterm.current.value = "";
    }
    const handleKeyPress = (event, name) => {
        if (event.key === 'Enter') {
            handleSearch(name)
        }
    }





    return (
        <Navbar bg="light" fixed="top" style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1em",
            fontSize: "15px",
            fontWeight: "bold"
        }} >
            <Link to="/" style={{ textDecoration: "none" }}> <Navbar.Brand style={{ fontSize: "25px", paddingLeft: "30px" }} onClick={() => { HandleReset() }}  >See the World</Navbar.Brand> </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{
                        maxHeight: '100px', display: "flex",
                        justifyContent: "space-between",
                        gap: "2em",

                    }}
                    navbarScroll
                    justify variant="tabs"


                >
                    <Nav.Link style={{ color: "#6F3141" }} onClick={() => { HandleReset() }}>World</Nav.Link>
                    <Nav.Link style={{ color: "#6F3141" }} onClick={() => { handleClick("Africa") }}>Africa</Nav.Link>
                    <Nav.Link style={{ color: "#6F3141" }} onClick={() => { handleClick("Europe") }}>Europe</Nav.Link>
                    <Nav.Link style={{ color: "#6F3141" }} onClick={() => { handleClick("Asia") }}>Asia</Nav.Link>
                    <Nav.Link style={{ color: "#6F3141" }} onClick={() => { handleClick("Oceania") }}>Oceania</Nav.Link>
                    <Nav.Link style={{ color: "#6F3141" }} onClick={() => { handleClick("Americas") }}>Americas</Nav.Link>


                </Nav>
                <Form className="d-flex" style={{ paddingLeft: "8em" }}>
                    <FormControl
                        type="search"
                        placeholder="Search By Country name"
                        className="mr-2"
                        aria-label="Search"
                        ref={searchterm}
                        onKeyDown={(e) => { handleKeyPress(e, searchterm.current.value.toLowerCase()) }}

                    />
                    <Button variant="outline-success" onClick={() => {
                        handleSearch(searchterm.current.value.toLowerCase())
                    }
                    } >Search</Button>
                </Form>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Bar