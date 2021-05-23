import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Content } from '@sreeram.io/alpha';

const Config: NextPage = () => {

  const [ data, setData ] = useState({});

  useEffect(() => {
    setData(window.__NEXT_DATA__);
  });

  return <Content>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </Content>
};

export default Config;
