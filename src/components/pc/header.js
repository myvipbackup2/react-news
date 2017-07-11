/**
 * Created by zixiangli on 2017/7/10.
 */
import React from 'react'
import {Row, Col, Menu, Icon, Form, Input, Button, Checkbox, Modal, Tabs, message} from 'antd'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'

const {SubMenu, MenuItemGroup} = Menu;
//注册登录表单相关，另外用到了Modal模态窗、选项卡Tabs、message全局提示
const {TabPane} = Tabs;//选项卡

class PcHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'top',
        }
    }

    handleClick(e) { //响应头部tab ，e是个对象
        if (e.key === 'userTab') {

        } else {
            this.setState({
                current: e.key,
            });
        }
    };

    render() {
        return (
            <div>
                {/* Modal */}
                <Modal title="用户中心"
                       visible={true}
                       onCancel={true}
                       footer={null}
                >
                    <Tabs defaultActiveKey="login">
                        <TabPane tab={<span><Icon type="login"/>登录</span>} key="login">
                            <LoginForm/>
                        </TabPane>
                        <TabPane tab={<span><Icon type="user-add"/>注册</span>} key="register">
                            <RegisterForm/>
                        </TabPane>
                    </Tabs>
                </Modal>
                {/*头部tab*/}
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
                            <Menu.Item className="userTab" key="userTab">
                                <Icon type="login"/>注册/登录
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