import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基础电子表格","code":"/**\n *\n * @title 基础电子表格\n * @description 基础电子表格\n *\n */\n\nimport React, { Component } from 'react';\nimport HotTable from \"ac-spreadsheet\";\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.data = [\n          ['张其', '2019',11 ,'男',90 ],\n          ['王收', '2020', 11, '男', 100],\n          ['孙武', '2018', 11, '男', 93],\n          ['宋佳','2021', 13, '女', 92],\n          ['李琦','2021', 15, '女', 99]\n        ];\n      }\n    \n      render() {\n        return (<HotTable data={this.data}  width=\"600\" height=\"300\" />);\n      }\n}\n\n\n","desc":" 基础电子表格"},{"example":<Demo2 />,"title":" 含有左侧、上层header表头","code":"/**\n *\n * @title 含有左侧、上层header表头\n * @description 含有左侧、上层header的表头基础电子表格并提供了一下功能\n * 1、排序\n * 2、拖拽列宽\n * 3、列交换\n *\n */\n\nimport React, { Component } from \"react\";\nimport HotTable from \"ac-spreadsheet\";\nconst data = [\n  { name: \"张其\", date: \"2019-01-11\", precent: 0.11, sex: \"男\", score: 90 },\n  { name: \"王收\", date: \"2020-03-21\", precent: 0.6, sex: \"男\", score: 100 },\n  { name: \"孙武\", date: \"2018-01-11\", precent: 0.9, sex: \"女\", score: 93 },\n  { name: \"宋佳\", date: \"2021-05-11\", precent: 0.21, sex: \"男\", score: 92 },\n  { name: \"李琦\", date: \"2021-02-11\", precent: 0.32, sex: \"女\", score: 99 }\n];\nclass Demo2 extends Component {\n  constructor(props) {\n    super(props);\n    this.hotSettings = {\n      colHeaders: [\"姓名\", \"日期\", \"百分比\", \"性别\", \"分数\"], //列头信息\n      columns: [\n        //每列信息\n        {\n          data: \"name\",\n          type: \"text\",\n          width: 40\n        },\n        {\n          data: \"date\",\n          type: \"date\",\n          dateFormat: \"YYYY-MM-DD\"\n        },\n        {\n          data: \"precent\",\n          type: \"numeric\",\n          numericFormat: {\n            pattern: \"0.00%\"\n          }\n        },\n        {\n          data: \"sex\",\n          type: \"text\"\n        },\n        {\n          data: \"score\",\n          type: \"numeric\",\n          numericFormat: {\n            pattern: \"0.0\"\n          }\n        }\n      ],\n      data: data, //当前表数据\n      manualColumnMove: true, //列交换\n      manualColumnResize: true, //拖拽列宽\n      columnSorting: {\n        //排序\n        indicator: true\n      },\n    };\n    this.hotTableComponent = React.createRef();\n  }\n  shouldComponentUpdate() {\n    return false;\n  }\n  render() {\n    return (\n      <HotTable\n        ref={this.hotTableComponent}\n        settings={this.hotSettings}\n        width=\"600\"\n        height=\"300\"\n      />\n    );\n  }\n}\n\n\n","desc":" 含有左侧、上层header的表头基础电子表格并提供了一下功能"},{"example":<Demo3 />,"title":" 自定义右击菜单、动态设置和获取表格数据","code":"/**\n *\n * @title 自定义右击菜单、动态设置和获取表格数据\n * @description 自定义右击菜单、动态设置和获取表格数据\n *\n */\n\nimport React, { Component } from \"react\";\nimport HotTable from \"tinper-bee/lib/HotTable\";\nimport { Button } from 'tinper-bee';\nimport Handsontable from \"handsontable\";\nclass Demo3 extends Component {\n  constructor(props) {\n    super(props);\n    this.hotSettings = {\n      data: Handsontable.helper.createSpreadsheetData(5, 5),\n      colHeaders: true,\n      copyPaste: true,\n      // Enables the plugin with custom values\n      copyPaste: {\n        columnsLimit: 25,\n        rowsLimit: 50,\n      },\n      contextMenu: {\n        items: {\n          row_above: {\n            name: \"向上插入一行\"\n          },\n          row_below: {\n            name: \"向下插入一行\"\n          },\n          separator: Handsontable.plugins.ContextMenu.SEPARATOR,\n          clear_custom: {\n            name: \"删除所有\",\n            callback: function() {\n              this.clear();\n            }\n          }\n        }\n      }\n    };\n    this.hotTableComponent = React.createRef();\n  }\n  shouldComponentUpdate() {\n    return false;\n  }\n  getData = (row, column, row2, column2) => {\n    let data = this.hotTableComponent.current.hotInstance.getData();\n    console.log(\"当前表的所有数据\", data);\n  };\n\n  loadData = () => {\n    this.hotTableComponent.current.hotInstance.loadData([[\"new\", \"data\"]]);\n  };\n  render() {\n    return (\n      <div>\n        <Button onClick={this.getData} className={\"m-sm\"}>\n          console所有数据\n        </Button>\n\n        <Button onClick={this.loadData} className={\"m-sm\"}>\n          更新数据\n        </Button>\n\n        <HotTable\n          ref={this.hotTableComponent}\n          id=\"hot\"\n          settings={this.hotSettings}\n        />\n      </div>\n    );\n  }\n}\n\n\n","desc":" 自定义右击菜单、动态设置和获取表格数据"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
