import { useRef } from "react";
import Footer from "./components/Footer";
import "./App.css";

import logo from "./assets/images/logo.webp";

function App() {
  const leafsRef = useRef(null);
  /* const handleMousemove = useCallback((event: MouseEvent) => {
    const el = leafsRef.current;
    if (el) {
      const ratio = 15;
    }
  }, []);

  useEffect(() => {
    const el = leafsRef.current;

    if (el) {
      window.addEventListener("mousemove", handleMousemove);
      return () => {
        window.removeEventListener("mousemove", handleMousemove);
      };
    }
  }, [handleMousemove]); */

  return (
    <div className="holder">
      <main className="main">
        <div className="logo">
          <img src={logo} alt="Jungle Park - Parque Inflable by Axenett" />
        </div>
        <div className="text text-center">
          <h2 className="highlight-color uppercase">
            ¡Estamos inflando la Diversión!
          </h2>
          <p>
            Nuestro sitio web está en construcción, igual que la selva de
            diversión que te espera. Pronto podrás saltar a la aventura en
            nuestro parque inflable con estilo de jungla
          </p>
          <p>
            <strong className="highlight-text uppercase">
              ¡Prepárate para explorar!
            </strong>
          </p>
        </div>
      </main>
      <Footer></Footer>
      <div className="leafs" ref={leafsRef}></div>
    </div>
  );
}

export default App;
