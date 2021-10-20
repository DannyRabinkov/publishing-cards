import { Button } from "react-bootstrap";
import { GoSignOut } from "react-icons/go";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import HomePage from "../../pages/HomePage";

function LogOutComp() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="logOutBtn">
      <Button
        variant="link"
        onClick={(e) => {
          e.preventDefault();
          toast("GoodBye till next time!");
          localStorage.clear();
          refreshPage();
          Redirect(HomePage);
        }}
      >
        Log-Out <GoSignOut></GoSignOut>
      </Button>
    </div>
  );
}

export default LogOutComp;
