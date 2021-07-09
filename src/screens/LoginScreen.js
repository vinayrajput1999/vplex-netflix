import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from "./SignupScreen";

function LoginScreen() {
    const [signIn, setsignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className= "loginScreen_background">
                <img 
                className="loginScreen_logo"
                 src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                 <button  onClick= {() => setsignIn(true)}
                  className="loginScreen_button">Sign In</button>

                 <div className="loginScreen_gradient" />
            </div>

              <div className="loginScreen_body">
                  {signIn ? (
                      <SignupScreen />
                  ) : (
                  <>
                    <h1>Unlimited files, TV, programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to Watch? Enter your email to create or restart your subscription.</h3>
                    
                    <div className="loginScreen_input" >
                        <form> 
                            
                            <input type="email" placeholder=" Enter email address" />
                            <button onClick={()  => setsignIn(true)}
                            className="loginScreen_getStarted">GET STARTED</button>
                        </form>
                    </div>
                  </>
                )}
            </div>
        </div>
    );
}
                

export default LoginScreen
