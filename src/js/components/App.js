import React from "react";
import TaskList from "./List";
import Form from "./Form"
import { Container, Typography } from "@material-ui/core";

const App = () => (
    <Container>
        <Typography variant="h2" component="h2">To-do List</Typography>
        <Form />
        <TaskList />
    </Container>
);

export default App;