import './SCSSs/Feed.scss'
import naoavt from './staticfiles/Naoavt.png'
import evange from './staticfiles/logo.png'
import fav from './staticfiles/fav.png'
import flasg from './staticfiles/flasg.png'
import inbox from './staticfiles/inbox.png'
import commnets from './staticfiles/commnets.png'
import asmile from './staticfiles/asmile.png'
import Slider from "react-slick";
function Feed(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className="feeding">
        <div className="topone">
            <div className="toponediv">
                <img src={naoavt} className='avt'/>
                <p>{props.name}nao</p>
                <div><h5>. . .</h5></div>
           </div>

        </div>
        <div className="bodyone">
           <Slider {...settings} className="slider">
            
             <img src={evange} className='avt'/>
            
            
             <img src={naoavt} className='avt'/>
            
           
             <img src={evange} className='avt'/>
            
           </Slider>
        </div>
        <div className="bottomone">
            <div className="bottomicons">
                <div className="icons">
                  <img src={fav}/>
                  <img src={commnets}/>
                   <img src={inbox}/>
                 
                </div>
                    <img src={flasg}/>
            </div>
            <div className="likesandcomments">
                <p className="likes">8,123 likes</p>
                <p className="nameacc">Nao Yorihime</p>
                <p className="nameacc">Tedokoji kagami</p>
            </div>
            <div className="Comment">
                <img src={asmile}/>
                <input type="text" />
                <p className="Post">Post</p>
            </div>
        </div>
        </div>
    )
}

export default Feed
