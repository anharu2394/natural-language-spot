import { h, Component } from "hyperapp"
import styled from "./../../picostyle"

interface Props {
  is?: number
}
interface DefaultProps extends Props {
  is: number
}
const columnWidth = (props: Props) => {
  if ("is" in props) {
    const { is } = props as DefaultProps
    return "is-" + is.toString()
  } else {
  return ""
  }
}

const Column: Component<Props> = (props, children) => (
  <div className={"column" + columnWidth(props)}>
    {children}
  </div>
)

export default Column
