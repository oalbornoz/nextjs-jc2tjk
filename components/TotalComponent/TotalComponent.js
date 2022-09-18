import React from 'react';
import { getDataSummary } from '../TotalComponent/lib/getDataSummary';

function TotalComponent({ data }) {
  const total = getDataSummary(data);

  return <div>Total: {total}</div>;
}

export default React.memo(TotalComponent);
