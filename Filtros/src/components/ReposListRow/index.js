import React from 'react';
import { Row } from './styles';

function ReposListRow({ repo }) {
  return (
    <Row>
      <span>{repo.name}</span>
    </Row>
  );
}

export default ReposListRow;
