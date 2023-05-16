import './welcome.css';
const Welcome=()=>{
    let userName = localStorage.getItem("userName")
    return(
        <div className='welcome'>
        <div className="card container welcomeCard" >
            <h1>
                Hi {userName}
            </h1>
            <p>Welcome to our App and Reset your Password Through email</p>
            <button><a href='/'>LogOut</a></button>
        </div>
        </div>
    )
}
export default Welcome;