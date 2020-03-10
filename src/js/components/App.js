import React from "react";
import TaskList from "./List";
import Form from "./Form"
import { Container, Box, Typography } from "@material-ui/core";

const App = () => (
    <Box>
        <Container>
            <div>
                <Form />
            </div>
            <div>
                <Typography variant="h2" component="h2">To-do List</Typography>
                <TaskList />
            </div>
        </Container>
    </Box>
);

export default App;