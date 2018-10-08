import { h, Component } from "hyperapp"
import styled from "./../picostyle"
import Img from "./shared/image"
import Columns from "./shared/columns"
import Column from "./shared/column"
import Title from "./shared/title"
import Icon from "./../images/icon.png"

const Header: Component = () => (
  <div>
    <Columns>
      <Column is={2}>
        <Img src={Icon} height="100px" />
      </Column>
      <Column>
        <Title>第二外国語を応援するWeb</Title>
      </Column>
    </Columns>
  </div>
)

export default Header
