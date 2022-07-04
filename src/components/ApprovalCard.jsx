//import {useState} from 'react'
//import styles from './ApprovalCard.module.css'

const ApprovalCard = props => {
  return (
    <div className="ui card">
      {props.children}
      <button className="ui basic green button">Apporve</button>
      <button>Reject</button>
    </div>
  );
};
export default ApprovalCard;
