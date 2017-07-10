/**
 * Created by zixiangli on 2017/7/10.
 */
import React from 'react'
import {Row, Col} from 'antd'

class MobileFooter extends React.Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2017 <a href="http://www.lizixiang.cn">lzx</a> All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}

export default MobileFooter;