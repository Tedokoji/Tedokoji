import NewFeed from './NewFeed'
import {Routes,Route,Link} from 'react-router-dom'
import './SCSSs/App.css';
import NavBar from './NavBar'
import LoginPage from './LoginPage'
import Inbox from './Inbox';
function App() {
  return (<>
        

   <Routes>
     <Route path="/" element={<LoginPage/>}/>
     <Route path="/newfeed/*" element={<><NavBar/><NewFeed/></>}/>
     <Route path="/inbox/*" element={<><NavBar/><Inbox/></>}/>
     <Route path="/post/*" element={<><NavBar/><NewFeed/></>}/>
     <Route path="/compass/*" element={<><NavBar/><NewFeed/></>}/>
     <Route path="/fav/*" element={<><NavBar/><NewFeed/></>}/>
   </Routes>
  </>
  );
}

export default App;
