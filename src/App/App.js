import { useEffect, useState } from "react";
import axios from "axios";

import * as Styled from "./style";
import shuffleDesktop from "../assets/images/icon-dice.svg";
import shuffleMobile from "../assets/images/pattern-divider-mobile.svg";
import pause from "../assets/images/pattern-divider-desktop.svg";

function App() {
  const [advice, setAdvice] = useState([]);
  const [width, setWidth] = useState(0);

  function generateNewAdvice() {
    const save = axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice([response.data.slip.id, response.data.slip.advice]);
      })
      .catch((err) => {
        console.error("[ERROR] temos um erro de requisição >>>> ", err);
      });
  }

  useEffect(() => {
    generateNewAdvice();
  }, []);

  useEffect(() => {
    setWidth(window.screen.width);
  });

  return (
    <Styled.Container>
      <span>advice #{advice[0]}</span>
      <h1>"{advice[1]}"</h1>

      <Styled.ContainerOptionsAdvice>
        <img src={pause} />

        <Styled.ContainerImg>
          <div onClick={generateNewAdvice}>
            {width > 400 
            ? <img src={shuffleDesktop} />
            
            : <img src={shuffleMobile} /> 
          }
          </div>
        </Styled.ContainerImg>
      </Styled.ContainerOptionsAdvice>
    </Styled.Container>
  );
}

export default App;
