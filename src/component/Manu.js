import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Manu = () => {
    useEffect(()=>{
        document.title="Manu";
    }, []);
    return (
        <div style={{padding:10}}>
            <ListGroup >    
                <Link className="list-group-item list-group-item-action" tag='a' to="/" action>Home</Link>
            </ListGroup>
            <ListGroup>
                <Link className="list-group-item list-group-item-action " tag='a' to="add-course" action>Add Course</Link>
            </ListGroup>
            <ListGroup>
                <Link className="list-group-item list-group-item-action " tag='a' to="view-course" action>View Course</Link>
            </ListGroup>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag='a' to="#" action>About</Link>
            </ListGroup>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag='a' to="#" action>Contact</Link>
            </ListGroup>


        </div>
    )
}
export default Manu;