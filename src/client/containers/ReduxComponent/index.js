import React from 'react';
import { connect } from 'react-redux';


// const mapDispatchToProps = (dispatch) => {
//   const increment = payload => dispatch({ type: 'count/add', payload });
//   const decrement = payload => dispatch({ type: 'count/minus', payload });

//   return {
//     increment,
//     decrement,
//   };
// };

export default (mapStateToProps, mapDispatchToProps) => (Component) => {
  class ReduxComponent extends React.PureComponent {
    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
};
