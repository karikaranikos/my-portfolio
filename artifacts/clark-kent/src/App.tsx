import { Switch, Route } from "wouter";
import Works from "./Works";
import Section4 from "./Section4";
import Footer from "./Footer";
import WorkPage from "./pages/WorkPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import ServicesPage from "./pages/ServicesPage";
import { useScrollToHash } from "./hooks/use-scroll-to-hash";

function HomePage() {
  useScrollToHash();
  return (
    <>
      <Works />
      <Section4 />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Switch>
      <Route path="/work/:slug" component={WorkDetailPage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/services" component={ServicesPage} />
      <Route component={HomePage} />
    </Switch>
  );
}
