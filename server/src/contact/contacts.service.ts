import {Injectable, Request} from '@nestjs/common';
import axios from "axios";
import {LeadsDto} from "../contract/dto/leads.dto";
import {ContactsDto} from "./dto/contacts.dto";

@Injectable()
export class ContactsService {
    async getContacts(params: any, req: Request): Promise<Array<any>> {
        if(!params["page"] && !params["limits"]){
            params["page"] = 1;
            params["limit"] = 25;
        }
        let res = await axios.get("https://"+req.headers['base_domain']+"/api/v4/contacts?page="+params["page"]+"&limit="+params["limit"], {
            headers: {
                "Authorization": "Bearer " + req.headers["access_token"]
            }
        })
        let contacts: Array<any> = await res.data._embedded.contacts;
        for(let i = 0; i < contacts.length; ++i) {
            contacts[i]["type"] = "Контакт"
        }
        return contacts;
    }
    async createContact(body: ContactsDto, req: Request) {
        let res = await axios.post("https://"+req.headers['base_domain']+"/api/v4/contacts", JSON.stringify([body]), {
            headers: {
                "Authorization": "Bearer " + req.headers["access_token"]
            }
        })
        let contacts: Array<ContactsDto> = await res.data._embedded.contacts;
        for(let i = 0; i < contacts.length; ++i) {
            contacts[i]["type"] = "Сделка"
        }
        return contacts;
    }
}
