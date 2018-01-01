import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const CounterComponent = ({ count, increment, decrement }) => (
  <div>
    <p>
      {count}
    </p>
    <Button primary onClick={() => increment(1)}>
          Increment
    </Button>
    <Button onClick={() => decrement(1)}>Decrement</Button>
  </div>
);

CounterComponent.propTypes = propTypes;

export default CounterComponent;

