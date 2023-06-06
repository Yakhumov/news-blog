import axios from "axios"

export default class  postsService{
    static async getAll(){
    
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')   
        return resp.data


    }
}   