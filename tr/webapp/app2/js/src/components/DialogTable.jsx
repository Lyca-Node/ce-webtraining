import React from 'react';
import Immutable from 'immutable';
import {Table, ContentOperationToolbar, Button, WithOperations, WithOperationTrigger, SearchApi} from 'cs-web-components-base';
import {ReactRedux} from "cs-web-components-externals";

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

const MyTable = Table.PredefinedTables.DefaultTable();

const _CreateProjectButton = ({operations, runOperation, contextObject}) => {
    const opInfo = operations.first();
    const currentSearchId = ReactRedux.useSelector(state => state["currentTabByClass"].get("cdbpcs_project"));
    return (<Button.IconTextButton
        iconSrc={opInfo.get("icon")}
        label={opInfo.get("label")}
        title={opInfo.get("tooltip")}
        onClick={() => runOperation(opInfo, {
            contextObjects: Immutable.List([contextObject]),
            //parameters: Immutable.fromJS({"project_name": 'Your new project'}),
            successActions: [SearchApi.Actions.repeatSearch(currentSearchId)],
        })}
    />);  
};

const CreateProjectButton = WithOperationTrigger(WithOperations(_CreateProjectButton, {
    contextType: "cdbpcs_project",
    operationNames: ["CDB_Create"]
}));

const _ModifyProjectButton = ({operations, runOperation, contextObject}) => {
    const opInfo = operations.first();
    const currentSearchId = ReactRedux.useSelector(state => state["currentTabByClass"].get("cdbpcs_project"));
    return (<Button.IconTextButton
        iconSrc={opInfo.get("icon")}
        label={opInfo.get("label")}
        title={opInfo.get("tooltip")}
        buttonStyle="primary"
        onClick={() => runOperation(opInfo, {
            contextObjects: Immutable.List([contextObject]),
            successActions: [SearchApi.Actions.repeatSearch(currentSearchId)],
        })}
    />);  
};

const ModifyProjectButton = WithOperationTrigger(WithOperations(_ModifyProjectButton, {
    contextType: "cdbpcs_project",
    operationNames: ["CDB_Modify"]
}));

const DialogTable = ({contextObject}) => {
    return (
        <>
            <h1>Test Table</h1>
            {contextObject?<ContentOperationToolbar contextObject={contextObject}/>:<span>No Operations</span>}
            <div style={{padding: "1em"}}>
                <CreateProjectButton />
                <ModifyProjectButton contextObject={contextObject} />
            </div>
            
            <MyTable rows={rows}
                title="Table Example"
                columns={columns}
                orderedColumns={orderedColumns}
                contentHeight={"200px"}
            />
        </>
    );
}


export default DialogTable;
