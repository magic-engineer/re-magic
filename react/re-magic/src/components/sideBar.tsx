import styled from "styled-components"
import { menuItems } from "../libs/items/MenuItems"

type Props = {
    onClose: () => void
}

const SideBar = (props: Props) => {
    return (
        <SideBarStyle>
            <div 
                className="background-cover"
                onClick={props.onClose}
            ></div>
            <div className="bar-body">
                <div className="title">
                    メニュー
                </div>
                <div className="menu-items">
                    {
                        menuItems.map((item, index) => (
                            <div className="menu-item" key={"menu-item-" + index} onClick={() => { window.location.href = item.link }}>
                                <div className="item-names">
                                    <div className="item-name en">{item.subtitle}</div>
                                    <div className="item-name ja">{item.name}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </SideBarStyle>
    )
}

export default SideBar

const SideBarStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    .background-cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.3;
    }
    .bar-body {
        background-color: white;
        position: fixed;
        right: 0;
        top: 0;
        width: 250px;
        height: 100vh;
        .title {
            margin: 20px auto 20px auto;
            text-align: center;
            font-weight: bold;
        }
        .menu-items {
            .menu-item {
                margin: auto;
                text-align: center;
                height: 60px;
                cursor: pointer;
                justify-content: center;
                display: flex;
                align-items: center;
                &:hover {
                    background-color: #d1cccc;
                }
                .item-names {
                    .item-name {
                        justify-content: center;
                        display: flex;
                        align-items: center;
                        &.en {
                            font-size: 16px;
                            font-weight: bold;
                        }
                        &.ja {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
`