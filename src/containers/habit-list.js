import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHabit } from '../actions/index';
import { bindActionCreators } from 'redux';

class HabitList extends Component {
  renderList() {
    return this.props.habits ? this.props.habits.map((habit) => {
      return (
        <li
          key={habit.id}
          onClick={() => this.props.selectHabit(habit)}
          className="list-gro up-item">
          {habit.title}
        </li>
      );
    }) : null;
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    habits: state.habits
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectHabit: selectHabit
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitList);