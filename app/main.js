import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
// import 'animate.css/animate.min.css'
// import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）
import BikeManage from './components/bikeManage.js'
import UserManage from './components/userManage.js'
import OperatorManage from './components/operatorManage.js'
import RepairManage from './components/repairManage.js'
import MessageRelease from './components/messageRelease.js'
import PlatformManage from './components/platformManage.js'
import StatisticalAnalysis  from './components/statisticalAnalysis.js'

const ACTIVE = { color: 'red' }

// 配置导航
class App extends React.Component {

    render() {
        return (
            <div>
               <div className="ant-layout-header">
                 <div className="ant-layout-wrapper">
                    <div className="ant-layout-logo"></div>
                    <Menu theme="dark" mode="horizontal"
                        defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
                        <Menu.Item key="1"><Link to='/bikeManage'>车辆管理</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/userManage'>用户管理</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/operatorManage'>运营商管理</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/repairManage'>维修管理</Link></Menu.Item>
                        <Menu.Item key="5"><Link to='/messageRelease'>信息发布</Link></Menu.Item>
                        <Menu.Item key="6"><Link to='/platformManage'>平台管理</Link></Menu.Item>
                        <Menu.Item key="7"><Link to='/statisticalAnalysis'>统计分析</Link></Menu.Item>
                    </Menu>
                 </div>
                </div>
                <div className="right-box">
                        { this.props.children }
                </div>
            </div>
        )
    }
}


// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={BikeManage} />
            <Route path="/bikeManage" component={BikeManage} />
            <Route path="/userManage" component={UserManage} />
            <Route path="/operatorManage" component={OperatorManage} />
            <Route path="/repairManage" component={RepairManage} />  
            <Route path="/messageRelease" component={MessageRelease} />       
            <Route path="/platformManage" component={PlatformManage} />      
            <Route path="/statisticalAnalysis" component={StatisticalAnalysis} />
        </Route>
    </Router>
), document.getElementById('root'));