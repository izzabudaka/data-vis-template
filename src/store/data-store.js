import {EventEmitter} from "eventemitter3";
import DataDispatcher from "../data-dispatcher";
import DataActions from "../constant/data-actions"

const CHANGE_DATA_EVENT = 'CHANGE_DATA_EVENT';
const ERROR_DATA_EVENT = 'ERROR_DATA_EVENT';
class DataStoreClass extends EventEmitter {
    constructor() {
      super();
      this._data = {};
      this._errors = [];
    }

    // LISTENERS
    addDataChangeListener(callback) {
        this.addListener(CHANGE_DATA_EVENT, callback)
    }

    addErrorDataListener(callback) {
        this.addListener(ERROR_DATA_EVENT, callback)
    }

    removeListeners() {
      this.removeListener(CHANGE_DATA_EVENT);
      this.removeListener(ERROR_DATA_EVENT);
    }

    // ACCESSOR FUNCTIONS
    addData(data) {
      Object.keys(data).forEach(id => {
        this._data[id] = data[id];
      });
      this.emit(CHANGE_DATA_EVENT);
    }

    removeData(id) {
      delete this._data[id];
      DataStore.emit(CHANGE_DATA_EVENT);
    }

    resetErrors() {
      this._errors = [];
      this.emit(ERROR_DATA_EVENT);
    }

    addError(error) {
      this._errors.push(error.message);
      this.emit(ERROR_DATA_EVENT);
    }

    get data() {
      return this._data;
    } 

    get errors() {
      return this._errors;
    }

    set data(data) {
      this._data = data;
    }
}

const DataStore = new DataStoreClass();
DataDispatcher.register((action) => {
    switch (action.actionType) {
        case DataActions.SET_DATA:
            DataStore.addData(action.data);
            DataStore.resetErrors();
            break;
        case DataActions.REMOVE_DATA:
            DataStore.removeData(action.id);
            DataStore.resetErrors();
            break;
        case DataActions.ERROR_DATA:
            DataStore.addError(action.error);
            break;
      default:
        break;
    }
});

export default DataStore;

