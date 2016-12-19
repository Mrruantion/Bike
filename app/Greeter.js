import React, {Component} from 'react';
import { Button, Radio, DatePicker } from 'antd';

class Greeter extends Component{

  render() {
    return (
      <div>
        hello world 
        <Radio>Radio</Radio>
        <DatePicker />
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
      </div>
    );
  }
}

export default Greeter