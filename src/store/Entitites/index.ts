import {defineStore} from "pinia";
import {ref, Ref} from "vue";
import {Entity} from "@/type/Entity";
import Companies from "@/api/Companies";
import Contacts from "@/api/Contacts";
import Leads from "@/api/Leads";

export const useEntitiesStore = defineStore("useEntitiesStore", {
    state: () => {
        let entities: Ref<Array<Entity>> = ref([])
        let page = 1;
        let error: Ref<boolean> = ref(false);
        let success: Ref<boolean> = ref(false);
        return {
            entities,
            page,
            error,
            success
        }
    },
    actions: {
        async getAllEntities() {
            await Companies.getCompanies(this.page, (res: Array<never>) => {
                for (let i = 0; i < res.length; ++i) {
                    this.entities.push(res[i]);
                }
            })
            await Contacts.getContacts(this.page,(res: Array<never>) => {
                for(let i = 0; i < res.length; ++i) {
                    this.entities.push( res[i]);
                }
            })
            await Leads.getLeads(this.page, (res: Array<never>) => {
                for(let i = 0; i < res.length; ++i) {
                    this.entities.push(res[i]);
                }
            })
        },
        async createEntity(dropDownEntityValue: string) {
            switch (dropDownEntityValue) {
                case "lead":
                    await Leads.createLead([{name: "SHlead"}], (res: any) => {
                        this.setModal(res);
                    })
                    break;
                case "contact":
                    await Contacts.createContact([{name: "SHcontact"}], (res: any) => {
                        this.setModal(res);
                    })
                    break;

                case "company":
                    await Companies.createCompany([{name: "SHcompany"}], (res: any) => {
                        this.setModal(res);
                    })
                    break;
                default:
                    this.error = true
                    setTimeout(() => {
                        this.error = false
                    }, 2000)
            }
        },
        setModal(res: any) {
            if(res.status == 201) {
                this.success = true
                setTimeout(() => {
                    this.success = false
                }, 2000)
            } else {
                this.error = true
                setTimeout(() => {
                    this.error = false
                }, 2000)
            }
        }
    }
})