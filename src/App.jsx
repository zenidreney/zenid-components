import Badge from "./components/Badge/Badge"
import "./components/Badge/Badge.css"

import Star from "./components/Star"
import "./components/Star.css"

import Button from "./components/Button/Button"
import "./components/Button/Button.css"

import Menu from "./components/Menu/Menu"
import "./components/Menu/Menu.css"


function App() {

  return (
    <>
      <h1>React Components ++</h1>

      <p>Badge Component</p>

      <Badge
        color= "green"/>

      <br />
      <hr />

      <p>Star Component</p>
      <Star onChange={() => console.log("Changed")} />

      <br />
      <hr />

      <p>Button Component</p>
      <Button variant="success" size="sm">Hello</Button>
      <Button variant="success">Hello</Button>
      <Button variant="success" size="lg">Hello</Button>

      <br />
      <hr />

      <p>Menu Component</p>
      <Menu onOpen={() => console.log("Opened/closed")}>
        <Menu.Button>
          Menu
        </Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>
            Item 1
          </Menu.Item>
          <Menu.Item>
            Item 2
          </Menu.Item>
          <Menu.Item>
            Item 3
          </Menu.Item>
          <Menu.Item>
            Item 4
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <hr />
    </>


  )
}


export default App
