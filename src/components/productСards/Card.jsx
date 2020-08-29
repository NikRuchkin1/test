import React from 'react'
import css from './Card.module.css'


const DescriptionCard = (props) => {
    return (
        <div></div>
    )
}

const Card = (props) => {
    debugger
{/*    const description = props.mainPage.cardsArray.map(d=> <DescriptionCard props={props.card}/>)*/}

    return (
        <div className={css.main}>
            <div className={css.box}>
                <h1 className={css.head}>Ты сегодня покормил кота?</h1>
            </div>
            <div className={css.card}>

            </div>
        </div>
    )
}

export default Card