/**
 * Created by zixiangli on 2017/7/10.
 */
import React from 'react'
import '../../css/pc.css'
import PcHeader from './header'
import PcFooter from './footer'
import PcContainer from './container'

class Pcindex extends React.Component {
    render() {
        return (
            <div>
                <PcHeader/>
                <PcContainer/>
                <PcFooter/>
            </div>
        );
    }
}

export default Pcindex;