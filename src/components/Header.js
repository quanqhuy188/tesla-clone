import React,{ useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { TextareaAutosize } from '@material-ui/core';
function Header() {
    const [burgerStatus,setBurgerStatus] = useState(false)
    return ( 
        <Container>
            <a>
                <img src="/images/logo.svg"></img>
            </a>
            <Menu>
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model Y</a></p>
            </Menu>
            <RightMenu>
                <a href="#">Shop </a>
                <a href="#">Tesla Account </a> 
                <CustonMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomCloseButton onClick={()=>setBurgerStatus(false)}></CustomCloseButton>
                </CloseWrapper>
                
                <li><a href="#">Extisting Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Extisting Inventory</a></li>

            </BurgerNav>
        </Container>
    )
}

export default Header
const Container = styled.div`
    z-index: 999;
    min-height:60px;
    position:fixed;
    display:flex;
    top:0;
    left:0;
    justify-content: space-between;
    right:0;
    align-items:center;
    padding:0 20px;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    @media screen and (max-width:768px){
        display:none;
    }
    a{
        font-weight:600;
        text-decoration:uppercase;
        padding:0 10px;
        flex-wrap:no-wrap;
    }
`
const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-decoration:uppercase;
        margin-right:10px;
        flex-wrap:no-wrap;
    }
`
const CustonMenu = styled(MenuIcon)`
    cursor:pointer;
`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:100;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition:transform 0.2s;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2)
        a{
            font-weight:600;
        }
    }
`
const CustomCloseButton = styled(CloseIcon)`
    cursor:pointer;
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`