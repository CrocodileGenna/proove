import React, { useState } from 'react';
import { HEADER, MENU, MENU_BUTTON, PHONE, BUTTON } from './Header.styled';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <HEADER>
        <MENU_BUTTON onClick={toggleMenu} isOpen={menuOpen}></MENU_BUTTON>
        <MENU isOpen={menuOpen}>
          {/* <h1>Voyageur</h1>і */}
          <PHONE>
            <p>+380 99 000 00 00</p>
          </PHONE>
          <BUTTON>
            <p>Купити рюкзак</p>
          </BUTTON>
        </MENU>
      </HEADER>
    </div>
  );
};
