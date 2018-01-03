import React from 'react';
import styled from 'styled-components';
import config from 'kao-config';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

const HelloWorld = () => {
  console.log('HelloWorld');
  return (
    <div>
	Hai, Hello World really excetiing ok ok
      <Button>PUSH {config.SEO.title}</Button>
    </div>
  );
};

export default HelloWorld;
