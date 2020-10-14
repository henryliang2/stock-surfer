import React from 'react'; // eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import './../App.css'
import './../styles/Landing.css'

const Landing = (props) => {

  let history = useHistory();

  const responseGoogle = (res) => {
    if(res.profileObj) {
      props.setUser(res.profileObj);
      history.push('/search');
    }
    console.log(res);
  }

  return (
    <div className='landing'>
      <div className='landing__container'>
        <div className='landing__text'>
          <div className='landing__title'>Surf the Market.</div>
          <div className='landing__desc'>StockSurfer is a stock screener designed for retail and DIY investors.</div>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Sign In With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <Link to='/search'>
            <div className='landing__signin landing__signin--guest'>
              Sign in as Guest
            </div>
          </Link>
        </div>
        <div className='landing__image'>
          <img alt='landing' src={process.env.PUBLIC_URL + "/splash.png"} />
        </div> 
      </div>
    </div>
  );

}

export default Landing;