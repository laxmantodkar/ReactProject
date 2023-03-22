import React, { useEffect }  from "react";
import { Button, Container } from "reactstrap";

function Home({ name }) {
    useEffect(()=>{
        document.title="Home";
    }, []);
    return (

        <div style={{ textAlign: "center",padding:40 }}>
            <Container>
                <h1>Start learning cources</h1>
                <p>This Java Full Stack Developer program guarantees* successful placement performance based
                    on the average salary packages offered, the hiring companies participating, and speed of
                    offer roll-out.</p>
                <Button color="primary">Start learning . . .</Button>
            </Container>
        </div>

    );
}

export default Home;