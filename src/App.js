import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalTheme } from "./theme";
import styled from "styled-components";
import {Form, Button} from 'react-bootstrap';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />
        <Container>
          <form>
            <label>
              Nome:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Enviar" />
          </form>
          <ButtonTema onClick={toggleTheme}>Mudar tema</ButtonTema>
          <div>
         
          </div>
        </Container>
      </Fragment>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
`;

const ButtonTema = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border-radius: 2px;
`;

export default App;