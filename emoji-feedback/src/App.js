// path: src/App.js;

// React
import { useState } from "react";

// External
import styled from "styled-components";

// Components
import EmojiFeedback from "./components/EmojiFeedback";

const AppStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: # ;
`;

const App = () => {
  const [activeReaction, setActiveReaction] = useState("");
  return (
    <AppStyles>
      <EmojiFeedback
        activeReaction={activeReaction}
        setActiveReaction={setActiveReaction}
      />
    </AppStyles>
  );
};

export default App;
