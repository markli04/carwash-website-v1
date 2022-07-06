import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>О нас</SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>Особенность</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Услуги</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Соцсети</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="#">Связаться</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    )
}

export default Sidebar