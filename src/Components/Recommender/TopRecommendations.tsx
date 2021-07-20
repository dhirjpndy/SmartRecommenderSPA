import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { CaretUpOutlined, CloseOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

function TopRecommendations(props: any) {
  const [bolist, setBolist] = useState([
    {
      key: 1,
      name: 'Yoga',
      time: '06:00 AM - 07:00 AM',
      desc: 'Everyday',
      revenue: '1000',
      price: 20,
      capacity: 50,
    },
    {
      key: 2,
      name: 'Yoga',
      time: '07:30 AM - 08:30 AM',
      desc: 'Sat, Sun ',
      revenue: '800',
      price: 20,

      capacity: 40,
    },
    {
      key: 3,
      name: 'Zumba',
      time: '12:00 PM - 01:00 PM',
      desc: 'Mon, Wed, Fri ',
      revenue: '750',
      price: 30,

      capacity: 25,
    },
  ]);

  const [isSelected, setIsSelected] = useState(0);

  const changeHover = (n: number) => {
    var index = bolist.findIndex((x) => x.key === n);
    setIsSelected(bolist[index].key);
  };

  let i = 2;
  const boItems = bolist.map((x) => (
    <a
      className={`button is-info is-outlined m-2 ${
        x.key === isSelected ? 'is-hovered' : ''
      }`}
      style={{
        height: 'auto',
        borderRadius: '20px',
      }}
      onClick={() => changeHover(x.key)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Badge
          count={x.key}
          showZero={false}
          style={{
            marginTop: '-5px',
            marginLeft: '-15px',
            background: 'yellow',
            color: 'black',
          }}
        >
          <a href='#' className='head-example' />
        </Badge>
        <div className='p-1' style={{ width: '200px' }}>
          <div
            className='pt-1'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: 'inherit',
            }}
          >
            <div>
              <p className='is-size-4 pt-0 has-text-weight-bold has-text-left'>
                {x.name}
              </p>
              <p className=' is-size-6 has-text-left has-text-weight-medium'>
                {x.time}
              </p>
            </div>
            <img
              style={{ height: '40px' }}
              src={'icon' + ++i + '.png'}
              height='40px'
              width='40px'
            />
          </div>

          <p className='is-size-7 has-text-left has-text-weight-medium'>
            {x.desc} <span className='has-text-weight-semibold'>|</span>{' '}
            <span>Class Capacity: {x.capacity}</span>
          </p>
          <p className='is-size-7 has-text-left has-text-weight-medium'>
            Price: ${x.price}
          </p>
          <p className='is-size-6 pt-1  has-text-left has-text-weight-bold'>
            Revenue:{' '}
            <span
              className={`is-size-6  has-text-weight-bold ${
                x.key === isSelected ? '' : 'has-text-success'
              }`}
            >
              <CaretUpOutlined />${x.revenue}
            </span>
          </p>
        </div>
      </div>
    </a>
  ));
  return (
    <div className={'modal' + props.showModal}>
      <div
        className='modal-background'
        onClick={() => props.setShowModal('')}
      ></div>
      <div className='modal-content'>
        <div
          className='box'
          style={{ position: 'fixed', top: '10%', left: '25%', width: '50%' }}
        >
          <div
            className='m-3'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div>
              <h1 className=' is-size-5 has-text-weight-semibold'>
                Top Recommendations
              </h1>

              <p className='is-size-7 pl-1 has-text-black'>
                AI based class recommendations to boost your revenue
              </p>
            </div>
            {/* <a style={{ color: 'black' }}>
              <FontAwesomeIcon
                icon={faTimes}
                size='2x'
                onClick={() => props.setShowModal('')}
              />
            </a> */}
            <CloseOutlined onClick={() => props.setShowModal('')} />
          </div>
          <div className='block my-4 mx-4 px-4' style={{ width: '600px' }}>
            {boItems}
          </div>
          {isSelected != 0 && (
            <button
              style={{ float: 'right', marginRight: '25px' }}
              className='button is-info is-small has-text-weight-semibold'
              onClick={() => props.setDash(false)}
            >
              Configure Class
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopRecommendations;
