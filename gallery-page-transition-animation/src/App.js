import { useState } from "react";

// External
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import ImageGrid from "./components/image-grid";

// Styles
import { Container, Heading } from "./styles/globalStyles";

const AppStyles = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8ebe2;
`;

const App = () => {
  const [selectedImage, setSelectedImage] = useState(-1);

  return (
    <AppStyles>
      <Container>
        <Heading>Explore 🇮🇳</Heading>
        <ImageGrid
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </Container>
    </AppStyles>
  );
};

export default App;
