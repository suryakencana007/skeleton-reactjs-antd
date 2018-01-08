import CounterComponent from './components';
import ReduxComponent from 'kao-containers/ReduxComponent';


const mapDispatchToProps = (dispatch) => {
  const increment = payload => dispatch({ type: 'count/add', payload });
  const decrement = payload => dispatch({ type: 'count/minus', payload });

  return {
    increment,
    decrement,
  };
};

export default ReduxComponent(
  ({ count }) => ({ count }),
  mapDispatchToProps,
)(CounterComponent);
