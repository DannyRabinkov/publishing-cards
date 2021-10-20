import { Switch, Route } from "react-router-dom";
import { tabs } from "../../helpers/tabs";
function NavigationRouteComp({ set }) {
  return (
    <Switch>
      {tabs.map((tab, index) => (
        <Route key={index} path={tab.href}>
          {tab.href === "/sign-in" ? (
            <tab.page set={set}></tab.page>
          ) : (
            <tab.page></tab.page>
          )}
        </Route>
      ))}
    </Switch>
  );
}

export default NavigationRouteComp;
