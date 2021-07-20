import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import BusinessObjective from './../Recommender/BusinessObjective';
import GaugeChart from 'react-gauge-chart';
import { Avatar, Image } from 'antd';
import { Progress } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import styles from './Dash.module.scss';
import NumberFormat from 'react-number-format';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import LoaderComponent from '../LoaderComponent';
import { PrimaryColorLocal } from '../../Util/Theme';
import { ApiUrl } from './../../Util/url';

let staffText: number;

function DashboardTabComponent(props: any) {
  //   const rating = Math.floor(Math.random() * (500 - 10 + 1)) + 10;
  //   const totalClasses = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
  //   const lowPClasses =
  //     Math.floor(Math.random() * (totalClasses / 2 - 3 + 1)) + 3;
  //   const emptySlots = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
  //   const emptySlotsOutOf = totalClasses * 12;
  //   const staffUtilization = Math.floor(Math.random() * (70 - 40 + 1)) + 40;

  const [businessDetail, setBusinessDetail] = useState<any | null>(null);
  useEffect(() => {
    axios.get(`${ApiUrl}/Dashboard/Studios/111/ClassDetail`).then((res) => {
      const persons = res.data;
      console.log(persons);
      setBusinessDetail(persons);
      staffText = persons.staffUtilizaton;
    });
  }, []);
  let i = 0;

  const rows =
    businessDetail &&
    businessDetail.staffDetails.map((x: any) => (
      <tr>
        <td>
          <div style={{ display: 'flex' }}>
            <Avatar src={<Image src={'Mask' + ++i + '.png'} />} />
            <div className='pl-3'>
              <p
                className='has-text-weight-semibold '
                style={{ color: PrimaryColorLocal, cursor: 'pointer' }}
              >
                {x.name}
              </p>
              <p className='is-size-7 has-text-grey '>
                {x.totalClasses} classes everyday
              </p>
            </div>
          </div>
        </td>
        <td>
          <p className='has-text-weight-semibold pl-2'>${x.totalRevenue}</p>
        </td>
        <td className='pl-5 has-text-weight-semibold '>
          {x.staffUtilization}%
        </td>
      </tr>
    ));

  return businessDetail ? (
    <div className='block'>
      <div className='columns'>
        <div className='column pb-0 is-5'>
          <h1 className=' is-size-5 has-text-weight-bold'>Business Metrics</h1>
          <p className='is-size-7 pl-1 mb-3 has-text-grey'>Last 30 days </p>
          <div
            className='box pt-2'
            style={{
              //   height: '125px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p className='is-size-6'>
                <span className='is-size-4 has-text-info has-text-weight-bold'>
                  {businessDetail.businessScore.score}
                </span>
                / {businessDetail.businessScore.totalBusiness}
              </p>
              <h1 className=' is-size-6 has-text-weight-semibold'>
                My Business Score
              </h1>
              <p className='is-size-7 pl-1 has-text-grey'>
                How did we get this score?{' '}
              </p>
            </div>
            <div style={{ alignSelf: 'center', marginRight: '20px' }}>
              {/* <Rate disabled allowHalf defaultValue={3.5} /> */}
              <Progress
                type='circle'
                percent={
                  (businessDetail.businessScore.score /
                    businessDetail.businessScore.totalBusiness) *
                  100
                }
                format={() => businessDetail.businessScore.score}
                width={80}
                strokeColor={PrimaryColorLocal}
                trailColor='rgb(165 173 204)'
                strokeWidth={10}
              />
            </div>
          </div>
        </div>
        <div className='column pb-0 is-7'>
          <h1 className=' is-size-5 has-text-weight-bold'>Grow Business</h1>
          <p className='is-size-7 pl-1 mb-3 has-text-grey'>Lorem Ipsum</p>
          <div
            className='box py-4'
            style={{
              height: '105px',
              display: 'flex',
              justifyContent: 'space-between',
              background: `transparent linear-gradient(15deg, ${PrimaryColorLocal} 0%, #00E4FF 100%) 0% 0% no-repeat padding-box`,
            }}
          >
            <div>
              <p className='is-size-5 pl-2'>
                <span className='is-size-5 has-text-weight-semibold has-text-white'>
                  Try Recommender
                </span>
              </p>
              <p className='is-size-7 pl-3 has-text-white mt-1'>
                Enabling Businesses with AI based Class Recommendations
                <br />
                {/* Text about why one should use recommender. */}
              </p>

              {/* <CaretDownOutlined
                  height='20px'
                 
                /> */}
              <FontAwesomeIcon
                icon={faCaretDown}
                size='2x'
                style={{ marginTop: '6px', color: PrimaryColorLocal }}
              />
            </div>
            <div style={{ alignSelf: 'center', margin: '10px' }}>
              <img src='logo3.png' height='50px' width='50px' />
            </div>
          </div>
        </div>
      </div>
      <div className='columns'>
        <div className='column pt-0 is-5'>
          <div>
            <div style={{ display: 'flex' }}>
              <div className='column is-6 pl-0 pb-0 pr-1'>
                <div
                  className='box'
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ width: '100%' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: 'inherit',
                      }}
                    >
                      <p className='is-size-4 has-text-weight-bold pl-1'>
                        {businessDetail.totalClasses}
                      </p>
                      <img
                        style={{ margin: '-5px 4px 0px 0' }}
                        src='icon3.png'
                        height='40px'
                        width='40px'
                      />
                    </div>
                    <h1 className=' is-size-6 has-text-weight-semibold'>
                      Total Classes
                    </h1>
                    <p className='is-size-7 pl-1 has-text-grey'>
                      Total count of classes offered
                    </p>
                  </div>
                </div>
              </div>
              <div className='column is-6 pr-0 pb-0 pl-1'>
                <div
                  className='box'
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ width: '100%' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: 'inherit',
                      }}
                    >
                      <p className='is-size-5 pl-1'>
                        <span className='is-size-4 has-text-weight-bold'>
                          {businessDetail.totalLowPerformingClasses}
                        </span>
                      </p>
                      <img
                        style={{ margin: '-5px 4px 0 0' }}
                        src='icon1.png'
                        height='40px'
                        width='40px'
                      />
                    </div>
                    <h1 className=' is-size-6 has-text-weight-semibold'>
                      Low Performing Classes
                    </h1>
                    <p className='is-size-7 pl-1 has-text-grey'>
                      Classes with high empty slots
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div className='column is-6  pl-0 pb-0 pr-1'>
                <div
                  className='box'
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ width: '100%' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: 'inherit',
                      }}
                    >
                      <p className='is-size-6 has-text-weight-medium pl-1 '>
                        <span className='is-size-4 has-text-weight-bold'>
                          {businessDetail.totalEmptySlots}
                        </span>
                        /4000
                        {/* {businessDetail.totalClasses *
                          businessDetail.totalClassCapacity} */}
                      </p>

                      <img
                        style={{ margin: '-5px 4px 0 0' }}
                        src='icon2.png'
                        height='40px'
                        width='40px'
                      />
                    </div>
                    <h1 className=' is-size-6 has-text-weight-semibold'>
                      Empty Slots
                    </h1>
                    <p className='is-size-7 pl-1 has-text-grey'>
                      Total empty slots vs Total slots
                    </p>
                  </div>
                </div>
              </div>
              <div className='column is-6 pr-0 pb-0 pl-1'>
                <div
                  className='box'
                  style={{
                    //   height: '125px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <GaugeChart
                      className={styles.staffText}
                      style={{
                        height: '30px',
                        width: '110px',
                        marginLeft: '30px',
                      }}
                      id='gauge-chart3'
                      nrOfLevels={1}
                      marginInPercent={0.001}
                      needleColor='#FFFFFF'
                      needleBaseColor='#FFFFFF'
                      textColor='#000000'
                      hideText
                      colors={[PrimaryColorLocal, '#A5ADCC']}
                      arcWidth={0.2}
                      arcPadding={0.001}
                      cornerRadius={2}
                      animate
                      arcsLength={[0.55, 0.45]}
                    />
                    <p
                      className='is-size-6 has-text-weight-bold pl-5'
                      style={{ textAlign: 'center' }}
                    >
                      {businessDetail.staffUtilizaton}
                      <span className='is-size-7 has-text-weight-bold'>%</span>
                    </p>
                    <h1 className=' is-size-6 ml-5 pl-2 mt-0 has-text-weight-semibold'>
                      Staff Utilization
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='box mt-3 mb-3 pt-3 pb-2'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p className='is-size-5 pl-1'>
                <span className='is-size-4 has-text-weight-bold has-text-danger'>
                  {/* -${-businessDetail.totalLossOfRevenue} */}
                  <NumberFormat
                    value={businessDetail.totalLossOfRevenue}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                  <CaretDownOutlined />
                </span>
              </p>
              <h1 className=' is-size-6 has-text-weight-semibold'>
                Total Loss of Revenue
              </h1>
              <p className='is-size-7 pl-1 has-text-grey'>
                How did we calculate the revenue loss?
              </p>
            </div>
            <div style={{ alignSelf: 'center' }}>
              <img src='group1.png' height='100px' width='100px' />
            </div>
          </div>
          <div className='box'>
            <p className='content is-size-6 mb-0 has-text-weight-bold'>
              My Staff{' '}
              <span className='has-text-grey is-size-7'>
                {' '}
                ({businessDetail.staffDetails.length})
              </span>
            </p>
            <table className='table is-striped table is-fullwidth is-size-7'>
              <thead>
                <tr>
                  <th
                    className='has-text-grey has-text-weight-medium'
                    style={{ paddingLeft: '60px' }}
                  >
                    Name
                  </th>
                  <th className='has-text-grey has-text-weight-medium'>
                    Revenue
                  </th>
                  <th className='has-text-grey has-text-weight-medium'>
                    Utilization
                  </th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
        <div className='column pb-0 is-7'>
          <div className='box'>
            <BusinessObjective setDash={props.setDash} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <LoaderComponent />
  );
}

export default DashboardTabComponent;
