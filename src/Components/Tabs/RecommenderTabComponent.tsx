import React, { useState } from 'react';

// import { Popover, Button } from 'antd';
// import BusinessObjective from './../Recommender/BusinessObjective';
// import RecommendationDetail from './../Recommender/RecommendationDetail';
// import TopRecommendations from './../Recommender/TopRecommendations';
// import ClassSchedule from './../Recommender/ClassSchedule';

// function RecommenderTabComponent(props: any) {
//   const [showCS, setShowCS] = useState(false);
//   const [showRD, setShowRD] = useState(false);
//   const [showBO, setShowBO] = useState(true);
//   const setRD = (flag: boolean) => {
//     setShowBO(!flag);
//     setShowRD(flag);
//   };
//   const setCS = (flag: boolean) => {
//     setShowBO(!flag);
//     setShowRD(!flag);
//     setShowCS(flag);
//   };
//   return (
//     // <div className='box'>
//     //   <p>Recommender</p>
//     //   <Popover
//     //     content={<a onClick={() => setVisible(false)}>Close</a>}
//     //     title='Title'
//     //     trigger='click'
//     //     visible={visible}
//     //     onVisibleChange={(visible) => setVisible(visible)}
//     //   >
//     //     <Button type='primary'>Create Class</Button>
//     //   </Popover>
//     // </div>
//     showCS ? (
//       <ClassSchedule />
//     ) : showRD ? (
//       <RecommendationDetail setCS={setCS} />
//     ) : showBO ? (
//       <BusinessObjective setBO={setShowBO} />
//     ) : (
//       <TopRecommendations setRD={setRD} />
//     )
//   );
// }

// export default RecommenderTabComponent;
