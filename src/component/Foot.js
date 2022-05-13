import '../css/foot.css'
export const Foot=()=>{
    return (
        <div className='ui inverted vertical center aligned footer segment'>
            <div className='ui container'>
                <h1 style={{fontSize:'35px'}}>FOLLOW US  ON</h1>
                <div className='foorColor' >
                    <a href='#as'><i className="twitter square icon"></i></a>
                    <a href='#as'><i className="facebook square icon"></i></a>
                        <a href='#as'><i className="linkedin icon"></i></a>
                        <a href='#as'><i className="github square icon"></i></a>
                        <a href='#as'><i className="instagram icon"></i></a>
                        <a href='#as'><i className="google plus square icon"></i></a>
                </div>
            </div>

            <p style={{height:'50px',marginTop:'50px'}}>Copyright @ 2022.Company name A ll rghts reserved.</p>
        </div>
    )
}