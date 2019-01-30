import React, { Component } from "react";
import Title from "./Title";
import { NavWrapper, Input, Button, Label } from "./theme";
import { ProductConsumer } from "../context";

export default class Inputform extends Component {
  render() {
    return (
      <React.Fragment>
        <Title name="our" title="Text From" />
        <ProductConsumer>
          {value => {
            const {
              handleSubmit,
              inputField,
              handleChange,
              openModal,
              saveLeaveStatus
            } = value;
            if (saveLeaveStatus) {
              var link = document.getElementById("savebutton");
              link.click();
            }
            return (
              <NavWrapper>
                <form onSubmit={handleSubmit}>
                  <Label>first name</Label>
                  <Input
                    type="text"
                    name="f_name"
                    placeholder="first name"
                    value={inputField.f_name}
                    onChange={handleChange}
                    onBlur={openModal}
                  />
                  <Label>last name</Label>
                  <Input
                    type="text"
                    name="l_name"
                    placeholder="last name"
                    value={inputField.l_name}
                    onChange={handleChange}
                    onBlur={openModal}
                  />
                  <Label>email</Label>
                  <Input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={inputField.email}
                    onChange={handleChange}
                    onBlur={openModal}
                  />
                  <Label>password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={inputField.password}
                    onChange={handleChange}
                    onBlur={openModal}
                  />
                  <Label>date of dirth</Label>
                  <Input
                    type="date"
                    name="dob"
                    placeholder="birthdate"
                    value={inputField.dob}
                    onChange={handleChange}
                    onBlur={openModal}
                  />
                  <Button type="submit" id="savebutton">
                    Submit
                  </Button>
                </form>
              </NavWrapper>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
