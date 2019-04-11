/**
 *
 * @title 基础电子表格
 * @description 基础电子表格
 *
 */

import React, { Component } from 'react';
import HotTable from '../../src/index';
class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.data = [
          ['张其', '2019',11 ,'男',90 ],
          ['王收', '2020', 11, '男', 100],
          ['孙武', '2018', 11, '男', 93],
          ['宋佳','2021', 13, '女', 92],
          ['李琦','2021', 15, '女', 99]
        ];
      }
    
      render() {
        return (<HotTable data={this.data}  width="600" height="300" />);
      }
}

export default Demo1;
