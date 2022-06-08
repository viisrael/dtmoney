import { Dashboard } from "./components/dashboard/Index";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle/>
    </>
  );
}