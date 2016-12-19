import React, {Component} from 'react';
import { Tabs } from 'antd';
import BikeManage from './bikeManage';

const TabPane = Tabs.TabPane;
class Define extends Component{
  render() {
    return (
      <Tabs defaultActiveKey="2" size="small">
        <TabPane tab="Tab 1" key="1">{<BikeManage/>}</TabPane>
        <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
    </Tabs>
    );
  }
}

export default Define