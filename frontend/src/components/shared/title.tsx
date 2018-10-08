import { h, Component } from "hyperapp"
import styled from "./../../picostyle"

const Title: Component = ({}, children) => (
  <h1 className="title">
    {children}
  </h1>
)

export default Title
