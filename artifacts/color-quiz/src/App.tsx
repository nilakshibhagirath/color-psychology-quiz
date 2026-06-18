import { Switch, Route, Router as WouterRouter } from "wouter";
import Landing from "@/pages/Landing";
import Quiz from "@/pages/Quiz";
import Results from "@/pages/Results";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/results" component={Results} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
