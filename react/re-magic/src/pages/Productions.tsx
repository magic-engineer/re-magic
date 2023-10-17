import styled from "styled-components"
import Background from "@/assets/img/Background.png"
import { productions } from "../libs/items/ProductionInfo"
import { useMemo } from "react"
import { classifyDevice } from "../libs/device"

const Productions = () => {
    const isMobile = useMemo(() => {
        const device = classifyDevice()
        return device === "Android" || device === "Mobile" || device === "ios"
    }, [])
    const components = (
        <div className="main">
                <div className="background-cover"></div>
                <div className="body">
                    <div className="title">
                        <div className="en">Productions</div>
                        <div className="ja">過去公演</div>
                    </div>
                    <div className="productions">
                        {
                            productions.map((production) => (
                                <div className="production" onClick={() => window.open(production.link)}>
                                    <div className="thumbnail" style={{
                                        backgroundImage: `url(${production.thumbnail})`,
                                        backgroundSize: isMobile ? "auto 120px" : "auto 200px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "50%",
                                    }}>
                                    </div>
                                    <div className="name">{production.name}</div>
                                    <div className="name">{production.date}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
    return isMobile ? (
        <ProductionsStyle>
            {components}
        </ProductionsStyle>
    ) : (
        <ProductionsStylePC>
            {components}
        </ProductionsStylePC>
    )
}

export default Productions

const ProductionsStylePC = styled.div`
background-color: black;
padding: 100px 0 0 0;
display: flex;
justify-content: center;
    .main {
        position: relative;
        margin: auto;
        width: 800px;
        height: 800px;
        background-image: url(${Background});
        background-size: 800px;
    }
    .background-cover {
        position: relative;
        background-color: white;
        opacity: 0.5;
        width: 700px;
        height: 800px;
        margin: 40px auto 20px auto;
    }
    .body {
        position: absolute;
        top: 70px;
        left: 50%;
        transform: translate(-50%, 0);
        .title {
            text-align: center;
            margin: 0 auto 20px auto;
            font-weight: bold;
            .en {
                font-size: 20px;
            }
            .ja {
                font-size: 16px;
            }
        }
        .productions {
            opacity: 100;
            display: grid;
            grid-template-columns: 220px 220px;
            .production {
                cursor: pointer;
                padding: 10px 0 10px 0;
                .thumbnail {
                    margin: auto;
                    width: 200px;
                    height: 200px;
                }
                .name {
                    width: 200px;
                    margin: 10px auto 0 auto;
                    text-align: center;
                    font-weight: bold;
                }
                &:hover {
                    background-color: white;
                }
            }
        }
    }
`

const ProductionsStyle = styled.div`
background-color: black;
padding: 100px 0 50px 0;
height: 100vh;
    .main {
        position: relative;
        margin: auto;
        width: 100vw;
        height: 100vw;
        background-image: url(${Background});
        background-size: 100vw;
    }
    .background-cover {
        position: relative;
        background-color: white;
        opacity: 0.5;
        width: 340px;
        height: 340px;
        margin: 40px auto 20px auto;
    }

    .body {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        .title {
            text-align: center;
            margin: 0 auto 20px auto;
            font-weight: bold;
            .en {
                font-size: 20px;
            }
            .ja {
                font-size: 16px;
            }
        }
        .productions {
            opacity: 100;
            display: grid;
            grid-template-columns: 140px 140px;
            .production {
                cursor: pointer;
                padding: 10px 0 10px 0;
                .thumbnail {
                    margin: auto;
                    width: 120px;
                    height: 120px;
                }
                .name {
                    width: 120px;
                    margin: 10px auto 0 auto;
                    text-align: center;
                    font-weight: bold;
                }
                &:hover {
                    background-color: white;
                }
            }
        }
    }
`