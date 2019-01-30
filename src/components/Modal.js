import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Button } from "./theme";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal, msg } = value;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div id="modal">
                  <h5>{msg}</h5>
                  <Button onClick={() => closeModal()}>Go back</Button>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
    width: 32%;
    border: 2px #ccc solid;
    padding: 5px;
    border-radius: 9px;
  }
`;
