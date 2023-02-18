// import axios from "axios";

const IMAGE_REST_API = "http://localhost:8080/api/get/getAllItem";

class APIService {
  getItems() {
    return fetch(IMAGE_REST_API, {
      method: "get",
      headers: {
        Accept: "application/json, image/jpeg,*/*",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    }).then((res) => res.json());
  }
}
export default new APIService();
