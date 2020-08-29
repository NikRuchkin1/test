import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'

class containerCard extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <Card {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    mainPage: state.mainPage.cardArray
}

const ContCard = connect(mapStateToProps, {}) (containerCard)

export default ContCard