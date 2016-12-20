import React, {Component} from 'react';
import { Button } from 'antd';

class MessageRelease extends Component{
  render() {
    return (
      <div>
        bike manage
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
      </div>
    );
  }
}

export default MessageRelease