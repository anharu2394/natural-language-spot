import { app } from "hyperapp"
import { state, State } from "./state"
import { actions, Actions } from "./actions"
import view from "./view"

app<State, Actions>(state, actions, view, document.body)
