import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class UserManage extends Component{

  render() {
    return (
      <Menu 
        style={{ width: 240 }}
        mode="inline"
      > 
       <SubMenu key="sub1" title={<span><Icon type="plus-circle-o" /><span>增加用户信息</span></span>}>
            <Menu.Item key="1">用户信息</Menu.Item> 
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="user" /><span>审核用户信息</span></span>}>
            <Menu.Item key="2">用户身份证</Menu.Item> 
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="delete" /><span>删除用户信息</span></span>}>
          <Menu.Item key="3">用户状态</Menu.Item>
          <Menu.Item key="4">账户状态</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="edit" /><span>修改用户信息</span></span>}>
          <Menu.Item key="5">用户信息</Menu.Item>
          <Menu.Item key="6">账户信息</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="search" /><span>查询用户信息</span></span>}>
          <Menu.Item key="7">基本信息</Menu.Item>
          <Menu.Item key="8">用户状态</Menu.Item>
          <Menu.Item key="9">账户状态</Menu.Item>
          <Menu.Item key="10">使用记录</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default UserManage