import { GlobalStyle } from './App.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Orion } from './Orion/Orion';
export const App = () => {
  return (
    <GlobalStyle>
      <Header />
      <Hero />
      <Orion />
    </GlobalStyle>
  );
};
