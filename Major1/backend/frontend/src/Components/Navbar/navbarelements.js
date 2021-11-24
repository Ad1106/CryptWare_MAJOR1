import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #ffffff;
    height:90px;
    display:flex;
    justify-content:space-between;
    padding: 0.5rem calc((100vm - 1000px) / 2);
    box-shadow: 0px 6px 20px #000000;
    z-index:10;
`

export const NavLink = styled(Link)`
    font-size: 18px;
    font-weight:bold;
    color:black;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 50px;
    height:100%;
    cursor:pointer;

    &.active{
        color:#4d0099;
    }
`

export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:5px;
`
