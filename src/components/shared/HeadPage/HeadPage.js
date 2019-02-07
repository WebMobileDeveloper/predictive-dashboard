import React from 'react';

import './head-page.css';

export const HeadPage = ({ head, subhead }) => {
  return (
    <div className="headPage">
      <h2 className={'headPage_title'}>{head}</h2>
      <h3 className={'headPage_title'}>{subhead}</h3>
    </div>
  );
};
