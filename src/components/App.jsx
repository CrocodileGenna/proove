import { GlobalStyle } from './App.styled';
import { Header } from './proove/Header/Header';
import { Hero } from './proove/Hero/Hero';

export const App = () => {
  return (
    <GlobalStyle>
      <Header />
      <Hero />
    </GlobalStyle>
  );
};
