import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { KaoContainer, KaoSpace, KaoFlex, KaoCol } from 'kao-components/ui';

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
  <KaoContainer>
    <KaoFlex justify="center">
      <KaoCol span={24}>
        <p>
          {count}
        </p>
        <Button primary onClick={() => increment(1)}>
              Increment
        </Button>
        <KaoSpace />
        <Button onClick={() => decrement(1)}>Decrement</Button>
      </KaoCol>
    </KaoFlex>
  </KaoContainer>
);

CounterComponent.propTypes = propTypes;

export default CounterComponent;

