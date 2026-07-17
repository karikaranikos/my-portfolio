import { Switch, Route } from "wouter";
import Works from "./Works";
import Section4 from "./Section4";
import Footer from "./Footer";
import WorkPage from "./pages/WorkPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <Switch>
      <Route path="/work" component={WorkPage} />
      <Route path="/services" component={ServicesPage} />
      <Route>
        <>
          <Works />
          <Section4 />
          <Footer />
        </>
      </Route>
    </Switch>
  );
}
