import { useContext } from 'react'
import AppContext from '../../store/contexts/AppContext'
import './linked.css'

type LinkedProps = {
  id: string;
  className: string;
  children: JSX.Element;
  [key: string]: any;
}
export default function Linked(props: Partial<LinkedProps>) {
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
