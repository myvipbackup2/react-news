import React from 'react'
import {Card} from 'antd'
import {technology, sports} from "../../fetch/api"
import {Router, Route, Link, browserHistory} from 'react-router';

class PCNewsBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentWillMount() {
        let URL = 'technology';  //默认请求的新闻类别
        switch (this.props.type) {
            case 'technology':
                URL = technology;
                break;
            case 'sports':
                URL = sports;
                break;
            default:
                URL = technology;
        }
        for (let i = 0; i < 3; i++) {
            fetch(URL)
                .then(res => res.json())
                .then(jsonData => {
                    this.setState({
                        news: this.state.news.concat(jsonData.data)
                    });
                })
        }

    }

    render() {

        const news = this.state.news;
        //循环数据到模板
        const newsList = news.length
            ? news.map((item, index) => (
                <li key={index}>
                    <a href="#">{item.title}</a>
                    {/*<Link to={`details/${item.uniquekey}`} target="_blank">{item.title}</Link>*/}
                </li>
            ))
            : '没有数据';
        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {/* 加载遍历的数据 */}
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }

}

export default PCNewsBlock;
