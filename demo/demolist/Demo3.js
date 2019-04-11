/**
 *
 * @title 自定义右击菜单、动态设置和获取表格数据
 * @description 自定义右击菜单、动态设置和获取表格数据
 *
 */

import React, { Component } from "react";
import HotTable from "../../src/index";
import Handsontable from "handsontable";
import Button from "bee-button";
class Demo3 extends Component {
  constructor(props) {
    super(props);
    this.hotSettings = {
      data: Handsontable.helper.createSpreadsheetData(5, 5),
      colHeaders: true,
      copyPaste: true,
      // Enables the plugin with custom values
      copyPaste: {
        columnsLimit: 25,
        rowsLimit: 50,
      },
      contextMenu: {
        items: {
          row_above: {
            name: "向上插入一行"
          },
          row_below: {
            name: "向下插入一行"
          },
          separator: Handsontable.plugins.ContextMenu.SEPARATOR,
          clear_custom: {
            name: "删除所有",
            callback: function() {
              this.clear();
            }
          }
        }
      }
    };
    this.hotTableComponent = React.createRef();
  }
  shouldComponentUpdate() {
    return false;
  }
  getData = (row, column, row2, column2) => {
    let data = this.hotTableComponent.current.hotInstance.getData();
    console.log("当前表的所有数据", data);
  };

  loadData = () => {
    this.hotTableComponent.current.hotInstance.loadData([["new", "data"]]);
  };
  render() {
    return (
      <div>
        <Button onClick={this.getData} className={"m-sm"}>
          console所有数据
        </Button>

        <Button onClick={this.loadData} className={"m-sm"}>
          更新数据
        </Button>

        <HotTable
          ref={this.hotTableComponent}
          id="hot"
          settings={this.hotSettings}
        />
      </div>
    );
  }
}

export default Demo3;
