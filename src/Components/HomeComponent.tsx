import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const HomeComponent = (props: any) => {
  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#010425',
      }}
    >
      <div style={{ paddingTop: '12%', marginLeft: '7%' }}>
        <img src='logo3.png' height='75px' width='75px' />
        <p
          className='has-text-white is-size-1 has-text-weight-bold pb-0 '
          style={{ lineHeight: '1.25' }}
        >
          SMART
        </p>
        <p
          className='has-text-white is-size-1 has-text-weight-bold pt-0 '
          style={{ lineHeight: '1.25' }}
        >
          RECOMMENDER
        </p>
        <button
          className='button is-medium px-5 my-5'
          style={{
            background:
              'transparent linear-gradient(299deg, #3025FF 0%, #00E4FF 100%) 0% 0% no-repeat padding-box',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
          }}
          onClick={() => props.onSubmit()}
        >
          Let's Start
        </button>
      </div>
      <div>
        <img
          src='wall4.gif'
          height='140px'
          width='180px'
          style={{
            position: 'fixed',
            top: '46%',
            right: '0%',
            height: '313px',
            width: 'auto',
            opacity: '0.8',
          }}
        />
      </div>
    </section>
  );
};

export default HomeComponent;
