import React from "react";
import {Header} from "./component/Header";
import {Workshow} from "./component/Workshow";
import {Works} from "./component/Works";
import Rollingbar from "./component/Rollingbar";
import {Touch} from "./component/Touch";
import {Foot} from "./component/Foot";

class App extends React.Component {
    render(){
        return <div className='pushable'>
            <div className='pusher'>
                <Header />
                <Workshow />
                <Works />
                <Rollingbar />
                <Touch />
                <Foot />
            </div>
        </div>
    }
}
export default App;