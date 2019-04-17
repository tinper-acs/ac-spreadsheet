import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Handsontable from 'handsontable';
import {getSettings} from './setting.js';

// import './Spreadsheet.scss';

const propTypes = {
}


class HotTable extends Component {

  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    this.updateHot(getSettings(nextProps));
    return false;
  }
  componentDidMount(){
    const newSettings = getSettings(this.props);
    this.hotInstance = new Handsontable(this.hotElementRef, newSettings);
  }

  componentWillUnmount(){
    this.hotInstance.destroy();
  }

  _setHotElementRef = (element)=>{
    this.hotElementRef = element;
  }

  updateHot(newSettings){
    this.hotInstance.updateSettings(newSettings, false);
  }

  render() {
    const props = this.props;
    const randomId = 'hot-' + Math.random().toString(36).substring(5);
    let {id = randomId,className='',style={}} = props;

    return (
     
        <div ref={(this._setHotElementRef)}
             id={id} 
             className={className}
             style={style}>
        </div>
    );
  }
}

export default HotTable;
