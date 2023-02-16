/** @format */

import React from "react";

export default function Temperature() {
  return (
    <p className='col-7 text-center'>
      <strong className='temperature'>10</strong>
      <span className='grau'> º</span>
      <span className='units'>
        <p>C</p>
        <span className='bar'>|</span>
        <p>F</p>
      </span>
      <br />
      <span className='discription'>Cloudy</span>
    </p>
  );
}
