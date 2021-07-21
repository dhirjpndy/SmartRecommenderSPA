import React, { useEffect, useState } from 'react';
import ClassSchedule from './ClassSchedule';
import LineChartComponent from './LineChartComponent';
import { Badge } from 'antd';
import GaugeChart from 'react-gauge-chart';
import { Progress } from 'antd';
import { Avatar, Image } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { PrimaryColorLocal } from '../../Util/Theme';
import axios from 'axios';
import { ApiUrl } from '../../Util/url';
import LoaderComponent from '../LoaderComponent';

function RecommendationDetail(props: any) {
  const [data, setData] = useState<any | null>(null);
  const [selectedData, setSelectedData] = useState<any | null>(null);

  const classCategories = data && data.map((x: any) => x.serviceType);
  //const classCategories = ['Yoga', 'Yoga', 'Zumba'];
  const [categorySelected, setCategorySelected] = useState(0);

  const [selectedStaffUti, setSelectedStaffUti] = useState(68);
  const [selectedStaffUtiNew, setSelectedStaffUtiNew] = useState(14);

  const [timeSlots, setTimeSlots] = useState([
    ' 06:00 AM - 07:00 AM',
    '07:30 AM - 08:30 AM',
  ]);
  const [timeSelected, setTimeSelected] = useState(timeSlots[0]);

  const scheduleForNext = ['90 Days', '180 Days', '1 Year'];
  const [scheduleSelected, setScheduleSelected] = useState(scheduleForNext[0]);

  const classCapacity = ['25', '40', '50'];
  const [capacitySelected, setCapacitySelected] = useState(classCapacity[2]);

  const staff = ['Alice Watson', 'Brandon Smith', 'John Wagon'];
  const [staffSelected, setStaffSelected] = useState(staff[0]);

  const offers = [
    '50% Off',
    'First Month Free',
    '20% off on Annual Membership',
    // 'None',
  ];
  const [offerSelected, setOfferSelected] = useState(offers[0]);

  useEffect(() => {
    axios.get(`${ApiUrl}/Recommender/Studios/111/Configuration`).then((res) => {
      const persons = res.data;
      setData(persons);
      setSelectedData(persons[0]);
    });
  }, []);

  const reset = () => {
    ChangeRecommendation(0);
  };
  const ChangeRecommendation = (i: any) => {
    setCategorySelected(i);
    setSelectedData(data[i]);
    setSelectedStaffUti(data[i].staffUtilization);
    if (i === 0) {
      setTimeSlots([' 06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM']);
      setTimeSelected(' 06:00 AM - 07:00 AM');
      setBolist([
        { key: 1, name: 'Mon', active: true },
        { key: 2, name: 'Tue', active: true },
        { key: 3, name: 'Wed', active: true },
        { key: 4, name: 'Thu', active: true },
        { key: 5, name: 'Fri', active: true },
        { key: 6, name: 'Sat', active: true },
        { key: 7, name: 'Sun', active: true },
      ]);
      setCapacitySelected(classCapacity[2]);
      setScheduleSelected(scheduleForNext[0]);
      setStaffSelected(staff[0]);
      setOfferSelected(offers[0]);
      setSelectedStaffUtiNew(14);
    } else if (i === 1) {
      setTimeSlots([' 07:30 AM - 08:30 AM', '08:30 AM - 09:30 AM']);
      setTimeSelected(' 07:30 AM - 08:30 AM');
      setBolist([
        { key: 1, name: 'Mon', active: false },
        { key: 2, name: 'Tue', active: false },
        { key: 3, name: 'Wed', active: false },
        { key: 4, name: 'Thu', active: false },
        { key: 5, name: 'Fri', active: false },
        { key: 6, name: 'Sat', active: true },
        { key: 7, name: 'Sun', active: true },
      ]);
      setCapacitySelected(classCapacity[1]);
      setScheduleSelected(scheduleForNext[1]);
      setStaffSelected(staff[2]);
      setOfferSelected(offers[2]);
      setSelectedStaffUtiNew(12);
    } else {
      setTimeSlots([' 11:00 AM - 12:00 PM', '12:00 PM - 01:00 PM']);
      setTimeSelected('12:00 PM - 01:00 PM');
      setBolist([
        { key: 1, name: 'Mon', active: true },
        { key: 2, name: 'Tue', active: false },
        { key: 3, name: 'Wed', active: true },
        { key: 4, name: 'Thu', active: false },
        { key: 5, name: 'Fri', active: true },
        { key: 6, name: 'Sat', active: false },
        { key: 7, name: 'Sun', active: false },
      ]);
      setCapacitySelected(classCapacity[0]);
      setScheduleSelected(scheduleForNext[2]);
      setStaffSelected(staff[1]);
      setOfferSelected(offers[1]);
      setSelectedStaffUtiNew(8);
    }
  };

  const [bolist, setBolist] = useState([
    { key: 1, name: 'Mon', active: true },
    { key: 2, name: 'Tue', active: true },
    { key: 3, name: 'Wed', active: true },
    { key: 4, name: 'Thu', active: true },
    { key: 5, name: 'Fri', active: true },
    { key: 6, name: 'Sat', active: true },
    { key: 7, name: 'Sun', active: true },
  ]);
  const changeHover = (n: number) => {
    var index = bolist.findIndex((x) => x.key === n);
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

  const weekDays = bolist.map((x) => (
    <a
      key={x.key}
      className={`button my-1 mr-2 is-small is-rounded has-text-weight-semibold  ${
        x.active ? 'is-hovered' : ''
      }`}
      onClick={() => changeHover(x.key)}
      style={{ marginRight: '5px' }}
    >
      {x.name}
    </a>
  ));
  const categories =
    classCategories &&
    classCategories.map((x: any, i: any) => (
      <a
        onClick={() => ChangeRecommendation(i)}
        className={`button  my-1 mr-2 is-small is-rounded pr-2  has-text-weight-semibold  ${
          i === categorySelected ? 'is-hovered' : ''
        }`}
      >
        {x}
        <Badge
          count={i + 1}
          showZero={false}
          style={{
            marginLeft: '12px',
            marginRight: '-2px',
            background: '#F7D902',
            color: 'black',
          }}
        ></Badge>
      </a>
    ));
  const slots = timeSlots.map((x) => (
    <a
      onClick={() => setTimeSelected(x)}
      className={`button my-1 mr-2 is-small is-rounded  has-text-weight-semibold ${
        x === timeSelected ? 'is-hovered' : ''
      }`}
    >
      {x}
    </a>
  ));
  const capacity = classCapacity.map((x) => (
    <a
      onClick={() => setCapacitySelected(x)}
      className={`button my-1 mr-2 is-small is-rounded  has-text-weight-semibold ${
        x === capacitySelected ? 'is-hovered' : ''
      }`}
    >
      {x}
    </a>
  ));
  const schedule = scheduleForNext.map((x) => (
    <a
      onClick={() => setScheduleSelected(x)}
      className={`button  my-1 mr-2 is-small is-rounded  has-text-weight-semibold ${
        x === scheduleSelected ? 'is-hovered' : ''
      }`}
    >
      {x}
    </a>
  ));
  const staffList = staff.map((x) => (
    <a
      onClick={() => setStaffSelected(x)}
      className={`button  my-1 mr-2 is-small is-rounded has-text-weight-semibold  ${
        x === staffSelected ? 'is-hovered' : ''
      }`}
    >
      {/* <div>
        <Avatar
          src={
            <Image
              src={'Mask2.png'}
              style={{ paddingRight: '4px', height: '17px', width: '25px' }}
            />
          }
        />
      </div> */}
      {x}
    </a>
  ));
  const OffersList = offers.map((x) => (
    <a
      onClick={() => setOfferSelected(x)}
      className={`button  my-1 mr-2 px-3 is-small is-rounded has-text-weight-semibold  ${
        x === offerSelected ? 'is-hovered' : ''
      }`}
    >
      {x}
    </a>
  ));

  return props.showCS ? (
    <ClassSchedule setShowCS={props.setShowCS} />
  ) : data && selectedData ? (
    <>
      <div className='block'>
        <p
          onClick={() => props.setDash(true)}
          className='is-size-6 pt-0'
          style={{
            color: PrimaryColorLocal,
            cursor: 'pointer',
            width: '100px',
          }}
        >
          {'<'} Back
        </p>

        <div className='columns my-1'>
          <div className='column is-5 pr-0'>
            <div className='box pr-2'>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1
                  className=' is-size-6 has-text-weight-medium'
                  style={{ fontFamily: 'averta_bold', letterSpacing: '-1px' }}
                >
                  Class Recommendation
                </h1>

                <p
                  onClick={() => reset()}
                  className='is-size-7 '
                  style={{ color: PrimaryColorLocal, cursor: 'pointer' }}
                >
                  Reset to Default
                </p>
              </div>

              <div className='section py-2 px-0'>
                <p className='has-text-black is-size-7 has-text-weight-semibold '>
                  Class Category
                </p>
                <div className='block'>{categories}</div>
              </div>
              <div className='section py-2 px-0'>
                <p className='has-text-black is-size-7 has-text-weight-semibold '>
                  Time Slot
                </p>
                <div className='block'>{slots}</div>
              </div>
              <div className='section py-2 px-0'>
                <p className='has-text-black is-size-7 has-text-weight-semibold '>
                  Days in week
                </p>
                <div className='block'>{weekDays}</div>
              </div>
              <div className='section py-2 px-0'>
                <p className='has-text-black is-size-7 has-text-weight-semibold '>
                  Class Capacity
                </p>
                <div className='block'>{capacity}</div>
              </div>
              <div className='section py-2 px-0'>
                <p className='has-text-black is-size-7 has-text-weight-semibold '>
                  Schedule for next
                </p>
                <div className='block'>{schedule}</div>
              </div>
              <div className='section py-2 px-0'>
                <p className='has-text-black is-size-7 has-text-weight-semibold '>
                  Staff
                </p>
                <div className='block'>{staffList}</div>
              </div>

              <div className='section py-2 px-0'>
                <p className='has-text-black is-size-7 has-text-weight-semibold '>
                  Offers
                </p>
                <div className='block'>{OffersList}</div>
              </div>
            </div>
          </div>
          <div className='column is-7 pl-0 pr-0'>
            <h1
              className=' is-size-5 mb-2 ml-2 has-text-weight-medium pl-2'
              style={{ fontFamily: 'averta_bold', letterSpacing: '-1px' }}
            >
              Business Impact
            </h1>

            <div className='column pt-0 '>
              <div
                className='box mb-0 pb-1'
                style={{ height: '190px', display: 'flex' }}
              >
                <div style={{ width: '200px' }}>
                  <p
                    style={{ fontSize: '25px' }}
                    className=' has-text-weight-bold mt-4 has-text-info'
                  >
                    ${selectedData.revenue}
                    <span className='is-size-6 '></span>
                  </p>
                  <h1 className=' is-size-6 pl-0 has-text-weight-semibold'>
                    Revenue
                  </h1>
                  <p className='is-size-7  has-text-grey'>
                    Increase in revenue per class
                  </p>
                </div>
                <div style={{ width: '460px' }} className='ml-3'>
                  <LineChartComponent />
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div className='column is-5 pl-0 pr-1 py-3'>
                  <div className='box'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <p style={{ fontSize: '25px' }}>
                          <span className='is-size-4 has-text-weight-bold  has-text-info'>
                            {selectedData.newLeads}
                          </span>
                        </p>
                        <h1 className=' is-size-6  pb-0 has-text-weight-semibold'>
                          Leads
                        </h1>
                      </div>
                      <div style={{ alignSelf: 'center', margin: '5px' }}>
                        <img src='icon2.png' height='50px' width='50px' />
                      </div>
                    </div>

                    <p className='is-size-7  has-text-grey'>
                      New leads added for every class
                    </p>
                  </div>
                </div>
                <div className='column is-7 pr-0 pl-1'>
                  <div
                    className='box'
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div className='my-1 py-1'>
                      <p
                        style={{ fontSize: '25px' }}
                        className=' has-text-weight-bold  has-text-info'
                      >
                        {selectedData.newBusinessScore.score}
                        <span className='is-size-6 has-text-black'>
                          /{selectedData.newBusinessScore.totalBusiness}
                        </span>
                      </p>
                      <h1 className=' is-size-6 has-text-weight-semibold'>
                        New Business Score
                      </h1>
                      <p className='is-size-7 pl-1 has-text-grey'>
                        {/* Last 30 days..{' '} */}
                      </p>
                    </div>
                    {/* <div style={{ alignSelf: 'center', margin: '10px' }}>
                      <img src='icon2.png' height='50px' width='50px' />
                    </div> */}
                    <Progress
                      type='circle'
                      percent={
                        (selectedData.newBusinessScore.score /
                          selectedData.newBusinessScore.totalBusiness) *
                        100
                      }
                      format={() => selectedData.newBusinessScore.score}
                      width={80}
                      strokeColor={PrimaryColorLocal}
                      trailColor='rgb(165 173 204)'
                      strokeWidth={10}
                    />
                  </div>
                </div>
              </div>

              <div
                className='box'
                style={{
                  // height: '125px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div className='my-4'>
                  <p
                    style={{ fontSize: '25px' }}
                    className='has-text-weight-bold  has-text-info'
                  >
                    {selectedData.staffUtilization}
                    <span className='is-size-6'>%</span>
                  </p>
                  <h1 className=' is-size-6 has-text-weight-semibold'>
                    Staff Utilization
                  </h1>
                  <p className='is-size-7 pl-3 has-text-grey'>
                    {/* Lorem Ipsum Text */}
                  </p>
                </div>
                <div>
                  <GaugeChart
                    style={{
                      height: '45px',
                      width: '150px',
                      marginLeft: '30px',
                    }}
                    id='gauge-chart3'
                    nrOfLevels={1}
                    marginInPercent={0.001}
                    needleColor='#FFFFFF'
                    needleBaseColor='#FFFFFF'
                    textColor='#000000'
                    hideText
                    colors={[PrimaryColorLocal, '#07B700', '#A5ADCC']}
                    arcWidth={0.15}
                    arcPadding={0.001}
                    cornerRadius={2}
                    arcsLength={[
                      selectedStaffUti / 100,
                      selectedStaffUtiNew / 100,
                      1 - (selectedStaffUti / 100 + selectedStaffUtiNew / 100),
                    ]}
                  />
                  <img
                    style={{ marginLeft: '85px' }}
                    src='staff.png'
                    height='40px'
                    width='40px'
                  />
                  <p className=' is-size-7 ml-5 mt-1 has-text-left has-text-weight-semibold '>
                    Increase in{' '}
                    <span className='is-size-6' style={{ color: '#07B700' }}>
                      {' '}
                      {selectedStaffUtiNew}
                      {'% '}
                    </span>{' '}
                    of Utilization
                  </p>
                </div>
                <div className='my-4 mr-4'>
                  <p style={{ fontSize: '14px' }}>
                    <FontAwesomeIcon
                      icon={faSquare}
                      size='1x'
                      style={{
                        marginTop: '6px',
                        color: PrimaryColorLocal,
                        marginRight: '5px',
                      }}
                    />
                    Previous
                  </p>
                  <p style={{ fontSize: '14px' }}>
                    {' '}
                    <FontAwesomeIcon
                      icon={faSquare}
                      size='1x'
                      style={{
                        marginTop: '6px',
                        color: '#07B700',
                        marginRight: '5px',
                      }}
                    />
                    New
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '85px',
          background: 'white',
          bottom: 0,
          left: 0,
          padding: '10px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <button
          onClick={() => props.setDash(true)}
          className='button is-white has-text-weight-semibold'
          style={{ margin: '15px 5px 5px 0' }}
        >
          Cancel
        </button>
        <button
          onClick={() => props.setShowCS(true)}
          className='button is-info has-text-weight-medium'
          style={{ margin: '15px 8% 5px 0' }}
        >
          Schedule this Class
        </button>
      </div>
    </>
  ) : (
    <LoaderComponent />
  );
}

export default RecommendationDetail;
