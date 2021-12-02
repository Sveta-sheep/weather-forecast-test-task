import "./App.css";
import InputField from "./components/InputField/InputField";
import WeatherData from "./components/WeatherData/WeatherData";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./constants/theme";
import GlobalStyles from "./hooks/useGlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <div className="app-wrapper">
          <InputField />
          <WeatherData />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
