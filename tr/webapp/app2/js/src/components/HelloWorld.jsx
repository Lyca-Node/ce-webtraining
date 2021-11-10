import React, {useState, useRef, useEffect} from 'react';
import {Alert} from 'react-bootstrap';
import {ReactRedux, PropTypes} from 'cs-web-components-externals';
import {prefixNS} from '../helpers';

import {addTodo} from '../actions';

import {
    ContentBlock, ButtonGroup, Button, ButtonToolbar, Overlays, FormControl, Table,
} from 'cs-web-components-base';

const TodoItem = ({item}) => {
    return (
        <ul className={prefixNS("todo-item")}>
            <li>{item}</li>
        </ul>
    );
};

TodoItem.propTypes = {
    item: PropTypes.string,
};

const TodoList = () => {
    const state = ReactRedux.useSelector(
        state => state["tr-webapp-app2-reducer"]);

    const items = state.get('todos');
    const error = state.get('error');
    return (
        <div className={prefixNS("todo-list")}>
            {items.map((item, index) => <TodoItem key={index} item={item} />)}
            {error !== null ? <Alert bsStyle="warning">{error}</Alert> : null}
        </div>
    );
};

const TodoInput = () => {
    const [value, setValue] = useState("");
    const dispatch = ReactRedux.useDispatch();
    return (
        <div className={prefixNS("todo-input")}>
            <FormControl.TextInput
                placeholder="New todo item"
                onChange={(e) => setValue(e.target.value)}
                value={value}/>
            <Button.TextButton buttonStyle="primary" block onClick={() => {
                dispatch(addTodo(value));
                setValue("");
            }} label="Add" />
        </div>
    );
};

const dropdownItems = [
    <Overlays.MenuItem key="menuItem1">Currently</Overlays.MenuItem>,
    <Overlays.MenuItem key="menuItem2">Still uses</Overlays.MenuItem>,
    <Overlays.MenuItem key="menuItem3">React MenuItem</Overlays.MenuItem>
];

const columns = Immutable.fromJS(
    [
        {
            width: 200,
            label: "ID",
            tooltip: "Tooltip for col1",
            id: "col1"
        },
        {
            label: "Title",
            tooltip: "Tooltip for col2",
            id: "col2"
        }
    ]
);

const orderedColumns = Immutable.OrderedSet(
    columns.map(c => c.get('id'))
);

const rows = Immutable.fromJS([
    {
        id: "0",
        columns: [
            "1",
            "Hallo Welt"
        ]
    },
    {
        id: "1",
        columns: [
            "2",
            "Guten Morgen Erde"
        ]
    },
    {
        id: "2",
        columns: [
            "3",
            "Hallo Erde"
        ]
    },
    {
        id: "3",
        columns: [
            "4",
            "Guten Morgen Welt"
        ]
    }
]);

const ComponentDemo = () => {
    const MyTable = Table.PredefinedTables.DefaultTable();

    return (<ContentBlock title={'ContentBlock with Toolbar'}>
        <ContentBlock.Header>
            <ButtonToolbar>
                <ButtonGroup>
                    <Button.IconButton
                        iconName={'CDBWin Info'}
                        buttonStyle={'info'}
                        title="IconButton"/>
                    <Button.IconButton
                        iconName={'cdb_ok'}
                        title="IconButton"
                        buttonStyle={'success'}/>
                    <Button.IconButton
                        iconSrc={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij4NCiAgPGNpcy1uYW1lPmRvd25sb2FkPC9jaXMtbmFtZT4NCiAgPHJlY3Qgb3BhY2l0eT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+DQogIDxwYXRoIGZpbGw9IiM5OTk5OTkiIGQ9Ik02LDIuNUM2LDIuMiw2LjIsMiw2LjUsMmgyQzguOCwyLDksMi4yLDksMi41VjZoMi40YzAuMywwLDAuMywwLjIsMC4yLDAuNGwtMy44LDQuMyAgYy0wLjIsMC4yLTAuNSwwLjItMC43LDBMMy4zLDYuNEMzLjEsNi4yLDMuMiw2LDMuNSw2SDZWMi41eiBNMTMsMTEuNVYxNEgydi0yLjVDMiwxMS4yLDIuMiwxMSwyLjUsMTFoMTBDMTIuOCwxMSwxMywxMS4yLDEzLDExLjV6ICAgTTEyLDEyaC0xdjAuNWgxVjEyeiIvPg0KPC9zdmc+'}
                        title="IconButton"
                        buttonStyle={'info'}/>
                    <Overlays.DropdownIconButton
                        key="DropdownIconButton"
                        iconName={'csweb_option_horizontal'}
                        noCaret
                        title="DropdownIconButton"
                        buttonStyle={'primary'}
                        id="DropdownIconButton">
                        {dropdownItems}
                    </Overlays.DropdownIconButton>
                </ButtonGroup>
            </ButtonToolbar>
        </ContentBlock.Header>
        <ContentBlock.Body>
        <MyTable rows={rows}
            title="Table Example"
            columns={columns}
            orderedColumns={orderedColumns}
            contentHeight={"100%"}
        />
        </ContentBlock.Body>
    </ContentBlock>);
};

const HelloWorld = () => {
    const [showChart, setShowChart] = useState(true);
    return (
        <div className={prefixNS("todo-app")}>
            <h1>Todo List</h1>
            <TodoList />
            <TodoInput />
            <ComponentDemo />
        </div>
    );
};
//<Line data={data} options={options} />

export default HelloWorld;
