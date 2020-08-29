const initialState = {
    cardsArray: [
        {   header: 'Сказочное заморское яство',
            nameCard: 'Нямушка',
            taste: 'с фуа-гра',
            numberOfServings:'10 порций',
            present: 'мышь в подарок',
            description:'заказчик доволен',
            weight: '0.5',
            kg: 'кг',
            image: 'cat'},

        {   header: 'Сказочное заморское яство',
            nameCard: 'Нямушка',
            taste: 'с рыбой',
            numberOfServings:'40 порций',
            present: '2 мыши в подарок',
            description:'заказчик доволен',
            weight: '2',
            kg: 'кг',
            image: 'cat'},

        {   header: 'Сказочное заморское яство',
            nameCard: 'Нямушка',
            taste: 'с курой',
            numberOfServings:'100 порций',
            present: '5 мышей в подарок',
            description:'заказчик доволен',
            weight: '',
            kg: 'кг',
            image: 'cat'},
    ]
}
const profileReducer = (state = initialState, action) => {

    switch(action.type) {

        default:
            return state;

    }
}

export default profileReducer;