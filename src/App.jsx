import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
