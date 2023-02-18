import React from "react";
import ReactDOM from "react-dom";

import Todos from "./components/todos";

import {
  findDescendentIds,
  findIdsToComplete,
  findIdsToUncomplete,
} from "../common/helpers/todo-helpers";

const App = () => {
  const [todos, updateTodos] = React.useState([]);

  React.useEffect(() => {
    const getTodos = async () => {
      //const { data } = await axios.get(routes.GET_TODOS);
      debugger;
      updateTodos([
        { id: 1, todo: "test", complete: false },
        { id: 2, todo: "test", complete: false, parent: 1 },
        { id: 3, todo: "test", complete: false },

        { id: 4, todo: "test", complete: false, parent: 3 },
        { id: 5, todo: "test", complete: false, parent: 3 },
        { id: 6, todo: "test", complete: false, parent: 5 },
        { id: 7, todo: "test", complete: false, parent: 5 },
        { id: 8, todo: "test", complete: false, parent: 5 },
        { id: 9, todo: "testdddt", complete: false },
      ]);
    };
    getTodos();
  }, []);

  return (
    <React.Fragment>
      <h1>Todo List</h1>
      <br />
      <br />
      <Todos todos={[...todos]} checkTodo={() => {}} />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
