import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import SearchComponent from './SearchComponent';

const Nav = () => {
  const { GetData, setGenderParam } = useContext(AppContext);
  const handleGenderClick = (gender:string) => {
    setGenderParam(gender);
    GetData();
  };

  return (
    <>
      <nav>
        <h1>Api Rick</h1>
        <ul>
          <li>
            <ul>
              Generos
              <li>
                <button onClick={() => handleGenderClick('Male')}>Male</button>
              </li>
              <li>
                <button onClick={() => handleGenderClick('Female')}>Female</button>
              </li>
              <li>
                <button onClick={() => handleGenderClick('genderless')}>genderless</button>
              </li>
              <li>
                <button onClick={() => handleGenderClick('unknown')}>unknown</button>
              </li>
              <li>
                <button onClick={() => handleGenderClick('')}>Reset</button>
              </li>
              {/* Agrega más botones según tus necesidades */}
            </ul>
          </li>
          <li>
            <SearchComponent />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
