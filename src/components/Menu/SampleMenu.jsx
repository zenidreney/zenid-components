import Menu from "./Menu"

const SampleMenu =

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

export default  SampleMenu
