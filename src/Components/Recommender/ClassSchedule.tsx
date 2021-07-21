import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

//import useWindowSize from 'react-use/lib/useWindowSize';

function ClassSchedule(props: any) {
  //const { width, height } = useWindowSize();
  const [show, setShow] = useState(true);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
      props.setShowCS(false);
    }, 6000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);
  return show ? (
    <>
      <Confetti
        style={{ position: 'relative', marginLeft: '8%', height: '480px' }}
      />
      <p
        className='is-size-3 is-family-sans-serif has-text-weight-semibold'
        style={{ position: 'absolute', top: '45%', left: '30%' }}
      >
        Class Scheduled Successfully!
      </p>
    </>
  ) : null;
}

export default ClassSchedule;
