import './SCSSs/NewFeed.scss'
import Feed from './Feed'
function NewFeed(props) {
  console.log('rerender newf')
    return (
      
        <div className="new-feed-container">
            <div className="main-feed">
              
              <Feed/>
              
              <Feed/>
            </div>
            <div className="left-feed">
              
            </div>

        </div>
       
    )
}

export default NewFeed
