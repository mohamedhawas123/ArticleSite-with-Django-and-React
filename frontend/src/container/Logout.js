import React, {Component} from 'react';
import {connect} from 'react-redux' 
import * as action from '../store/action/auth'


class Logout extends Component {


    componentDidMount() {
        this.props.onLogout()
        this.props.history.push('/')
    }

    render() {
        return (
            <div></div>
        )
    }
}

const mapToDispatch = (dispatch) => {
    return {
        onLogout : () => dispatch(action.authLogout())
    }
}

export default connect(null,mapToDispatch) (Logout)