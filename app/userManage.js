import React, {Component} from 'react';
import { Button } from 'antd';

class UserManage extends Component{
  render() {
    return (
      <div>
        user manage
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
      </div>
    );
  }
}

export default UserManage