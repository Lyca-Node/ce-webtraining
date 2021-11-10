import React, {useState, useCallback} from 'react';
import Immutable from 'immutable';
import { } from 'react-bootstrap';
import {ReactRedux} from 'cs-web-components-externals';
import {
    getAppSetup, ContentBlock, WithOperations, WithOperationTrigger, Button, Throbber, ContentOperationToolbar,
} from 'cs-web-components-base';
import {addTodoItem, toggleTodoItemDone} from '../actions';
import TodoItem from "./TodoItem";
import Chart from "./Chart";
import { prefixNS } from '../helpers';
import { getTodoItems } from '../selectors';



const OperationButton = ({runOperation, operations}) => {
    const succededAction = useCallback((a, b) => {
        console.log("Project created!", a, b);
    }, []);
    const failedAction = useCallback((a, b) => {
        console.error("Project creation failed!", a, b);
    }, []);

    const clickHandler = useCallback(() => {
        if (operations.size > 0) {
            const operation = operations.get(0);
            if (runOperation && operation) {
                runOperation(operation, {
                    successActions: [succededAction],
                    failedActions: [failedAction]
                });
            }
        }
    }, [runOperation, operations]);

    if (!runOperation || !operations || operations.size === 0) {
        return <Throbber />;
    }
    const operation = operations.get(0);
    return <Button.IconTextButton
        onClick={clickHandler}
        buttonStyle="default"
        iconSrc={operation.get('icon')}
        title={operation.get('tooltip')}
        label={operation.get('label')} />
};

const CreateProjectButton = WithOperations(
    WithOperationTrigger(OperationButton),
    {
        operationNames: ['CDB_Create'],
        contextType: "cdbpcs_project",
    }
);

const TodoList = ({contextObject}) => {
    const items = ReactRedux.useSelector(getTodoItems);
    const dispatch = ReactRedux.useDispatch();
    const [newTodo, setNewTodo] = useState("");

    return (
        <div className={prefixNS("todo-list")}>
            <h1>Todo List</h1>
            
            <ContentBlock
                title={"Chart"}
            >
                <ContentBlock.Header>
                    <CreateProjectButton />
                    <ContentOperationToolbar operationContextName="cdbpcs_project" />
                </ContentBlock.Header>
                <ContentBlock.Body>
                    <Chart />
                </ContentBlock.Body>
            </ContentBlock>
        </div>
    );
};

// {items.map(
//     (item, index) => <TodoItem item={item} key={index}
//         onClick={() => dispatch(toggleTodoItemDone(index))}
//     />
// )}
// <form onSubmit={(e) => {
//     dispatch(addTodoItem(newTodo));
//     setNewTodo("");
//     e.preventDefault();
// }}>
//     <input placeholder="New Todo" value={newTodo} name="todoentry"
//         onChange={(e) => setNewTodo(e.target.value)}
//     />
// </form>
// User ID: {getAppSetup().getIn(["tr-webapp-newapp", "user_id"])}

export default TodoList;
