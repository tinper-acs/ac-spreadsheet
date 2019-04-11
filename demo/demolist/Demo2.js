/**
 *
 * @title 含有左侧、上层header表头
 * @description 含有左侧、上层header的表头基础电子表格并提供了一下功能
 * 1、排序
 * 2、拖拽列宽
 * 3、列交换
 *
 */

import React, { Component } from "react";
import HotTable from "../../src/index";
const data = [
  { name: "张其", date: "2019-01-11", precent: 0.11, sex: "男", score: 90 },
  { name: "王收", date: "2020-03-21", precent: 0.6, sex: "男", score: 100 },
  { name: "孙武", date: "2018-01-11", precent: 0.9, sex: "女", score: 93 },
  { name: "宋佳", date: "2021-05-11", precent: 0.21, sex: "男", score: 92 },
  { name: "李琦", date: "2021-02-11", precent: 0.32, sex: "女", score: 99 }
];
class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.hotSettings = {
      colHeaders: ["姓名", "日期", "百分比", "性别", "分数"], //列头信息
      columns: [
        //每列信息
        {
          data: "name",
          type: "text",
          width: 40
        },
        {
          data: "date",
          type: "date",
          dateFormat: "YYYY-MM-DD"
        },
        {
          data: "precent",
          type: "numeric",
          numericFormat: {
            pattern: "0.00%"
          }
        },
        {
          data: "sex",
          type: "text"
        },
        {
          data: "score",
          type: "numeric",
          numericFormat: {
            pattern: "0.0"
          }
        }
      ],
      data: data, //当前表数据
      manualColumnMove: true, //列交换
      manualColumnResize: true, //拖拽列宽
      columnSorting: {
        //排序
        indicator: true
      },
    };
    this.hotTableComponent = React.createRef();
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <HotTable
        ref={this.hotTableComponent}
        settings={this.hotSettings}
        width="600"
        height="300"
      />
    );
  }
}

export default Demo2;
