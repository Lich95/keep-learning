import axios from 'axios'

interface Ilist{
    pageNum:number;
    pageSize:number
}

export function getList(data:Ilist){
    return axios({
        url:'',
        method:'post',
        data
    })
}