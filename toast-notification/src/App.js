// External
import { Toaster } from "react-hot-toast";

// Components
import Form from "./components/form";

// Internal
import { AppStyles } from "./styles";

const App = () => {
  return (
    <AppStyles>
      <Form />
      <Toaster position="bottom-left" gutter={56} />
    </AppStyles>
  );
};

export default App;
