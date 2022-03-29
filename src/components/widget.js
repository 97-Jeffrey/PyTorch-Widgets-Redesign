import React, { Fragment } from 'react';

//import css 
import "./widget.css"

const Widget = ({ index, onClick, selectedwidget, selection }) =>{

  return(
    <Fragment>
      <div 
        key={index}
        onClick={onClick}
        className={ selectedwidget=== index? "widget active":"widget"}>{selection} 
      </div>
    </Fragment>
  )
}

export default Widget;