import '../css/touch.css';

export const Touch=()=>{
    return (
        <div className='ui container box'>
            <div className='size2'>
                <form className="ui form float">
                <div className='field'>
                    <input type='text' name="first-name" placeholder="Name.." />
                </div>
                <div className='field'>
                    <input type='text' name="first-name" placeholder="Email.." />
                </div>
                <div className='field'>
                    <input type='text' name="first-name" placeholder="Email.." />
                </div>
                <div className='field'>
                    <textarea placeholder="Subject.." />
                </div>
                <div className="ui button " style={{display:"block",margin:'0 200px',backgroundColor:'darkgrey'}} tabIndex="0">Submit Order</div>
            </form>
            </div>

            <div className='rightFu' >
                <h1  style={{color:'oranger'}}>GET IN TOUCH</h1>
                <p>GET IN TO UCH SVD S VFD BD NBFG N HJK GHM NGFN FGNBF GNG RNFN HGF NBG DFN G N HJK GHM NGFN FGNBF GNG RN</p>
            </div>
        </div>
    )
}