import React from 'react'
import { memo } from 'react';

const Child = (props) => {

    console.log("child component call");
    
  return (
    <div>Child</div>
  )
}

export default memo(Child)

