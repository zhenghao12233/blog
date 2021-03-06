import React from 'react'
import LeftMain from '../../components/LeftMain/LeftMain'
import RightMain from '../../components/RightMain/RightMain'
import { Switch, HashRouter, Route, Link, Redirect } from "react-router-dom";
import About from '../About/About';
import FeedBack from '../FeedBack/FeedBack';
import SkillShare from '../../components/SkillShare/SkillShare';
import CountSkill from '../../components/CountSkill/CountSkill';
import ProcessLife from '../../components/ProcessLife/ProcessLife';
import Detail from '../../components/Detail/Detail'
import List from '../../components/List/List'

function Main() {
    const obj = {
        name: 111
    }
    return (
        <div >
            <div className="left_main">
                <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route path="/feedback" component={FeedBack}></Route>
                    <Route path="/skill" component={SkillShare}></Route>
                    <Route path="/count" component={CountSkill}></Route>
                    <Route path="/life" component={ProcessLife}></Route>
                    <Route path="/detail"  component={Detail}></Route>
                    <Route path="/list"  component={List}></Route>
                    <Route path="/" component={LeftMain}></Route>
                </Switch>
                {/* <LeftMain /> */}

            </div>
            <div className="right_main">
                <RightMain />
            </div>

        </div>
    )
}

export default Main
