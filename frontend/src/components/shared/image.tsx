import { h } from "hyperapp"
import styled from "./../../picostyle"

interface Props {
  height: string
  width: string
}

const Img = styled("img")( (props: Props) => ({
  height: props.height ? props.height : "auto",
  width: props.width ? props.width : "auto",
}))

export default Img
