import { Button } from "react-bootstrap";
import { GoSignOut } from "react-icons/go";
import { toast } from "react-toastify";

function LogOutComp() {
  return (
    <div className="logOutBtn">
      <Button
        variant="link"
        onClick={(e) => {
          e.preventDefault();
          localStorage.clear();
          toast("GoodBye till next time!", {
            onClose: () => window.location.reload(false),
          });
        }}
      >
        Log-Out <GoSignOut></GoSignOut>
      </Button>
    </div>
  );
}

export default LogOutComp;
