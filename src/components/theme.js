import styled from "styled-components";

// Forms, inputs, buttons

export const NavWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  text-transform: capitalize;
`;

export const Label = styled.label`
  width: 10%;
  height: 32px;
  float: left;
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

export const Input = styled.input`
  width: 86%;
  height: 32px;
  float: left;
  margin-bottom: 0.3rem;
  padding: 0 10px;
  background: #f3f6f8;
  border: 1px solid #b3b6b9;
  border-radius: 2px;
  line-height: 1.33333;
  font-weight: 600;
`;

export const Button = styled.button`
  height: 32px;
  background-color: ${props =>
    props.saveLeave
      ? "var(--lightBlue)"
      : props.leave
      ? "#dc3545"
      : "#5995ef;"};
  color: #fff;
  border-radius: 3px;
  float: right;
  margin-right: 2%;
`;
