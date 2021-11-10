import { signInUser } from "../helpers/FetchHelper";
import { Container } from "react-bootstrap";
import SignInComp from "../components/sign-in/SignInComp";
import { toast } from "react-toastify";
import { getMeData } from "../helpers/FetchHelper";

function SignInPage({ set }) {
  return (
    <Container>
      <h1>Sign in to you'r account!</h1>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          marginTop: "4rem",
          padding: "3rem",
          backgroundColor: "darkgray",
        }}
      >
        <SignInComp clickHandler={signIn}></SignInComp>
      </div>
    </Container>
  );

  function signIn(data) {
    signInUser(data, (response) => {
      if (response.token) {
        toast("Welcome to U", {
          onClose: () => window.location.reload(false),
        });
        localStorage.setItem("token", response.token);
        getMeData(response.token, (data) => {
          set(data);
        });
      } else {
        toast("Fail to log in");
      }
    });
  }
}
export default SignInPage;
