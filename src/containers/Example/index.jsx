import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Button as AntButton } from 'antd';
import './index.scss';

const Example = () => {
  const name = useSelector(({ example: { name } }) => name);

  return (
    <div className="example">
      <div>Example Hello {name.currentName}</div>
      <Button size="small" content="Click Me" primary />
      <AntButton type="primary">Button</AntButton>
    </div>
  );
};

export default Example;
