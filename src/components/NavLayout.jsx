import { NavStyle, NavItem, NavContainer } from "./styles/NavStyle";
import React from 'react'

export default function NavLayout() {
    const [activeIndex, setActiveIndex] = React.useState(null)
    const handleClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <NavContainer>
            <NavStyle>
                <NavContainer>
                    <NavItem onClick={() => handleClick(0)} isActive={activeIndex === 0}>Home</NavItem>
                    <NavItem onClick={() => handleClick(1)} isActive={activeIndex === 1}>About</NavItem>
                    <NavItem onClick={() => handleClick(2)} isActive={activeIndex === 2}>Projects</NavItem>
                    <NavItem onClick={() => handleClick(3)} isActive={activeIndex === 3}>Skills</NavItem>
                    <NavItem onClick={() => handleClick(4)} isActive={activeIndex === 4}>Experience</NavItem>
                    <NavItem onClick={() => handleClick(5)} isActive={activeIndex === 5}>Contact</NavItem>
                </NavContainer>
            </NavStyle>
        </NavContainer>
    )
}