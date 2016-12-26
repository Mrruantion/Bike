import React, {PropTypes} from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch, Breadcrumb } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
// import 'animate.css/animate.min.css'
// import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）
// import NavPath from './components/component/navPath.js'
import BikeMessageAdd from './components/bikeMessageAdd.js'
import BikeMessageDelete from './components/bikeMessageDelete.js'
import BikeMessageRepair from './components/bikeMessageRepair.js'
import BikeMessageSearch from './components/bikeMessageSearch.js'
import UserMessageAdd from './components/userMessageAdd.js'
import UserMessageAudit from './components/userMessageAudit.js'
import OperatorAdd from './components/operatorAdd.js'
import RepairManage from './components/repairManage.js'
import MessageRelease from './components/messageRelease.js'
import PlatformManage from './components/platformManage.js'
import StatisticalAnalysis  from './components/statisticalAnalysis.js'

const ACTIVE = { color: 'red' }


// 配置导航
class App extends React.Component {
    constructor (props) {
    super(props)
  }
    render() {
        return (
            <div>
                <div id="leftMenu"> 
                    <a href="#" id="logo">BikeSharePlatform</a>
                    <Menu theme="dark"
                        style={{ width: 185 }}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>车辆管理</span></span>}>
                            <Menu.Item key="1"><Link to="/bikeMessageAdd">增加车辆信息</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/bikeMessageDelete">删除车辆信息</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/bikeMessageRepair">修改车辆信息</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/bikeMessageSearch">查询车辆信息</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="user" /><span>用户管理</span></span>}>
                            <Menu.Item key="5"><Link to="/userMessageAdd">增加用户信息</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/userMessageAudit">审核用户信息</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/statisticalAnalysis">删除用户信息</Link></Menu.Item>
                            <Menu.Item key="8">修改用户信息</Menu.Item>
                            <Menu.Item key="9">查询用户信息</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="team" /><span>运营商管理</span></span>}>
                            <Menu.Item key="10"><Link to="/operatorAdd">添加运营商</Link></Menu.Item>
                            <Menu.Item key="11">删除运营商</Menu.Item>
                            <Menu.Item key="12">修改运营商</Menu.Item>
                            <Menu.Item key="13">承租车辆管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>维修管理</span></span>}>
                            <Menu.Item key="14">提交维修需求</Menu.Item>
                            <Menu.Item key="15">维修成本</Menu.Item>
                            <Menu.Item key="16">维修记录</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><Icon type="mail" /><span>信息发布</span></span>}>
                            <Menu.Item key="17">发布信息</Menu.Item>
                            <Menu.Item key="18">查询发布信息</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" title={<span><Icon type="appstore" /><span>平台管理</span></span>}>
                            <Menu.Item key="19"><Link to="/messageRelease">系统用户管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub7" title={<span><Icon type="pie-chart" /><span>统计分析</span></span>}>
                            <Menu.Item key="20"><Link to="/statisticalAnalysis">统计服务</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />xxx</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                        <SubMenu title={<span><Icon type="info-circle-o" /></span>}>
                           <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                        <SubMenu title={<span><Icon type="notification" /></span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                        <SubMenu title={<span><Icon type="mail" /></span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        <div className="ant-layout-breadcrumb">
                            
                        </div>
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}
// 配置路由
render((
    <Router history={hashHistory} >
        <Route name="home" breadcrumbName="Home" path="/" component={App}>
            <IndexRoute component={BikeMessageAdd} />
            <Route path="/bikeMessageAdd" component={BikeMessageAdd} />
            <Route path="/bikeMessageDelete" component={BikeMessageDelete} />
            <Route path="/bikeMessageRepair" component={BikeMessageRepair} />
            <Route path="/bikeMessageSearch" component={BikeMessageSearch} />
            <Route path="/userMessageAdd" component={UserMessageAdd} />
            <Route path="/userMessageAudit" component={UserMessageAudit} />
            <Route path="/operatorAdd" component={OperatorAdd} />
            <Route path="/repairManage" component={RepairManage} />  
            <Route path="/messageRelease" component={MessageRelease} />       
            <Route path="/platformManage" component={PlatformManage} />      
            <Route path="/statisticalAnalysis" component={StatisticalAnalysis} />
        </Route>
    </Router>
), document.getElementById('root'));