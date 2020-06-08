import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks, deleteTask, markTask } from "../actions/index";
import { Paper, List, ListItem, IconButton, ListItemText, ListItemIcon } from "@material-ui/core";
import CheckCircle from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";

class TaskList extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    handleDelete(taskId, event) {
        this.props.deleteTask(taskId);
    }

    handleUpdate(taskId, event) {
        this.props.markTask(taskId);
    }

    render() {
        if (!this.props.tasks) {
            return (
                <Paper>No task added yet!</Paper>
            );
        }
        else {
            return (
                <List dense={false}>
                    {this.props.tasks.map(task => (
                        <ListItem key={task._id} divider={true}>
                            <ListItemText primary={task.task} className={(task.status ? 'marked' : 'unmarked')} />
                            <ListItemIcon>
                                <IconButton edge="end" aria-label="checkcircle" onClick={(event) => this.handleUpdate(task._id, event)}>
                                    <CheckCircle />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemIcon>
                                <IconButton edge="end" aria-label="delete" onClick={(event) => this.handleDelete(task._id, event)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
};


export default connect(mapStateToProps, { getTasks, deleteTask, markTask })(TaskList);