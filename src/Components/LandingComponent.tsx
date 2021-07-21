import React, { useState } from 'react';

import DashboardTabComponent from './Tabs/DashboardTabComponent';
import RecommendationDetail from './Recommender/RecommendationDetail';
import TopRecommendations from './Recommender/TopRecommendations';

function LandingComponent(props: any) {
  const [isDash, setIsDash] = useState(true);
  const [isCS, setIsCS] = useState(false);

  return (
    <div className='container' style={{ overflow: 'auto' }}>
      <div className='block mb-6'>
        <div className='block my-2'>
          <nav className='navbar' style={{ zIndex: 0 }}>
            <div className='navbar-brand'>
              <a className='navbar-item py-0 px-1' href=''>
                <img
                  src='logo3.png'
                  width='40'
                  height='40'
                  style={{ maxHeight: 'none' }}
                />
              </a>
              <p className='content py-0 is-medium mt-2 pt-1 mb-0 has-text-weight-semibold'>
                Smart Recommender
              </p>
            </div>

            <div className='navbar-end navbar-menu'>
              <div>
                <p className='content is-size-6 mt-2 mb-0 has-text-weight-semibold'>
                  {/* {selectLocation && selectLocation.name} */}
                  Level Up Fitness Studio
                </p>
                {/* {selectLocation && (
              <p className='content is-small mt-0 pt-0 has-text-right'>
                {selectLocation.city}
                {' , '} {selectLocation.state} {selectLocation.country}
              </p>
            )}*/}
                <p className='content is-small mt-0 pt-0 has-text-right'>
                  New York, USA
                </p>
              </div>
            </div>
          </nav>
        </div>

        <section
          className=' box is-large pt-2'
          style={{ background: '#F8F9FD' }}
        >
          <div className='block'>
            {isDash ? (
              <DashboardTabComponent setDash={setIsDash} />
            ) : (
              <RecommendationDetail
                showCS={isCS}
                setShowCS={setIsCS}
                setDash={setIsDash}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingComponent;
