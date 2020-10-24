import React from 'react'
import {Route} from 'react-router-dom'
import ArticleList from './container/articleListView'
import ArticleDetail from './container/articleDetailView'
import Login from './container/Login'
import Signup from './container/Signup'
import Logout from './container/Logout'




const BaseRouter = () => (
    <div>
        <Route exact path="/" component={ArticleList} />
        <Route  exact path="/article/:articleID" component={ArticleDetail} />
        <Route  path="/login/" component={Login} />
        <Route  path="/signup/" component={Signup} />
        <Route  path="/logout/" component={Logout} />
        
        
        
    </div>
)

export default BaseRouter