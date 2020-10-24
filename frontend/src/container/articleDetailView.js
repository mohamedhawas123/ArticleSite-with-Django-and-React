import React, {Component} from 'react'
import Article from '../component/articls'
import axios from 'axios'
import { Card } from 'antd';
import CustomForm from '../component/Forms'



class ArticleDetail extends Component {

    state = {
        article : {},
        error: null

    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}/`)
        .then(res => {
            
            this.setState({article: res.data})
        })
        
    }

    render() {
        
        return (
            <div>
                <Card title={this.state.article.title} >
                <p>{this.state.article.content}</p>
            </Card>

            <CustomForm btn="Update" requestTypes="put" articleID={this.props.match.params.articleID} />
            </div>

            
            
        )
    }
}

export default ArticleDetail;