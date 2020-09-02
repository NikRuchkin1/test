const SELECT = 'SELECT';
const DEFAULT = 'DEFAULT';
const HOVER = 'HOVER';

const initialState = {
    cardsArray: [
        {   id:1,
            header: 'Сказочное заморское яство',
            nameCard: 'Нямушка',
            taste: 'с фуа-гра',
            numberOfServings:'10 порций',
            present: 'мышь в подарок',
            description:'',
            weight: '0,5',
            kg: 'кг',
            dopDescription:'Чего сидишь? Порадуй котэ,',
            url:'купи',
            point:'.',
            selectDescription:'Печень утки разварная с артишоками.',
            disabledDescription:'Печалька, с фуа-гра закончился.',
            hoverDescription:'Котэ не одобряет?',
            disabled:true,
            default: true,
            hover:false,},

        {   id:2,
            header: 'Сказочное заморское яство',
            nameCard: 'Нямушка',
            taste: 'с рыбой',
            numberOfServings:'40 порций',
            present: '2 мыши в подарок',
            description:'',
            weight: '2',
            kg: 'кг',
            dopDescription:'Чего сидишь? Порадуй котэ,',
            url:'купи',
            point:'.',
            selectDescription:'Головы щучьи с чесноком да свежайшая сёмгушка.',
            disabledDescription:'Печалька, с рыбой закончился.',
            hoverDescription:'Котэ не одобряет?',
            disabled:false,
            default: true,
            hover:false,},

        {   id:3,
            header: 'Сказочное заморское яство',
            nameCard: 'Нямушка',
            taste: 'с курой',
            numberOfServings:'100 порций',
            present: '5 мышей в подарок',
            description:'заказчик доволен',
            weight: '5',
            kg: 'кг',
            dopDescription:'Чего сидишь? Порадуй котэ,',
            url:'купи',
            point:'.',
            selectDescription:'Филе из циплят с трюфелями в бульоне.',
            disabledDescription:'Печалька, с курой закончился.',
            hoverDescription:'Котэ не одобряет?',
            disabled:false,
            default: true,
            hover:false,},
    ],
}
const profileReducer = (state = initialState, action) => {

    switch(action.type) {

        case SELECT:
            return {
                ...state,
                cardsArray: state.cardsArray.map(u => {
                    if (u.id === action.userID) {
                        return {...u, default: false}
                    }
                    return u
                })
            }

        case DEFAULT:
            return {
                ...state,
                cardsArray: state.cardsArray.map(u => {
                    if (u.id === action.userID) {
                        return {...u, default: true, hover: false}
                    }
                    return u
                })
            }

        case HOVER:
            return {
                ...state,
                cardsArray: state.cardsArray.map(u => {
                    if (u.id === action.userID) {
                        return {...u, hover: true}
                    }
                    return u
                })
               }

        default:
            return state;

    }
}

export const selectCard = (userID) => ({type: SELECT, userID})
export const defaultCard = (userID) => ({type: DEFAULT, userID})
export const hoverUse = (userID) => ({type: HOVER, userID})

export default profileReducer;