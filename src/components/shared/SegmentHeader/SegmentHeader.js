import React from 'react';
import './segment-header.css';

export const SegmentHeader = ({ title }) => (
  <div className="segmentHeader">
    <h3 className="segmentHeader_title">{title}</h3>
  </div>
);
