import { GlobalStyle } from './App.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Orion } from './Orion/Orion';
import { Advantages } from './Advantages/Advantages';
export const App = () => {
  return (
    <GlobalStyle>
      <Header />
      <Hero />
      <Orion />
      <Advantages />
    </GlobalStyle>
  );
};
