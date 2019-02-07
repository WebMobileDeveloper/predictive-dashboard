import React from 'react';

import './head-page.css';

export const HeadPage = ({ head, subhead, style, headStyle, subHeadStyle }) => {
  return (
    <div className="headPage" style={style}>
      <h2 className={'headPage_title'} style={headStyle}>{head}</h2>
      {subhead && <h3 className={'headPage_title'} style={subHeadStyle}>{subhead}</h3>}
    </div>
  );
};
