/**
 * Created by lizixiang on 2017/7/16.
 */
import React from 'react'
import {Card} from 'antd'
import {behot} from '../../fetch/api'
import {Router, Route, Link, browserHistory} from 'react-router';


class PCNewsImgBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    //用fetch获取数据，this.props.type和this.props.count获取组件传递的参数，取数据的时候就能根据组件传递的参数任意取数据
    componentWillMount() {
        fetch(behot).then(
            res => res.json()
        ).then(
            jsonData => {
                this.setState({
                    news: jsonData.data.slice(0, this.props.count)
                });
                // console.log(this.state.news);
            }
        )

    }

    render() {

        //动态配置模板样式
        const styleImg = {
            display: 'block',
            width: this.props.imageWidth,
            height: '90px'
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        };

        const news = this.state.news;
        //循环数据到模板
        const newsList = news.length
            ? news.map((item, index) => (
                <div key={index} className="imageblock">
                    {/*<Link to={`details/${item.uniquekey}`} target="_blank">*/}
                    <div className="custom-image">
                        <img style={styleImg}
                             alt={item.title}
                             title={item.title}
                             src={item['image_url'] ? item['image_url'] : 'http://www.chinadaily.com.cn/image_c/2017/loading.gif'}/>
                    </div>
                    <div className="custom-card">
                        <h3 style={styleH3}>{item.title}</h3>
                        <p>{item.source}</p>
                    </div>
                    {/*</Link>*/}
                </div>
            ))
            : '没有数据';

        return (
            <div className="topNewsList">
                <Card style={{width: this.props.width}} title={this.props.cartTitle}>
                    {newsList}
                </Card>
            </div>
        );
    }

}

export default PCNewsImgBlock;