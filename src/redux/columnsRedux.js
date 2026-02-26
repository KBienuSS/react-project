import shortid from "shortid";

export const getFilteredColumns = ({columns}, listId) => columns.filter(column => column.listId === listId);

const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

export const addColumn = payload => ({ type: 'app/columns/ADD_COLUMN', payload });
const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
        case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid() }];
        default:
        return statePart;
    }
}

export default columnsReducer;