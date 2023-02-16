import { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import "./App.css";
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { Summary } from "./components/summary/Summary";
import { store } from "./store";

function AppContent() {
  const [isBasketVisible, setBasketVisible] = useState(false);

  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };
  return (
    <div>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && <Basket onClose={showBasketHandler} />}
      </Content>
    </div>
  );
}
const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
export default App;

const Content = styled.div``;
