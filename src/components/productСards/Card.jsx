import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import css from './Card.module.css'
import {Container, Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Card = (props) => {

    return (
        <Container fluid="xs">
            <Row className="justify-content-center">
                <Col xs="auto" md="auto" lg="auto">
                    <h1 className={css.head}>Ты сегодня покормил кота?</h1>
                </Col>
            </Row>
            <DescriptionCard
                selectCard={props.selectCard}
                props={props.mainPage}
                defaultCard={props.defaultCard}
                hoverUse={props.hoverUse}
                />
        </Container>
    )
}

const DescriptionCard = (props) => {

    return (
    <Row className="justify-content-center">
        {props.props.cardsArray.map(u=><div>
        {!u.disabled?
        <Col  className={u.default?css.box : css.redBox}
        onClick={() => {u.default? props.selectCard(u.id):props.defaultCard(u.id)}}
        onMouseOut={()=> {if (!u.default) {props.hoverUse(u.id)}}}
        key={u.key} xs="auto" md="auto" lg="auto">
            <div className={css.boxCont}>
                <div className={!u.hover? css.header : css.redHeader}>
                    {!u.hover? u.header : u.hoverDescription}
                </div>
                <div className={css.nameCard}>
                    {u.nameCard}
                </div>
                <div className={css.taste}>
                    {u.taste}
                </div>
                <div className={css.present}>
                    {u.numberOfServings}
                    <br/>
                    {u.present}
                    <br/>
                    {u.description}
                </div>
                <div className={u.default?css.elipse :css.redElipse}>
                    <div className={css.weight}>
                        {u.weight}
                    </div>
                    <div className={css.kg}>
                        {u.kg}
                    </div>
                </div>
            </div>
            {u.default?
            <div className={css.bottomDescription}>
                {u.dopDescription}
                <NavLink className={css.link} to=''>{u.url}</NavLink>
                <NavLink className={css.point} to=''>{u.point}</NavLink>
            </div>
            :
            <div className={css.bottomDescription}>
                {u.selectDescription}
            </div>
            }
        </Col>
        :
        <Col  className={css.disabledBox}
         key={u.key} xs="auto" md="auto" lg="auto">
            <div className={css.boxCont}>
                <div className={css.greyHeader}>
                    {u.header}
                </div>
                <div className={css.greyNameCard}>
                    {u.nameCard}
                </div>
                <div className={css.greyTaste}>
                    {u.taste}
                </div>
                <div className={css.greyPresent}>
                    {u.numberOfServings}
                    <br/>
                    {u.present}
                    <br/>
                    {u.description}
                </div>
                <div className={css.greyElipse}>
                    <div className={css.weight}>
                        {u.weight}
                    </div>
                    <div className={css.kg}>
                        {u.kg}
                    </div>
                </div>
            </div>
            <div className={css.bottomDescriptionDisabled}>
                {u.disabledDescription}
            </div>
        </Col>}</div>)}
    </Row>
    )
}

export default Card