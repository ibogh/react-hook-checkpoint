import React, {useState} from 'react'
import { Button, Navbar , Form , FormControl} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import NewMovie from './NewMovie'

function NavBar({addNewMovie, setRateFilter, setSearchFilter}) {
    const ratingChanged = (newRating) => {
        setRateFilter(newRating);
    };
    const [show, setShow] = useState(false);
    function showAdd() {
        console.log("add movie clicked")
        setShow(!show);
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => setSearchFilter(event.target.value)}/>
                    <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    />
                </Form>
                <Button variant="secondary" style={{marginLeft:'auto'}} onClick={showAdd}>Add Movie</Button>
            </Navbar>
            {show? (<NewMovie show={show} setShow={setShow} addNewMovie={addNewMovie}/>) : null}
        </>
    )
}
export default NavBar;