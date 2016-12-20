import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class BikeManage extends Component{

  render() {
    return (
      <Menu 
        style={{ width: 240 }}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="plus-circle-o" /><span>增加车辆信息</span></span>}>
            <Menu.Item key="1">车辆信息</Menu.Item>
            <Menu.Item key="2">配套设备</Menu.Item>
            <Menu.Item key="3">车辆的状态</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="delete" /><span>删除车辆信息</span></span>}>
          <Menu.Item key="4">车辆状态修改</Menu.Item>
          <Menu.Item key="5">配套设备使用状态修改</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="edit" /><span>修改车辆信息</span></span>}>
          <Menu.Item key="6">车辆信息</Menu.Item>
          <Menu.Item key="7">配套设备信息</Menu.Item>
          <Menu.Item key="8">车辆状态</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="search" /><span>查询车辆信息</span></span>}>
          <Menu.Item key="9">基本信息</Menu.Item>
          <Menu.Item key="10">车辆位置</Menu.Item>
          <Menu.Item key="11">使用记录</Menu.Item>
          <Menu.Item key="12">维修记录</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default BikeManage