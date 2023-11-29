import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import { Form, FormControl, Button, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Container>
        <div className={s.nav_bar}>
          <Link to="/">Home</Link>
          <Link to="/card">Card</Link>
          <Link to="/form">Form</Link>
          <Link to="/list">List</Link>
          <Link to="/tabs">Tabs</Link>

          <Form inline style={{ marginLeft: "auto", display: "flex" }}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ marginRight: "20px" }}
            />
            <Button variant="outline-info" className={s.customButton}>
              Search
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}
