import React, {PropTypes} from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch, Breadcrumb, Alert } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
// import 'animate.css/animate.min.css'
// import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

//import NavPath from './Navpath/index.js'
// 引入单个页面（包括嵌套的子页面）
// import NavPath from './components/component/navPath.js'
import BikeMessageAdd from './components/bikeMessageAdd.js'
import BikeMessageDelete from './components/bikeMessageDelete.js'
import BikeMessageRepair from './components/bikeMessageRepair.js'
import BikeMessageSearch from './components/bikeMessageSearch.js'
import UserMessageAdd from './components/userMessageAdd.js'
import UserMessageAudit from './components/userMessageAudit.js'
import UserMessageRepair from './components/userMessageRepair.js'
import UserMessageDelete from './components/userMessageDelete.js'
import UserMessageSearch from './components/userMessageSearch.js'
import OperatorAdd from './components/operatorAdd.js'
import OperatorDelete from './components/operatorDelete.js'
import OperatorRepair from './components/operatorRepair.js'
import OperatorManage from './components/operatorManage.js'
import RepairManage from './components/repairManage.js'
import MessageRelease from './components/messageRelease.js'
import MessageSearch from './components/messageSearch.js'
import PlatformManage from './components/platformManage.js'
import StatisticalAnalysis  from './components/statisticalAnalysis.js'

const ACTIVE = { color: 'red' }


// 配置导航

// import BrowserDemo from 'site/theme/template/BrowserDemo';


const App = React.createClass({
  getInitialState() {
    return {
      collapse: false,
    };
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  
  render() {
    const collapse = this.state.collapse;
	const { routes, params, children } = this.props;
    return (
      <div className={collapse ? "layout-aside layout-aside-collapse" : "layout-aside"}>
        <aside className="layout-sider">
          <div className="layout-logo"></div>
          <Menu mode={collapse ? "vertical" : "inline"} theme="dark" defaultSelectedKeys={['user']}>
            <SubMenu key="sub1" title={<span><Icon type="mail" />{!collapse && <span className="nav-text">车辆管理</span>}</span>}>
                <Menu.Item key="1"><Link to="/bikeMessageAdd">增加车辆信息</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/bikeMessageDelete">删除车辆信息</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/bikeMessageRepair">修改车辆信息</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/bikeMessageSearch">查询车辆信息</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="user" title={<span><Icon type="user" />{!collapse && <span className="nav-text">用户管理</span>}</span>}>
                <Menu.Item key="5"><Link to="/userMessageAdd">增加用户信息</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/userMessageAudit">审核用户信息</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/userMessageDelete">删除用户信息</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/userMessageRepair">修改用户信息</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/userMessageSearch">查询用户信息</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="team" />{!collapse && <span className="nav-text">运营商管理</span>}</span>}>
                <Menu.Item key="10"><Link to="/operatorAdd">添加运营商</Link></Menu.Item>
                <Menu.Item key="11"><Link to="/operatorDelete">删除运营商</Link></Menu.Item>
                <Menu.Item key="12"><Link to="/operatorRepair">修改运营商</Link></Menu.Item>
                <Menu.Item key="13"><Link to="/operatorManage">承租车辆管理</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" />{!collapse && <span className="nav-text">维修管理</span>}</span>}>
                <Menu.Item key="14">提交维修需求</Menu.Item>
                <Menu.Item key="15">维修成本</Menu.Item>
                <Menu.Item key="16">维修记录</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="mail" />{!collapse && <span className="nav-text">信息发布</span>}</span>}>
                <Menu.Item key="17"><Link to="/messageRelease">发布信息</Link></Menu.Item>
                <Menu.Item key="18"><Link to="/messageSearch">查询发布信息</Link></Menu.Item>
            </SubMenu>
			<SubMenu key="sub6" title={<span><Icon type="appstore" />{!collapse && <span className="nav-text">平台管理</span>}</span>}>
                <Menu.Item key="19"><Link to="/platformManage">系统用户管理</Link></Menu.Item>
            </SubMenu>
			<SubMenu key="sub7" title={<span><Icon type="pie-chart" />{!collapse && <span className="nav-text">统计分析</span>}</span>}>
                <Menu.Item key="20"><Link to="/statisticalAnalysis">统计服务</Link></Menu.Item>
            </SubMenu>
          </Menu>
          <div className="aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="layout-main">
          <div className="layout-header">
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
		  </div>
          <div className="layout-container">
            <Breadcrumb routes={routes} params={params} style={{ marginButtom: 150 }} /> 
            <div className="layout-content">
              <div>
				{this.props.children}
              </div>
            </div>
          </div>
          <div className="layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
    );
  },
});
// 配置路由
render((
    <Router history={hashHistory} >
        <Route breadcrumbName="首页" path="/" component={App}>
            <IndexRoute breadcrumbName="增加车辆信息" component={BikeMessageAdd} />
            <Route breadcrumbName="车辆管理" path="/">
				<Route path="/bikeMessageAdd" breadcrumbName="增加车辆信息" component={BikeMessageAdd} />
				<Route path="/bikeMessageDelete" breadcrumbName="删除车辆信息" component={BikeMessageDelete} />
				<Route path="/bikeMessageRepair" breadcrumbName="修改车辆信息" component={BikeMessageRepair} />
				<Route path="/bikeMessageSearch" breadcrumbName="查询车辆信息" component={BikeMessageSearch} />
			</Route>
			<Route breadcrumbName="用户管理" path="/">
				<Route path="/userMessageAdd" breadcrumbName="增加用户信息" component={UserMessageAdd} />
				<Route path="/userMessageAudit" breadcrumbName="审核用户信息" component={UserMessageAudit} />
				<Route path="/userMessageRepair" breadcrumbName="删除用户信息" component={UserMessageRepair} />
				<Route path="/userMessageDelete" breadcrumbName="修改用户信息" component={UserMessageDelete} />
				<Route path="/userMessageSearch" breadcrumbName="查询用户信息" component={UserMessageSearch} />
            </Route>
			<Route breadcrumbName="运营商管理" path="/">
				<Route path="/operatorAdd" breadcrumbName="添加运营商" component={OperatorAdd} />
				<Route path="/operatorDelete" breadcrumbName="删除运营商" component={OperatorDelete} />
				<Route path="/operatorRepair" breadcrumbName="修改运营商" component={OperatorRepair} />
				<Route path="/operatorManage" breadcrumbName="承租车辆管理" component={OperatorManage} />
			</Route>
			<Route breadcrumbName="维修管理" path="/">
				<Route path="/repairManage" breadcrumbName="提交维修需求" component={RepairManage} />  
			</Route>
			<Route breadcrumbName="信息发布" path="/">
				<Route path="/messageRelease" breadcrumbName="发布信息" component={MessageRelease} />  
				<Route path="/messageSearch" breadcrumbName="查询发布信息" component={MessageSearch} />   
			</Route>
			<Route breadcrumbName="平台管理" path="/">
				<Route path="/platformManage" breadcrumbName="系统用户管理" component={PlatformManage} />      
            </Route>
			<Route breadcrumbName="统计服务" path="/">
				<Route path="/statisticalAnalysis" breadcrumbName="统计服务" component={StatisticalAnalysis} />
			</Route>
        </Route>
    </Router>
), document.getElementById('root'));