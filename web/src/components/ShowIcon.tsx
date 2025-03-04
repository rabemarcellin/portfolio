import icons from '../store/datas/icons'

type ShowIconProps = {
  name: string;
  className: string;
}

export default function ShowIcon(props: Partial<ShowIconProps>) {
  if(props.name) {

    if(!(props.name in icons)) {
      return <></>
    } 

    const Icon = icons[props.name as keyof typeof icons]

    return (
      <Icon {...props} />
    )
  }
  return <></>
  
  
}
