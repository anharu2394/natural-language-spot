import { h, Component } from "hyperapp"
import styled from "./../../picostyle"

const Columns: Component = ({}, children) => (
  <div className="columns">
    {children}
  </div>
)

export default Columns
