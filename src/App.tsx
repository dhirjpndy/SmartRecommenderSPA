import HomeComponent from './Components/HomeComponent';
import LandingComponent from './Components/LandingComponent';
//import { Popover, Button } from 'antd';
import { useState, useEffect } from 'react';

import 'antd/dist/antd.css';

import axios from 'axios';
import Loader from 'react-spinners/BarLoader';
import LoaderComponent from './Components/LoaderComponent';

export const App = () => {
  const [isHome, setIsHome] = useState(true);
  const [isDash, setIsDash] = useState(false);
  const [studios, setStudios] = useState<any | null>(null);

  const [selectValue, setSelectValue] = useState('0');

  const [selectLocation, setSelectLocation] = useState<null | any>(null);

  const onHomeSubmit = () => {
    setIsHome(false);
    setIsDash(true);
  };

  return (
    <>
      {isHome ? (
        <HomeComponent
          data={studios}
          //selectValue={selectValue}
          onSubmit={onHomeSubmit}
          // handleChange={setSelectValue}
        />
      ) : isDash ? (
        <LandingComponent />
      ) : (
        //   <p className='is-medium'>Loading...</p>
        <LoaderComponent />
      )}
    </>
  );
};
export default App;
