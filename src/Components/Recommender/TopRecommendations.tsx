import React, { useState } from 'react';

//import './recommender.css';

import {
  CaretUpOutlined,
  CloseOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { Badge } from 'antd';
// import styles from '../../App.module.scss';
import { PrimaryColorLocal } from './../../Util/Theme';

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
      className={`button is-info is-outlined m-3 mr-4 click ${
        x.key === isSelected ? 'clickHover' : ''
      }`}
      // className={styles.buttonHover}
      style={{
        height: 'auto',
        borderRadius: '20px',
        borderColor: '#A5ADCC',
        color: 'black',
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
          // className='badgedefault'
          style={
            isSelected !== x.key
              ? {
                  marginTop: '-5px',
                  marginLeft: '-15px',
                  background: PrimaryColorLocal,
                  color: 'white',
                  borderColor: PrimaryColorLocal,
                }
              : {
                  marginTop: '-5px',
                  marginLeft: '-15px',
                  background: '#F7D902',
                  color: 'black',
                  borderColor: '#F7D902',
                }
          }
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
              <p
                className='is-size-4 pt-0 has-text-left'
                style={{
                  fontFamily: 'averta_bold',
                  letterSpacing: '-1px',
                  fontSize: '24px',
                }}
              >
                {x.name}
              </p>
              <p
                className=' is-size-6 has-text-left '
                style={{
                  fontSize: '15px',
                }}
              >
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

          <p className='is-size-7 has-text-left'>
            {x.desc} <span className='has-text-weight-semibold'>|</span>{' '}
            <span>Class Capacity - {x.capacity}</span>
          </p>
          <p className='is-size-7 has-text-left'>Price - ${x.price}</p>
          <p
            className='is-size-6 pt-1 pb-2  has-text-left'
            style={{ fontFamily: 'averta_bold', letterSpacing: '-1px' }}
          >
            Revenue{' '}
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
          style={{ position: 'fixed', top: '6%', left: '25%', width: '50%' }}
        >
          <div
            className='m-3'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div>
              <h1
                className=' is-size-5 '
                style={{ fontFamily: 'averta_bold', letterSpacing: '-1px' }}
              >
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
          <div
            className='block mb-1'
            style={{ width: '600px', paddingLeft: '8% ' }}
          >
            {boItems}
          </div>
          {isSelected != 0 && (
            <button
              style={{ float: 'right', marginRight: '25px' }}
              className='button is-info is-small mt-0'
              onClick={() => props.setDash(false)}
            >
              Configure Class{' '}
              <ArrowRightOutlined
                style={{ paddingLeft: '8px', paddingRight: '0px' }}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopRecommendations;
