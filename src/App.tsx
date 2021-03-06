import './App.css';

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from './components/Header/Header';
import {Aside} from './components/Aside/Aside';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {RootStateType} from './redux/state';

type PropsType = {
  state: RootStateType
}

export const App = (props: PropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Aside/>
        <div className="app-wrapper-content">
          <Route path='/profile' render={()=> <Profile state={props.state.profilePage}/>}/>
          <Route path="/dialogs"
                 render={() => <Dialogs state={props.state.dialogsPage}/>}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}