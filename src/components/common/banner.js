/**
 * Created by zixiangli on 2017/7/11.
 */
import React from 'react'
import {Carousel} from 'antd'

import {focus} from '../../fetch/api'

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
    }

    componentWillMount() {
        fetch(focus)  //今日头条API
            .then(res => res.json())
            .then(jsonData => {
                this.setState({img: jsonData.data['pc_feed_focus']});
                // console.log(jsonData.data)
            });
    }

    render() {
        //轮播图参数配置
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            autoplay: true
        };
        const imgList = this.state.img.length
            ? this.state.img.map((item, index) => (
                <div key={item['group_id']}>
                    <img alt={item.title} title={item.title} src={item['image_url']}/>
                    <p>{item.title}</p>
                </div>
            ))
            : <div><img alt="error" title="出错啦！" src="http://ghj.km.gov.cn/imgs/index121129/error.png"/></div>;

        return (
            <Carousel {...settings}>
                {imgList}
            </Carousel>
        );
    }
}


export default Banner;