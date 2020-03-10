import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/index";

export class TaskList extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        if (!this.props.tasks) {
            return (
                <p>No task added yet!</p>
            );
        }
        else {
            return (
                <ul>
                    {this.props.tasks.map(task => (
                        <li key={task._id}>{task.task}</li>
                    ))}
                </ul>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
};


export default connect(mapStateToProps, { getTasks })(TaskList);