import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react'
import './SCSSs/Post.scss'

function Post() {
    const navi = useNavigate()
    const handleClick = ()=>{
        navi('/newfeed')
    }
  const preview = window.localStorage.getItem('url')
  useEffect(()=>{ window.localStorage.removeItem('url')
  },[])
    return (
        <>
            <div onClick={handleClick} className="dimming"></div>
            
            
            <div className="wrapper">
                <div className="postdes">
                    <div className="titlerr">
                        <h5 className="imtiredofgivingnames">Create new post</h5>
                    </div>
                   
                </div> 
                <div className="previewing">
                  <img id="pre" src={preview}/>
                </div>
               
            </div>
        </>
    )
}

export default Post
