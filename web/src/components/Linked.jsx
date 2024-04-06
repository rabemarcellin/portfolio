import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

export default function Linked(props) {
    const { navbarHeight } = useContext(AppContext)

  return (
    <div 
    {...props}
    style={{
        paddingTop: navbarHeight ? navbarHeight : 0
    }}>
        {props.children}
    </div>
  )
}
