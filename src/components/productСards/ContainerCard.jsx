import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {selectCard, defaultCard, hoverUse}
from '../../redux/profile-reducer'

class containerCard extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <Card {...this.props}
            selectCard={this.props.selectCard}
            defaultCard={this.props.defaultCard}
            hoverUse={this.props.hoverUse}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    mainPage: state.mainPage,
})

const ContCard = connect(mapStateToProps, {selectCard, defaultCard, hoverUse}) (containerCard)

export default ContCard