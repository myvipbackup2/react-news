/**
 * Created by zixiangli on 2017/7/11.
 */
import React from 'react'
import {Carousel} from 'antd'

//Json Bird 代理跨域
const JsonBird = 'https://bird.ioliu.cn/v1?url=';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
    }

    componentWillMount() {
        fetch(JsonBird + "https://www.toutiao.com/api/pc/hot_video/?widen=1")  //今日头条API
            .then(res => res.json())
            .then(jsonData => {
                this.setState({img: jsonData.data});
                console.log(jsonData.data)
            });
    }

    render() {
        //轮播图参数配置
        const settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            autoplay: true
        };
        const imgList = this.state.img.length
            ? this.state.img.map((item, index) => (
                <div key={item.display_url}><img alt={item.title} title={item.title} src={item.pc_image_url}/></div>
            ))
            : <div><img alt="error" src="http://ghj.km.gov.cn/imgs/index121129/error.png"/></div>;

        return (
            <Carousel {...settings}>
                {imgList}
            </Carousel>
        );
    }
}


export default Banner;