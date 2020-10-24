import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './container/layout'
import Article from './component/articls'
import ArticleList from './container/articleListView'
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes'
import reducer from './store/reducer/auth';
import { connect } from 'react-redux'
import * as actio from './store/action/auth'

class App extends Component {


  componentDidMount() {
    this.props.onTryAutoSign()
  }


  render () {
    return (
    <div className="App">
      <Router>
        <CustomLayout {...this.props} >
        <BaseRouter />
      </CustomLayout>

      </Router>
      
     
    </div>
  );
  }
  
}


 const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSign: () => dispatch(actio.checkState())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
