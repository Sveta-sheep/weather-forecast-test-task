import "./App.css";
import InputField from "./components/InputField/InputField";
import WeatherData from "./components/WeatherData/WeatherData";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <InputField />
        <WeatherData />
      </div>
    </Provider>
  );
}

export default App;
