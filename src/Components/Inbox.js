import inbox from './staticfiles/inox pic.png'
import './SCSSs/Post.scss'
function Inbox() {
    const active = 'inbox'
    return (
        <div>
           <img style={{transform: 'scale(0.7)',marginTop: '-110px'}}
            src={inbox}/>
        </div>
    )
}

export default Inbox
