import axios from "axios";
import {useButtonStore} from "@/store/Button";
import Company from "@/api/Companies/interface/Company.ts";
class Companies {
    private LIMIT = 25;

    async getCompanies(page: number, callback: Function) {
        let res = await axios.get("http://localhost:3000/companies?page="+page+"&limit="+this.LIMIT, {
            headers: {
                "X-Client-Id": 31550986
            }
        });
        return callback(res.data)
    }

    async createCompany(body: Array<Company>, callback: Function) {
        let buttonStore = useButtonStore();
        buttonStore.$state.load = true;
        let res = await axios.post("http://localhost:3000/companies", JSON.stringify(body), {
            headers: {
                "X-Client-Id": 31550986
            }
        });
        buttonStore.$state.load = false;
        return callback(res)
    }
}

export default new Companies();