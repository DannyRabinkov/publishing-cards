import { ToastContainer } from "react-toastify";
import SinglePageAppComp from "./components/navigation/SinglePageAppComp";
import { useState, useEffect } from "react";
import { getMeData } from "./helpers/FetchHelper";
import FooterComp from "./components/footer/FooterComp";
import LogOutComp from "./components/log-out/LogOutComp";

function App() {
  const [user, set] = useState({});

  useEffect(() => {
    getMeData(localStorage.getItem("token"), (data) => {
      set(data);
    });
  }, []);

  return (
    <div className="App">
      <>
        <SinglePageAppComp set={set} user={user}></SinglePageAppComp>
        <ToastContainer></ToastContainer>
        <LogOutComp></LogOutComp>
        <FooterComp></FooterComp>
        <div id="email" hidden>
          {user && user.email}
        </div>
      </>
    </div>
  );
}

export default App;
