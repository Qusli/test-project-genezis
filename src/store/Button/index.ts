import {defineStore} from "pinia";

export let useButtonStore = defineStore("useButtonStore", {
    state: () => {
        let load = false;
        return {
            load
        }
    }
})