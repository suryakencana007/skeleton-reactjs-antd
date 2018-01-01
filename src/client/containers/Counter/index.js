import CounterComponent from './components';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  const increment = payload => dispatch({ type: 'count/add', payload });
  const decrement = payload => dispatch({ type: 'count/minus', payload });

  return {
    increment,
    decrement,
  };
};

export default connect(
  ({ count }) => ({ count }),
  mapDispatchToProps,
)(CounterComponent);
