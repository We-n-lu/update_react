import React from "react";
import '../css/anima.css';

export default class Rollingbar extends React.Component {
    state = {
        noticeList: [
            {key: 1, image: 'img17'}, {key: 2, image: 'img18'},
            {key: 3, image: 'img19'}, {key: 4, image: 'img20'},
            {key: 1, image: 'img17'}, {key: 2, image: 'img18'}
        ],
    }

    render() {
        const {noticeList} = this.state;
        return (
            <div className='ui container'>
                <span />
                <h1></h1>
                <h1 style={{color: "orange"}}>OUR CLIENTS</h1>
                <h3>if you trust then pls trusr</h3>
                <div className='placeRight' >
                    <i className="angle right icon "></i>
                    <i className="angle left icon "></i>
                </div>

                <div className='scollwrap'>
                    <ul>
                        {
                            noticeList.map((item, index) => {
                                return <li key={index} style={{}}><img
                                    src={require('../static/picture/' + item.image + '.png')} alt={index}/></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}