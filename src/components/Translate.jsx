import { useState } from 'react';
import Dropdown from './Dropdown';
//import styles from './Translate.module.css'

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'hindi',
    value: 'hi',
  },
];

const Translate = props => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
export default Translate;
