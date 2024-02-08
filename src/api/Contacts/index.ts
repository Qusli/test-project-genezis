import axios from "axios";
import {useButtonStore} from "@/store/Button";
import Contact from "@/api/Contacts/interface/Contact.ts";
class Contacts {
    private LIMIT = 25;

    async getContacts(page: number, callback: Function) {
        let res = await axios.get("http://localhost:3000/contacts?page="+page+"&limit="+this.LIMIT, {
            headers: {
                "X-Client-Id": 31550986
            }
        });
        return callback(res.data)
    }

    async createContact(body: Array<Contact>, callback: Function) {
        let buttonStore = useButtonStore();
        buttonStore.$state.load = true;
        let res = await axios.post("http://localhost:3000/contacts", JSON.stringify(body), {
            headers: {
                "X-Client-Id": 31550986
            }
        });
        buttonStore.$state.load = false;
        return callback(res)
    }
}

export default new Contacts();