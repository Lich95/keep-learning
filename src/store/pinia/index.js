import { defineStore } from "pinia";
import { computed, ref} from "vue";

export const useCount = defineStore('counter',()=>{
    const count = ref(0);
    const doubleCount = computed(()=>{return count.value * 2})
    const countPlus = (val)=>{
        console.log(val)
        count.value ++
    }

    return {
        count,
        doubleCount,
        countPlus
    }
    
})