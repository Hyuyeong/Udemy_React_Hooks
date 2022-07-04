//import {useState} from 'react'
//import styles from './DetailComment.module.css'
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const DetailComment = props => {
  return (
    <ApprovalCard>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.image()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.date}</span>
          </div>
          <div className="text">{props.text}</div>
        </div>
      </div>
    </ApprovalCard>
  );
};
export default DetailComment;
