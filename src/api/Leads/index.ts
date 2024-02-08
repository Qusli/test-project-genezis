import axios from "axios";
import Lead from "@/api/Leads/interface/Lead.ts";
import {useButtonStore} from "@/store/Button";

class Leads {
    private LIMIT = 25;

    async getLeads(page: number, callback: Function) {
        let res = await axios.get("http://localhost:3000/leads?page="+page+"&limit="+this.LIMIT, {
            headers: {
                "X-Client-Id": 31550986
            }
        });
        return await callback(res.data)
    }

    async createLead(body: Array<Lead>, callback: Function) {
        let buttonStore = useButtonStore();
        buttonStore.$state.load = true;
        let res = await axios.post("http://localhost:3000/leads", JSON.stringify(body), {
            headers: {
                "X-Client-Id": 31550986
            }
        });
        buttonStore.$state.load = false;
        return callback(res)
    }
}

export default new Leads();