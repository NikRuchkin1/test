import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {selectLike, notSelectLike}
from '../../redux/profile-reducer'

class containerCard extends React.Component {
    componentDidMount() {
{/*        this.props.getCard()*/}
    }

    render() {
        return (
            <Card {...this.props}
            selectLike={this.props.selectLike}
            notSelectLike={this.props.notSelectLike}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    mainPage: state.mainPage,
})

const ContCard = connect(mapStateToProps, {selectLike, notSelectLike}) (containerCard)

export default ContCard