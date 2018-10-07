import { h, View } from "hyperapp"
import { State } from "./state"
import { Actions } from "./actions"

const view: View<State, Actions> = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
)

export default view
