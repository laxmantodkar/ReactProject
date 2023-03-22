import React, { useEffect }  from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

const Course=({course})=>
{
  useEffect(()=>{
    document.title="Course";
}, []);
 return(
     <div style={{textAlign:"center"}}>
        <Card>
          <CardBody>
          <CardTitle><h3>{course.title}</h3></CardTitle>
          <CardText>{course.name}</CardText>
          <Button color="danger" className="mx-4">Delete</Button>
          <Button color="warning">Update</Button>
          </CardBody>
        </Card>
     </div> 
 )
}
export default Course;