import React from 'react';
import './alert-box.css';

export const AlertBox = ({ title }) => (
  <div className="alertBox">
    <h3 className="alertBox_title">{title}</h3>
  </div>
);
