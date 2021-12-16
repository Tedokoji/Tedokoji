import './SCSSs/NewFeed.scss'
import {memo,useState,useLayoutEffect} from 'react'
import evange from './staticfiles/logo.png'
import naoavt from './staticfiles/Naoavt.png'
import Feed from './Feed'
function NewFeed() {
  const [feed,setFeed] = useState([])
 function GET(){
   fetch('http://localhost:3000/newfeed')
   .then(res => {return res.json()})
   .then(e=>{setFeed(e)})
   
 }
  useLayoutEffect(()=>{
    GET()
  },[])
    return (
    
      <div className="new-feed-container">
          <div className="main-feed">
            
            <Feed avt={naoavt}
             images={[{src: naoavt,id: 1},
            {src: evange,id: 2}]}
            avtname={'Nao Yorihime'}
            
            
            />
            {
              feed.map(
                e=>{
                  return(
                    <Feed avt={e.avt}
                    images={e.images}
                   avtname={e.avtname}
                   
                   
                   />
                  )
                }
              )
            }
            
          </div>
          <div className="right-feed">
            
          </div>

      </div>
     
  )
}

export default memo(NewFeed)
