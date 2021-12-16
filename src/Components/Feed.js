import './SCSSs/Feed.scss'
import {memo} from'react'
import fav from './staticfiles/fav.png'
import flasg from './staticfiles/flasg.png'
import inbox from './staticfiles/inbox.png'
import commnets from './staticfiles/commnets.png'
import asmile from './staticfiles/asmile.png'
import Slider from "react-slick";
function Feed({avt,avtname,images,likes}) {
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
                <img src={avt} className='avt'/>
                <p>{avtname}</p>
                <div><h5>. . .</h5></div>
           </div>
        {console.log('images')}
        </div>
        <div className="bodyone">
           <Slider {...settings} className="slider">
            {
                images.map(img =>{
                    return (
                        <img key={img.id} src={img.src}/>
                    )
                })
            }
            
            
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
                <p className="likes">{likes} likes</p>
                <p className="nameacc">{avtname}</p>
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

export default memo(Feed)
