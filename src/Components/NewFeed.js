import './SCSSs/NewFeed.scss'
import {memo,useState,useLayoutEffect} from 'react'
import evange from './staticfiles/logo.png'
import naoavt from './staticfiles/Naoavt.png'
import Feed from './Feed'
import axios from 'axios'
function NewFeed() {
  const [feed,setFeed] = useState([])
 function GET(){
   axios.get('db.json')
   .then(res => {return res.data})
   .then(res => {return res.newfeed})
   .then(e=>{setFeed(e)})
   
 }
 
  useLayoutEffect(()=>{
    GET()
  },[])
  console.log(feed)
    return (
    
      <div className="new-feed-container">
          <div className="main-feed">
            
            <Feed avt={naoavt} likes={123} 
             images={[{src: naoavt,id: 1}, 
            {src: evange,id: 2}]} heart={'true'}
            avtname={'Nao Yorihime'}
            
            
            />
            {
              feed.map(
                e=>{
                  return(
                     <Feed 
                    likes={e.likes} key={e.id} avt={e.avt} 
                    images={e.images}
                   avtname={e.avtname}
                   
                   
                   />
                  )
                }
              )
            }
            
          </div>
          <div className="right-feed">
            <div className="self">
              <img id='selfimg' src={naoavt}/>
              <div className="nameanddetail">
                <h5>Nao Yorihime</h5>
                <p>Dung Huynh</p>
              </div>
              <h5 className="swtich">Switch</h5>
            </div>
            <div className="sugg">
              <h5 className="suggtext">Suggestions For You</h5>
              <h5 className="seeall">See All</h5>
            </div>
            <div className="sugglist">
            <div className="self">
              <img id='selfimg' src={naoavt}/>
              <div className="nameanddetail">
                <h5>Nao Yorihime</h5>
                <p>Dung Huynh</p>
              </div>
              <h5 className="swtich">Follow</h5>
            </div>
            <div className="self">
              <img id='selfimg' src={naoavt}/>
              <div className="nameanddetail">
                <h5>Nao Yorihime</h5>
                <p>Dung Huynh</p>
              </div>
              <h5 className="swtich">Follow</h5>
            </div>
            <div className="self">
              <img id='selfimg' src={naoavt}/>
              <div className="nameanddetail">
                <h5>Nao Yorihime</h5>
                <p>Dung Huynh</p>
              </div>
              <h5 className="swtich">Follow</h5>
            </div>
            
            </div>
          </div>

      </div>
     
  )
}

export default memo(NewFeed)
