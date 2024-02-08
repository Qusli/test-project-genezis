import {Injectable, Request} from '@nestjs/common';
import axios from "axios";
import {CompaniesDto} from "./dto/companies.dto";
import {LeadsDto} from "../contract/dto/leads.dto";

@Injectable()
export class CompaniesService {
    async getCompanines(params: any, req: Request): Promise<Array<CompaniesDto>> {
        if(!params["page"] && !params["limits"]){
            params["page"] = 1;
            params["limit"] = 25;
        }
        let res = await axios.get("https://"+req.headers['base_domain']+"/api/v4/companies?page="+params["page"]+"&limit="+params["limit"], {
            headers: {
                "Authorization": "Bearer " + req.headers["access_token"]
            }
        })
        let companies: Array<CompaniesDto> = await res.data._embedded.companies;
        for(let i = 0; i < companies.length; ++i) {
            companies[i]["type"] = "Компания"
        }
        return companies;
    }

    async createCompany(body: CompaniesDto, req: Request) {
        let res = await axios.post("https://"+req.headers['base_domain']+"/api/v4/companies", JSON.stringify([body]), {
            headers: {
                "Authorization": "Bearer " + req.headers["access_token"]
            }
        })
        let companies: Array<CompaniesDto> = await res.data._embedded.companies;
        for(let i = 0; i < companies.length; ++i) {
            companies[i]["type"] = "Сделка"
        }
        return companies;
    }
}
