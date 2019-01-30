import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { handleEntailmentRequest } = value;

          return (
            <NavWrapper>
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="nav-link"
                onClick={e => {
                  handleEntailmentRequest(e);
                }}
              >
                Home
              </Link>
              <Link
                to="/Upload"
                style={{ textDecoration: "none" }}
                className="nav-link"
                onClick={e => {
                  handleEntailmentRequest(e);
                }}
              >
                Upload
              </Link>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  padding: 1.5rem;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    padding-left: 2rem;
    text-transform: capitalize !important;
  }
`;
