import {Injectable, Request} from '@nestjs/common';
import axios from "axios";
import {LeadsDto} from "./dto/leads.dto";

@Injectable()
export class LeadsService {
    async getLeads(params: any, req: Request): Promise<Array<LeadsDto>> {
        if(!params["page"] && !params["limits"]){
            params["page"] = 1;
            params["limit"] = 25;
        }
        let res = await axios.get("https://"+req.headers['base_domain']+"/api/v4/leads?page="+params["page"]+"&limit="+params["limit"], {
            headers: {
                "Authorization": "Bearer " + req.headers["access_token"]
            }
        })
        let leads: Array<LeadsDto> = await res.data._embedded.leads;
        for(let i = 0; i < leads.length; ++i) {
            leads[i]["type"] = "Сделка"
        }
        return leads;
    }

    async createLead(body: LeadsDto, req: Request) {
        let res = await axios.post("https://"+req.headers['base_domain']+"/api/v4/leads", JSON.stringify([body]), {
            headers: {
                "Authorization": "Bearer " + req.headers["access_token"]
            }
        })
        let leads: Array<LeadsDto> = await res.data._embedded.leads;
        for(let i = 0; i < leads.length; ++i) {
            leads[i]["type"] = "Сделка"
        }
        return leads;
    }
}
