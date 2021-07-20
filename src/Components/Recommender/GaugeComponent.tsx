import React from 'react';

//   const gauge = {
//     width: '100%',
//     max-width: '250px',
//     font-family: 'Roboto, sans-serif',
//     font-size: '32px',
//     color: '#004033'
//   };
//   .gauge__body {
//     width: 100%;
//     height: 0;
//     padding-bottom: 50%;
//     background: #b4c0be;
//     position: relative;
//     border-top-left-radius: 100% 200%;
//     border-top-right-radius: 100% 200%;
//     overflow: hidden;
//   }

//   .gauge__fill {
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: inherit;
//     height: 100%;
//     background: #009578;
//     transform-origin: center top;
//     transform: rotate(0.25turn);
//     transition: transform 0.2s ease-out;
//   }

//   .gauge__cover {
//     width: 75%;
//     height: 150%;
//     background: #ffffff;
//     border-radius: 50%;
//     position: absolute;
//     top: 25%;
//     left: 50%;
//     transform: translateX(-50%);

//     /* Text */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding-bottom: 25%;
//     box-sizing: border-box;
//   }
function GaugeComponent() {
  return (
    <div>
      <div className='gauge__body'>
        <div className='gauge__fill'></div>
        <div className='gauge__cover'></div>
      </div>
    </div>
  );
}

export default GaugeComponent;
