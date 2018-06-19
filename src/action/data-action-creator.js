import DataDispatcher from "../data-dispatcher";
import DataActions from "../constant/DataActions";
import Api from "../api/api";

class DataActionCreator {
  getData() {
    Api.makeRequest("/uri", "GET", this.setDate, this.errorData);
  }

  setData(data) {
    DataDispatcher.dispatch({
      actionType: DataActions.SET_DATA,
      data
    })
  }

  errorData(error) {
    DataDispatcher.dispatch({
      actionType: DataActions.ERROR_DATA,
      error
    })
  }

  removeData(id) {
    DataDispatcher.dispatch({
      actionType: DataActions.REMOVE_DATA,
      id
    })
  }
}