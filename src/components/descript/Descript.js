import React from 'react'
import './descript.css'
import { ReactComponent as UnionIcon } from '../../assets/images/Union.svg'

function Descript (props) {
  return (
    <div className='DescriptContainer'>
        <span><UnionIcon fill={props.fill} alt=''/></span>
        <p className='DescriptParg'>{props.parg}</p>
    </div>
  )
}

export default Descript