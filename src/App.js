import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router'; //路由
import MediaQuery from 'react-responsive'; //屏幕大小适配

import Pcindex from './components/pc/index'
import MobileIndex from './components/mobile/index'

class App extends Component {
    render() {
        return (
            <div>
                {/*https://github.com/contra/react-responsive*/}
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Pcindex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    }
}

export default App;
