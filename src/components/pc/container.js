/**
 * Created by zixiangli on 2017/7/11.
 */
import React from 'react'
import {Row, Col, Tabs} from 'antd'
import Banner from '../common/banner'

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
                            {/*<PCNewsImgBlock width="400px" cartTitle="国际头条" type="guoji" count={6} imageWidth="112px"/>*/}
                        </div>
                        {/* 头部列表 */}
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                {/*<PCNewsBlock type="top" count={22}/>*/}
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                {/*<PCNewsBlock count={22} type="guoji"/>*/}
                            </TabPane>
                        </Tabs>

                        {/*<div>*/}
                        {/*<PCNewsImgBlock count={8} type="guonei" width="1200px" cartTitle="国内新闻" imageWidth="136px"/>*/}
                        {/*<PCNewsImgBlock count={16} type="yule" width="1200px" cartTitle="娱乐新闻" imageWidth="136px"/>*/}
                        {/*</div>*/}
                    </Col>
                    {/*<Col span={2}></Col>*/}
                </Row>
            </div>
        );
    }
}

export default PcContainer;