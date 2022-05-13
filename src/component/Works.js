import img2 from '../static/picture/img02.jpg';
import img3 from '../static/picture/img03.jpg';
import img4 from '../static/picture/img04.jpg';
import img6 from '../static/picture/img06.jpg';
import img7 from '../static/picture/img07.jpg';
import img8 from '../static/picture/img08.jpg';
import img9 from '../static/picture/img09.jpg';
import img10 from '../static/picture/img10.jpg';
import img11 from '../static/picture/img11.jpg';

export const Works=()=>{
    return <div  className='ui container'>
        <div className='ui three stackable cards'>
            <div className='card'>
                <a href='#'><img src={img2}/></a>
            </div>
            <div className='card'>
                <a href='#'><img src={img3}/></a>
            </div>
            <div className='card'>
                <a href='#'><img src={img4}/></a>
            </div>
            <div className='card'>
                <a href='#'><img src={img6}/></a>
            </div>
            <div className='card'>
                <a href='#'><img src={img7}/></a>
            </div>
            <div className='card'>
                <a href='#'><img src={img8}/></a>
            </div>
            <div className='card'>
                <a href='#'><img src={img9}/></a>
            </div>
            <div className='card'>
                <a href='#'><img src={img10}/></a>
            </div>
            <div className='card'>
                <a href='#'><img src={img11}/></a>
            </div>
        </div>
    </div>
}