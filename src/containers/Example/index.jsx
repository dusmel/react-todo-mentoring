import React from 'react';
import { useSelector } from 'react-redux';

const Example = () => {
  const name = useSelector(({ example: { name } }) => name);

  return (
    <div className="example">
      <div>Example Hello {name.currentName}</div>
    </div>
  );
};

export default Example;
