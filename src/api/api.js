import axios from "axios";

class Api {
    static URL: string = "http://localhost:3000";

    static makeRequest(uri, method, onSuccess, onFailure, body) {
        axios({
            method: method,
            url: Api.URL + uri,
            data: body
        }).then(onSuccess).catch(onFailure)
    }
}

export default App;