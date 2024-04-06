import React from 'react'
import icons from '../config/icon/icon.map'

export default function ShowIcon(props) {

    if(!(props.name in icons)) {
        return <></>
    } 

    const Icon = icons[props.name]
  
    return (
    <Icon {...props} />
  )
}
