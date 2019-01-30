import React, { Component } from "react";
const ProductContext = React.createContext();

//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    modalOpen: false,
    msg: "",
    modalButton: false,
    changeStatus: false,
    inputField: {
      f_name: "jonny",
      l_name: "raj",
      email: "example@gmail.com",
      password: "123456",
      dob: "1990-01-01",
      redirectLink: "",
      saveLeaveStatus: false
    }
  };

  onUnload(event) {
    event.returnValue =
      "user can only leave the page when he submitted his/her changes";
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload);
  }

  handleChange = e => {
    const name = e.target.name;
    const { inputField } = this.state;
    if (name === "f_name") {
      inputField.f_name = e.target.value;
    } else if (name === "l_name") {
      inputField.l_name = e.target.value;
    } else if (name === "email") {
      inputField.email = e.target.value;
    } else if (name === "password") {
      inputField.password = e.target.value;
    } else if (name === "dob") {
      inputField.dob = e.target.value;
    }
    this.setState({
      inputField,
      changeStatus: true,
      msg: "please save changed."
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.inputField);
    this.leavePage();
  };

  handleEntailmentRequest = e => {
    if (this.state.changeStatus) {
      e.preventDefault();
      this.setState({
        msg: "user can only leave the page when he submitted his/her changes",
        modalButton: true,
        redirectLink: e.target.pathname
      });
    }
  };
  leavePage = () => {
    const { inputField } = this.state;
    inputField.f_name = "jonny";
    inputField.l_name = "raj";
    inputField.email = "example@gmail.com";
    inputField.password = "123456";
    inputField.dob = "1990-01-01";
    this.setState({
      inputField,
      changeStatus: false,
      modalOpen: false,
      msg: "",
      modalButton: false,
      redirectLink: "",
      saveLeaveStatus: false
    });
  };

  saveLeave = () => {
    this.setState(() => {
      return {
        saveLeaveStatus: true,
        modalButton: false,
        changeStatus: false
      };
    });
  };

  openModal = () => {
    if (this.state.changeStatus) {
      this.setState(() => {
        return { modalOpen: true };
      });
    }
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  closeModalLink = () => {
    this.setState(() => {
      return { modalButton: false };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          openModal: this.openModal,
          closeModal: this.closeModal,
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange,
          handleEntailmentRequest: this.handleEntailmentRequest,
          leavePage: this.leavePage,
          closeModalLink: this.closeModalLink,
          saveLeave: this.saveLeave
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
