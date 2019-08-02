import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Detail extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.detailTitle}</h2>
                <h2>{this.props.detailValue}</h2>
            </div>
        )
    }
}

Detail.propTypes = {
    detailTitle: PropTypes.string,
    detailValue: PropTypes.number
}

Detail.defaultProps = {
    detailTitle: 'Clase',
    detailValue: 4
}

export default Detail
