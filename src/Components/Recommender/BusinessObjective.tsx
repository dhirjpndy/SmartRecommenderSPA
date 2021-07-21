import React, { useState } from 'react';
import TopRecommendations from './TopRecommendations';
import { ArrowRightOutlined } from '@ant-design/icons';

function BusinessObjective(props: any) {
  const [isActive, setIsActive] = useState('');
  const [bolist, setBolist] = useState([
    { key: 1, name: 'Increase Revenue', active: true },
    { key: 2, name: 'Client Retention', active: false },
    { key: 3, name: 'Staff Utilization', active: false },
    { key: 4, name: 'New Clients', active: false },
    { key: 5, name: 'Market Trends', active: false },
    { key: 6, name: 'Holiday Offerings', active: false },
  ]);
  const changeHover = (n: string) => {
    var index = bolist.findIndex((x) => x.name === n);
    var x = {
      name: bolist[index].name,
      key: bolist[index].key,
      active: !bolist[index].active,
    };

    setBolist([
      ...bolist.slice(0, index),
      Object.assign({}, bolist[index], x),
      ...bolist.slice(index + 1),
    ]);
  };

  const boItems = bolist.map((x) => (
    <a
      key={x.key}
      className={`button mx-2 my-2 is-rounded is-small ${
        x.active ? 'is-hovered' : ''
      }`}
      onClick={() => changeHover(x.name)}
      style={{ width: '130px' }}
    >
      <p className=''> {x.name}</p>
    </a>
  ));
  return (
    <>
      <section>
        {' '}
        <div>
          <img
            style={{ margin: '10px 40%' }}
            src='image30@2x.png'
            height='150px'
            width='150px'
          />
          <div style={{ textAlign: 'center' }}>
            <p className='is-size-6 has-text-weight-semibold'>
              Choose your{' '}
              <span className='has-text-weight-bold'>Business Objectives</span>
            </p>
            <p className='is-size-6 pl-2 has-text-grey'>
              Grow your business by choosing the right business goal
            </p>
          </div>
        </div>
        <div
          className='block my-5'
          style={{ marginLeft: '8%', marginRight: '5%' }}
        >
          {boItems}
        </div>
        <button
          onClick={() => setIsActive('is-active')}
          className='button has-text-weight-medium is-small is-info'
          style={{ margin: '3% 0 2% 32%' }}
        >
          Show Recommendations
          <ArrowRightOutlined
            style={{ paddingLeft: '8px', paddingRight: '0px' }}
          />
        </button>
      </section>
      <TopRecommendations
        showModal={isActive}
        setShowModal={setIsActive}
        setDash={props.setDash}
      />
    </>
  );
}

export default BusinessObjective;
