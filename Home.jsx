//libraries
import React, {Fragment,Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
//pages

import Product from '../pages/Product/Product'
import LifeCycleComp  from '../pages/LifeCycleComp/LifeCycleComp'
import BlogPost from '../pages/BlogPost/BlogPost'
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage'
import PostDetails from '../pages/BlogPost/PostDetails/PostDetails'
import GlobalProvider from '../../context/context'
import Carousel from '../pages/Carousel/Carousel'
import Hooks from '../pages/Hooks/Hooks'
import SignUp from '../pages/SignUp/SingUp'
import {MenuItems} from './MenuItems'
import {Button} from './NavButton/NavButton'
import SignIn from '../pages/SignIn/SignIn'

//style
import './home.css'

class Home extends Component{
  state= {
    clicked: false,
  }

  handleCLick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    if (this.handleCLick === 'Navigation') {
      return
    }
  }
 
render () {

    return (
      <BrowserRouter>
         <Fragment>
        <nav className={'NavbarItems'}>
               <hl className='NavbarLogo'>
                 <Link to='/'>Home</Link><i class="fab fa-angellist"></i>
               </hl>
        <div className={"MenuIcon"} onClick={this.handleCLick}>
          <i className={this.state.clicked  ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              

              {MenuItems.map((item, index) => {
                
                return (
                  
                  <li key={index} className={'Navigation'}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
            <Button>Sign Up</Button>
        </nav>  
          {/* <Route path='/' exact component={Carousel}/> */}
          <Route path ='/blogpost' component={BlogPost}/>
          <Route path='/post-details/:postId' component={PostDetails}/>
          {/* <Route path='/product' component={Product}/> */}
          {/* <Route path='/lifecycle' component={LifeCycleComp}/> */}
          <Route path='/youtube-component' component={YoutubeCompPage}/>
          <Route path='/hooks' component={Hooks}/>
          <Route path='/signupweb' component={SignUp}/>
          {/* <Route path='/signup' component={Button}/> */}
          <Route path='/signin' component={SignIn}/>
        </Fragment>
      </BrowserRouter>
    )
}
}

export default GlobalProvider(Home)