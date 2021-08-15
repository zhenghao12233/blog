import React from 'react'
import LeftMain from '../../components/LeftMain/LeftMain'
import RightMain from '../../components/RightMain/RightMain'


function Main() {
    return (
        <div className="center" style={{overflow: 'hidden'}}>
            <LeftMain />
            <RightMain/>
        </div>
    )
}

export default Main
