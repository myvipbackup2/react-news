/**
 * Created by zixiangli on 2017/7/10.
 */
import React from 'react'
import MobileHeader from './header'
import MobileFooter from './footer'
import '../../css/mobile.css'

class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <MobileFooter/>
            </div>
        );
    }
}

export default MobileIndex;