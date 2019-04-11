# 电子表格 Spreadsheet

## 何时使用

在线电子表格组件,依赖于handsontable.该组件提供了列宽拖拽、列交换、排序、在线编辑、增减行、动态获取焦点行数据等操作。

## 如何使用

```
npm install ac-spreadsheet --save

import React, { Component } from 'react';
import HotTable from 'ac-spreadsheet';
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
```

## 代码演示


## API 


 参数      | 类型                 | 默认值 | 说明
----------|----------------------|--------------|------
settings|	object	|-|	handsontable组件中的所需参数都在这个对象中


## 注意事项

当前按钮集成Button所有的属性

## 更新日志

暂无