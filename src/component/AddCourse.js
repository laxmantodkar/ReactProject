import React, { useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";


const AddCourse = () => {
    useEffect(()=>{
        document.title="Add All Course";
        
    }, []);
    return (
        <div style={{ padding:40 }}>
            <Container>
                <Form>
                    <FormGroup>
                        <Label>Course Id</Label>
                        <Input type="text" name="courseId" id="courseId"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Course Name</Label>
                        <Input type="text" name="courseName" id="courseName"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Course Description</Label>
                        <Input type="text" name="courseDescription" id="courseDescription"></Input>
                    </FormGroup>
                    <div className="text-center">
                    <Button color="success" className="mx-3">AddCourse</Button>
                    <Button color="danger">Delete</Button></div>
                </Form>
            </Container>
        </div>

    );
}

export default AddCourse;