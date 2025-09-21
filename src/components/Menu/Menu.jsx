import React from "react"
import useToggle from "../../hooks/useToggle"

import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import MenuItem from "./MenuItem"

const MenuContext = React.createContext()

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle({
        initialValue: true, 
        onToggle: onOpen
    })
    
    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

Menu.Button = MenuButton
Menu.Dropdown = MenuDropdown
Menu.Item = MenuItem

export { MenuContext }