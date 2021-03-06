import {useState,useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import './SCSSs/LoginPage.scss'
import logo from './staticfiles/instalogo.png'
import logindec from './staticfiles/logindec.png'
import facebookicon from './staticfiles/facebook.png'
import axios from 'axios'
function LoginPage() {
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const [wrongass,setWrongass] = useState("")
    console.log('rerender login')
    const loginbutt = useRef()
    function GET(callback){
     axios.get('db.json')
     .then(res=>{return res.data})
     .then(res=> {return res.logininfo})
     .then(callback)
    }
    const navi = useNavigate()
    function Check(items){
        
        if(items.find(e=>e.name === name)&&items.find(e=>e.password === pass)){
            setTimeout(()=>{
                console.log('yes')
                navi('/newfeed')
            },200)
           
           
        }else {
            console.log('no')
            setWrongass('wrongass')
        }
 
        }
    
 
    const handleClick = ()=>{GET(Check)}
    const handleReg = () => {
       POST({
           name: name,
           password: pass
       })
    }
    function POST(dataFORM){
        // axios.post('db.json',{
        //     method: 'POST',
        //     headers: { 'Content-Type' : 'application/json',
        //     'Accept': 'application/json'},
        //     body: JSON.stringify(dataFORM)
        // })
        // .then(res => {return res.json()})
          
               
    }
    return (
        <>
        <div className="login-page">
            <div  className="whatever">
            <img src={logindec} alt="logindec" id="logindec"/>
            </div>
            <div className="form">
                <img src={logo} alt="logo" id="logo"/>
                <h5>Sign up to see photos and videos from your friends.</h5>
                <div id="facebook">
                    <img src={facebookicon} alt="facebook" />
                    <a style={{textDecoration:'none'}}
                     href="https://www.facebook.com/evergarden.violet.39501">
                        <p>Join us with FaceBook!</p></a>
                </div>
                <input className={wrongass}
                onChange={e=>setName(e.target.value)}
                placeholder='name...'/>
                <input 
                onChange={e=>setPass(e.target.value)}
                type="password"
                placeholder='password...'/>
                
               <button  onClick={handleClick}  id="loginbutton" >
                    Login
                </button>                             
                    <p onClick={handleReg} className="regis">
                        register
                        </p>         
            </div>             
        </div>
        
        
       
        
        </>
    )
}

export default LoginPage
