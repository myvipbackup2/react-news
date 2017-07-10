/**
 * Created by zixiangli on 2017/7/10.
 */
import React from 'react'
import {Row, Col, Menu, Icon} from 'antd'
const {SubMenu, MenuItemGroup} = Menu;

class PcHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'top',
        }
    }

    handleClick(e) {
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <span>LZX React Demo</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}
                              onClick={(e) => {
                                  this.handleClick(e)
                              }}>
                            <Menu.Item key="top">
                                <Icon type="like"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="team"/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="area-chart"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="global"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="rocket"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="trophy"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="code"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="apple"/>时尚
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default PcHeader;