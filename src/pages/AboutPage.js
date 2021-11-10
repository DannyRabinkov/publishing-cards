import { Container } from "react-bootstrap";
import { GiDiamondsSmile } from "react-icons/gi";

function AboutPage() {
  return (
    <Container className="mainCont">
      <h1>
        {" "}
        My First React Project &nbsp; <GiDiamondsSmile></GiDiamondsSmile>
      </h1>
      <p
        className="aboutPara"
        style={{
          fontFamily: "ariel",
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          marginTop: "4rem",
          padding: "3rem",
          backgroundColor: "darkgray",
        }}
      >
        This is my first react project. In this site you can register to you'r
        own user and "collect" you'r favoarit stores that you'r usually buying
        from.Also, you can register as a business to open you'r own cards THAT
        PEOPLE WILL SEE!<br></br>
        <br></br>In this site i used a React framework combining a NODE.js api
        that i builte. BIG thank you to some Great people that advised me some
        things along the way!
      </p>
    </Container>
  );
}
export default AboutPage;
