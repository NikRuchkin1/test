import {cardAPI} from '../components/api/Api'

const SELECTLIKE = 'SELECTLIKE';
const NOTSELECTLIKE = 'NOTSELECTLIKE';
const SETCARD = 'SETCARD'

const initialState = {
    cardsArray: [
        {   id:1,
            header: 'От риэлтора',
            nameCard: '2-комнатная квартира',
            taste: '1 этаж',
            selectDescription:'Просторная, светлая квартира. Находится в центре города',
            like:false,},

        {   id:2,
            header: 'От владельца',
            nameCard: '2-комнатная квартира',
            taste: '5 этаж',
            selectDescription:'Просторная, светлая квартира. Находится в центре города',
            like:true,},

        {   id:3,
            header: 'От риэлтора',
            nameCard: '2-комнатная квартира',
            taste: '2 этаж',
            selectDescription:'Просторная, светлая квартира. Находится в центре города',
            like:true,},
    ],
}
const profileReducer = (state = initialState, action) => {

    switch(action.type) {

        case NOTSELECTLIKE:
            return {
                ...state,
                cardsArray: state.cardsArray.map(u => {
                    if (u.id === action.userID) {
                        return {...u, like: false}
                    }
                    return u
                })
            }

        case SELECTLIKE:
            return {
                ...state,
                cardsArray: state.cardsArray.map(u => {
                    if (u.id === action.userID) {
                        return {...u, like: true,}
                    }
                    return u
                })
            }

        case SETCARD:
            return {
                ...state, cardsArray: action.card}

        default:
            return state;

    }
}

export const setCard = (card) => ({type: SETCARD, card})
export const selectLike = (userID) => ({type: SELECTLIKE, userID})
export const notSelectLike = (userID) => ({type: NOTSELECTLIKE, userID})
export const getCard = () => {
    return (dispatch) => {
        cardAPI.getCard().then(data => {
            dispatch(setCard()) //без API не могу указать этот аргумент
        })
    }
}


export default profileReducer;