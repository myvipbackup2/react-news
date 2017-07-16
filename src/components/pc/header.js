/**
 * Created by zixiangli on 2017/7/10.
 */
import React from 'react'
import {Row, Col, Menu, Icon, Modal, Tabs, message} from 'antd'
import LoginForm from './loginForm'
import RegisterForm from './registerForm'

const {TabPane} = Tabs;//选项卡

class PcHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'top',  //控制tab下划线
            showModal: false,  //控制登录注册弹层
        }
    }

    handleClick(e) { //响应头部tab ，e是个对象
        if (e.key === 'userTab') {
            this.showModal(true);
        } else {
            this.setState({
                current: e.key,
            });
        }
    };

    //封装设置modal显示隐藏的方法
    showModal(val) {
        this.setState({
            showModal: val
        });
    }

    render() {
        return (
            <div>
                {/* Modal */}
                <Modal title="用户中心"
                       visible={this.state.showModal}
                       onCancel={() => {
                           this.showModal(false);
                       }}
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