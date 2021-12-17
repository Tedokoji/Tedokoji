import { useNavigate } from 'react-router-dom';
import drag from './staticfiles/drag.png'
import './SCSSs/Post.scss'
function Post() {
    const navi = useNavigate()
    const handleClick = ()=>{
        navi('/newfeed')
    }
    const PREVIEW = (e)=>{
        window.localStorage.setItem('url', URL.createObjectURL(e.target.files[0]))
        navi('/newfeed/post/previewing')
    }
    return (
        <>
            <div onClick={handleClick} className="dimming"></div>
            
            
            <div className="wrapper">
                <div className="postdes">
                    <div className="titlerr">
                        <h5 className="imtiredofgivingnames">Create new post</h5>
                    </div>
                   
                </div> 
                  <img className="dragimg" src={drag}/>
                  <input onChange={e=>PREVIEW(e)} type="file"/>
            </div>
        </>
    )
}

export default Post
