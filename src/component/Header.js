import React, { useEffect }  from "react";
import { Card, CardBody, Container } from "reactstrap";

function Header() {
  useEffect(()=>{
    document.title="Header";
}, []);
  return (
    <div className=" text-center" style={{ background: "green",padding:30}}>
      <Container >
        <h1>Welcome to Course Application</h1>

      </Container>
    </div>
  )
}
export default Header;