import '../css/Header.css';


export const Workshow=()=>{
    return <div className='ui stackable very relaxed center aligned grid container'>
        <div className='row' >
            <div className='fifteen wide column'>
                <h1 className='ui header' style={{fontSize:'50px'}}>CREATEIVE WORKS</h1>
                <h3>Semantic UI treats words and classes as exchangeable concepts.
    Classes use syntax from natural languages like noun/modifier relationships, word order, and plurality to link concepts intuitively.
                </h3>
                <h1></h1>
            </div>
        </div>
        <div className='row xiaoKu'  style={{fontSize:'25px'}}>
            <div className='two wide column ' >
                <a href='#' >ALL</a>
            </div>
            <div className='two wide column'>
                <a href='#'>AWESOME</a>
            </div>
            <div className='two wide column'>
                <a href='#'>LOGO</a>
            </div>
            <div className='three wide column'>
                <a href='#'>PHOTOGRAPH</a>
                </div>
            <div className='three wide column'>
                <a href='#'>WEB DESIGN</a>
                </div>
        </div>
        <h1></h1>
    </div>
}