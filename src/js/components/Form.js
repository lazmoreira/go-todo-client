import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/index";
import { Grid, TextField } from "@material-ui/core";

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="task"
                                value={task}
                                onChange={this.handleChange}
                                style={{ margin: 0 }}
                                placeholder="Add a new task"
                                fullWidth
                                variant="outlined"
                                margin="none"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </form>
            </div >


        );
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(NewTaskForm);

export default Form;