import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RepairManage extends Component{
  
  render() {
    return (
      <Menu 
        style={{ width: 240 }}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="cloud-upload-o" /><span>提交维修需求</span></span>}>
            <Menu.Item key="1">提交需求</Menu.Item>
            <Menu.Item key="2">删除需求</Menu.Item>
            <Menu.Item key="3">修改需求</Menu.Item>
            <Menu.Item key="4">查询需求</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="code-o" /><span>维修记录</span></span>}>
          <Menu.Item key="5">录入记录</Menu.Item>
          <Menu.Item key="6">删除记录</Menu.Item>
          <Menu.Item key="7">修改记录</Menu.Item>
          <Menu.Item key="8">查询记录</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="pay-circle-o" /><span>维修成本</span></span>}>
          <Menu.Item key="9">录入成本</Menu.Item>
          <Menu.Item key="10">删除成本</Menu.Item>
          <Menu.Item key="11">修改成本</Menu.Item>
          <Menu.Item key="12">查询成本</Menu.Item>
        </SubMenu>  
      </Menu>
    );
  }
}

export default RepairManage