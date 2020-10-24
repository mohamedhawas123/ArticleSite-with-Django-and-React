import React, {Component} from 'react'
import Article from '../component/articls'
import axios from 'axios'
import CustomForm from '../component/Forms'

const listData = [];
    for (let i = 0; i < 23; i++) {
    listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class ArticleList extends Component {

    state = {
        articls : [],
        error: null

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            
            this.setState({articls: res.data})
        })
        .catch(err => {
            this.setState({error : err})
        })
    }

    render() {

        const test = this.state.articls
        console.log(test)
        return (
            <React.Fragment>
                <Article data = {this.state.articls} />
            <br />
            <h2>Create a somthing</h2>
            <CustomForm btn="Create" requestTypes="post" articleID={null} />
            </React.Fragment>
            
        )
    }
}

export default ArticleList;