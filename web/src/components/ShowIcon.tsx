import React from 'react'
import icons from '../store/datas/icons'

export default function ShowIcon(props) {

    if(!(props.name in icons)) {
        return <></>
    } 

    const Icon = icons[props.name]
  
    return (
    <Icon {...props} />
  )
}
