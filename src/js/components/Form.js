import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addTask: task => dispatch(addTask(task))
    };
}

class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const task = this.state;
        this.props.addTask(task);
        this.setState(
            {
                task: ""
            }
        );
    }

    render() {
        const task = this.state.task;

        return (

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="task">Task</label>
                    <input
                        type="text"
                        id="task"
                        value={task}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        );
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(NewTaskForm);

export default Form;