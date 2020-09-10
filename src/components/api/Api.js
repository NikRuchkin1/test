import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https:/1/',
    headers: {'API-KEY' : '1234'}
})

export const cardAPI = {
    getCard (){
        return instance.get('card')
        .then(response => {
            return response.data});
    }
}