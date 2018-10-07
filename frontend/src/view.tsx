import { h, View } from "hyperapp"
import { State } from "./state"
import { Actions } from "./actions"
import Home from "./components/home"
import Header from "./components/header"
import Footer from "./components/footer"

const view: View<State, Actions> = (state, actions) => (
  <div>
    <Header />
    <Home />
    <Footer />
  </div>
)

export default view
