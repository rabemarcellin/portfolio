import React, { useContext } from 'react'
import AppContext from '../../store/contexts/AppContext'
import './linked.css'

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
