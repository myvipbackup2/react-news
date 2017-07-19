/**
 * Created by zixiangli on 2017/7/11.
 */
import React from 'react'
import {Row, Col, Tabs} from 'antd'
import Banner from '../common/banner'
import PCNewsImgBlock from './newsImgBlock'
import PCNewsBlock from './newsBlock'

const {TabPane} = Tabs;


class PcContainer extends React.Component {
    render() {

        return (
            <div className="commonWidth">
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        {/* 轮播 */}
                        <div className="leftContainer">
                            <div className="carousel">
                                <Banner/>
                            </div>
                            {/* PCNewsImgBlock模块：通过传递参数来动态显示内容 */}
                            <PCNewsImgBlock width="400px" count='6' cartTitle="热点" imageWidth="112px"/>
                        </div>
                        {/* 头部列表 */}
                        <Tabs className="tabs_news">
                            <TabPane tab="科技" key="topNews">
                                <PCNewsBlock type="technology"/>
                            </TabPane>
                            <TabPane tab="体育" key="sports">
                                <PCNewsBlock type="sports"/>
                            </TabPane>
                        </Tabs>

                        <div>
                        <PCNewsImgBlock count={8} type="guonei" width="1200px" cartTitle="国内新闻" imageWidth="136px"/>
                        <PCNewsImgBlock count={16} type="yule" width="1200px" cartTitle="娱乐新闻" imageWidth="136px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default PcContainer;