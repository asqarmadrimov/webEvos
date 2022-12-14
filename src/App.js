import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './UI/Footer'
import Header from './UI//Header'
import Home from './Page/Home'
import Contact from './Page/Contact'
import Aboute from './Page/Aboute'
import NotFound from './Page/NotFound'
import Meny from './Page/Meny'
import News from './Page/News'
import Panel from './Page/Panel'
import './App.css'
import LavashItem from './Companents/LavashItem'
import ShourmaItem from './Companents/ShourmaItem'


const App = () => {
  return (
    <>
    <Header />
    <main className='container-flud'>
      <Switch> 
        <Route exact path='/' component={Home}/>
        <Route path="/meny" component={Meny}/> 
        <Route path='/new' component={News}/>
        <Route path='/aboute' component={Aboute}/> 
        <Route path="/contact" component={Contact}/>
        <Route path="/panel" component={Panel}/>
        <Route path='/lavash' component={LavashItem}/> 
        <Route path='/shourma' component={ShourmaItem}/>
        <Route component={NotFound} />
      </Switch>
      
    </main>
    <Footer />

    </>
  )
}

export default App