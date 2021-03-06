import { combineReducers } from 'redux';

const loading = (state = 0, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return state.loading ? state.loading+1 : 1;
    case 'UNSET_LOADING':
      return state.loading-1 >= 0 ? state.loading-1 : 0;
    default:
      return state;
  }
};

const postModal = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_POST_MODAL':
      return true;
    case 'CLOSE_POST_MODAL':
      return false;
    default:
      return state;
  }
};

const itemModal = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_ITEM_MODAL':
      return action.view;
    case 'CLOSE_ITEM_MODAL':
      return false;
    default:
      return state;
  }
};

const postStatus = (state = { status: 0, message: "" }, action) => {
  switch (action.type) {
    case 'POST_ITEM':
      var { status, message } = action;
      return { status, message };
    case 'DELETE_ITEM':
      var { status, message } = action;
      return { status, message };
    case 'RESET_STATUS':
      return { status: 0, message: "" };
    default:
      return state;
  }
};

const filter = (state = {sort: 'newest'}, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return Object.assign({}, state, {sort: action.sort});
    default:
      return state;
  }
};

const search = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.search || '';
    default:
      return state;
  }
};

const selectedItem = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_ITEM':
      return action.item;
    default:
      return state;
  }
};

const ui = combineReducers({
  loading,
  postModal,
  itemModal,
  postStatus,
  filter,
  search,
  selectedItem,
});

export default ui;