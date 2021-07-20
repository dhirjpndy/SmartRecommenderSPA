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

  useEffect(() => {
    axios.get(`https://localhost:5001/v1/Dashboard/Studios`).then((res) => {
      const persons = res.data;
      setStudios(persons.slice(10, 20));
      // console.log(persons);
    });
  }, []);

  useEffect(() => {
    if (selectValue !== '0' && studios !== null) {
      console.log(selectValue);

      var index = studios.findIndex(
        (x: any) => x.businessId.toString() === selectValue
      );

      setSelectLocation({
        id: studios[index].businessId,
        name: studios[index].businessName,
        city: studios[index].city,
        state: studios[index].state,
        country: studios[index].country,
      });
    }
  }, [selectValue]);

  const onHomeSubmit = () => {
    setIsHome(false);
    setIsDash(true);
  };

  return (
    <>
      {isHome && studios ? (
        <HomeComponent
          data={studios}
          selectValue={selectValue}
          onSubmit={onHomeSubmit}
          handleChange={setSelectValue}
        />
      ) : isDash ? (
        <LandingComponent selectedStudio={selectValue} />
      ) : (
        //   <p className='is-medium'>Loading...</p>
        <LoaderComponent />
      )}
    </>
  );
};
export default App;
