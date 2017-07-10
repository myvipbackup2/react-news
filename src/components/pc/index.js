/**
 * Created by zixiangli on 2017/7/10.
 */
import React from 'react'

import PcHeader from './header'
import PcFooter from './footer'
import '../../css/pc.css'

class Pcindex extends React.Component {
    render() {
        return (
            <div>
                <PcHeader/>
                <PcFooter/>
            </div>
        );
    }
}

export default Pcindex;