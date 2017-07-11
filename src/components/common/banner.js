/**
 * Created by zixiangli on 2017/7/11.
 */
import React from 'react'
import {Carousel} from 'antd'

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
    }

    componentWillMount() {
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=5")
            .then(res => res.json())
            .then(jsonData => {
                this.setState({img: jsonData});
                // console.log(jsonData)
            });
    }

    render() {
        //轮播图参数配置
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        const imgList = this.state.img.length
            ? this.state.img.map((item, index) => (
                <div key={index}><img src={item.thumbnail_pic_s03}/></div>
            ))
            : <div><img src="http://ghj.km.gov.cn/imgs/index121129/error.png"/></div>;

        return (
            <Carousel {...settings}>
                {imgList}
            </Carousel>
        );
    }
}


export default Banner;