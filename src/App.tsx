import { useEffect, useState } from "react";
import CrystalStoreLanding from "./components/CrystalStoreLanding";
import { Splash } from "./components/Splash";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Splash /> : <CrystalStoreLanding />;
}

export default App;
