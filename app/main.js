import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
import { Checkbox, Menu, Icon } from 'antd';

import Greeter from './Greeter';
import BikeManage from './bikeManage';
import UserManage from './userManage';
import Define from './define';
import PickerSizesDemo from './Menu';

import './main.css';//导入css文件

class App extends Component {
    render() {
        return (
            <div>
                <PickerSizesDemo/>
                
            </div>
        );
    }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="/bikeManage" component={BikeManage}/>
        <Route path="/userManage" component={UserManage}/>
        <Route path="/define" component={Define}/>
    </Route>
  </Router>
), document.getElementById('root'));