import axios, {Axios} from "axios";
import {TableData} from "./types"

export class BackendClient {
    private readonly client: Axios;

    constructor(baseUrl: string) {
        this.client = axios.create(
            {
                withCredentials: true,
                baseURL: baseUrl,
            }
        )
    }

    async isAuth(): Promise<number| null> {
        const data = await this.client.get('/auth/is_auth')
        return data.data
    }

    async login(data: object): Promise<number|null> {
        try {
            let response = await this.client.post('/auth/login', data)
            return response.data.user_id
        } catch (e) {
            alert(e)
            return null
        }
    }

    async logOut(){
        await this.client.post('/auth/logout')
    }

    async register_user(data:object) {
        return await this.client.post("/users/register", data)
    }

    async createTable(){
        await this.client.post('/tables')
    }

    async reserveSeat(table_id: number){
        try {
            return await this.client.put(`/tables/${table_id}`)
        } catch (e){
            alert(e)
        }
    }

    async getTable(table_id: number): Promise<TableData> {
        const resp = await this.client.get(`/tables/${table_id}`)
        return resp.data
    }
}
