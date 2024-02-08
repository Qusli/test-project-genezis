import {defineStore} from "pinia";
import {DropDownEntity} from "@/type/DropDownEntity";

export const useDropDownStore = defineStore("useDropDownStore", {
    state: () => {
        let dropDownEntities: Array<DropDownEntity> = [
            {
                title: "Не выбрано",
                value: "none"
            },
            {
                title: "Контакт",
                value: "contact"
            },
            {
                title: "Сделка",
                value: "lead"
            },
            {
                title: "Компания",
                value: "company"
            }
        ];

        return {
            dropDownEntities
        }
    }
})