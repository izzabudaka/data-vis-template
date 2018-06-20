import DataDispatcher from "../data-dispatcher";
import DataActions from "../constant/data-actions";
import Api from "../api/api";

class DataActionCreator {
  static getData() {
    Api.makeRequest("/uri", "GET", this.setData, this.errorData);
  }

  static setData(data) {
    DataDispatcher.dispatch({
      actionType: DataActions.SET_DATA,
      data
    })
  }

  static errorData(error) {
    DataDispatcher.dispatch({
      actionType: DataActions.ERROR_DATA,
      error
    })
  }

  static removeData(id) {
    DataDispatcher.dispatch({
      actionType: DataActions.REMOVE_DATA,
      id
    })
  }
}

export default DataActionCreator;
