import NavigationRouteComp from "./NavigationRouteComp";
import NavigationBarComp from "./NavigationBarComp";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
function SinglePageAppComp({ set, user }) {
  return (
    <BrowserRouter>
      {" "}
      <NavigationBarComp user={user}></NavigationBarComp>
      <NavigationRouteComp set={set}></NavigationRouteComp>
      <Route>
        <Redirect to="/Home" />
      </Route>
    </BrowserRouter>
  );
}
export default SinglePageAppComp;
