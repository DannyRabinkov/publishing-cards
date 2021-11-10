import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import { registerNewAccount } from "../helpers/FetchHelper";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import React from "react";

export default class BusinessRegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser = (data) => {
    registerNewAccount(data, (data) => {
      if (data._id) {
        toast("Account Created Successfully", {
          onClose: () => this.setState({ redirect: true }),
        });
      } else {
        toast("Eror Acount was not created");
      }
    });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/sign-in" />;

    return (
      <Container>
        <h1>Creat a business account here!</h1>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            marginTop: "4rem",
            padding: "3rem",
            backgroundColor: "darkgray",
          }}
        >
          <SimpleRegistrationComp
            clickHandler={this.registerUser}
            text="Sign up"
          ></SimpleRegistrationComp>
        </div>
      </Container>
    );
  }
}
