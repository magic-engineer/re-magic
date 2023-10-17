import styled from "styled-components"
import logo_01 from "@/assets/img/logo_01.png"
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <HeaderStyle>
            <div className="left-item" onClick={() => { window.location.href = "/" }}>
            </div>
            <div className="hamburger"><MenuIcon fontSize="large" sx={{color: "black"}} /></div>
        </HeaderStyle>
    )
}

export default Header

const HeaderStyle = styled.div`
    z-index: 1000;
    background-color: #03037b;
    width: 100vw;
    height: 100px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-item {
        cursor: pointer;
        background-image: url(${logo_01});
        width: 80px;
        height: 80px;
        background-size: 80px;
        background-repeat: no-repeat;
        margin-left: 20px;
    }
    .hamburger {
        width: 50px;
        height: 50px;
        background-color: white;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin-right: 20px;
        cursor: pointer;
    }
`