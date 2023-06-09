import axios from "axios";

export default class postsService {
  static async getAll({ limit = 10, page = 1 }) {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return resp;
  }

  static async getById(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);      
    return response;
  }

  static async getComm(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);  
    return response;
  }

}
