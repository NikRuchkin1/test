import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import css from './Card.module.css'
import {Container, Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import heartEmpty from './image/heart (3).png'
import heart from './image/heart (2).png'


const Card = (props) => {

    return (
        <Container fluid="xs">
            <DescriptionCard
                selectLike={props.selectLike}
                props={props.mainPage}
                notSelectLike={props.notSelectLike}
                />
        </Container>
    )
}

const DescriptionCard = (props) => {

    return (
    <Row className="justify-content-center">
        {props.props.cardsArray.map(u=><div>

        <Col  className={css.box}
        key={u.key} xs="auto" md="auto" lg="auto">
            <div className={css.boxCont}>
                <div className={css.header}>
                    {u.header}
                </div>
                <div className={css.nameCard}>
                    {u.nameCard}
                </div>
                <div className={css.taste}>
                    {u.taste}
                </div>
                <div className={css.elipse}>
                    <div className={css.weight}>
                        <img className={css.heart} src={u.like? heart : heartEmpty} alt='heart'
                        onClick={() => {u.like? props.notSelectLike(u.id) : props.selectLike(u.id)}}/>
                    </div>
                </div>
            </div>
            <div className={css.bottomDescription}>
                {u.selectDescription}
            </div>
        </Col>
        </div>)}
    </Row>
    )
}

export default Card