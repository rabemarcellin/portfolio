import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import './Linked.css'

export default function Linked(props) {
    const { navbarHeight } = useContext(AppContext)

  return (
    <div 
    {...props}
    className={`${props.className  || ''} linked`}
    style={{
        paddingTop: navbarHeight ? navbarHeight : 0
    }}>
        {props.children}
    </div>
  )
}
