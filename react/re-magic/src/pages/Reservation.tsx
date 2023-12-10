import styled from "styled-components"
import Button from "../components/common/button/button"
import { ProductionInfo } from "../libs/items/ProductionInfo"
import Background from "@/assets/img/Background.png"
import { useMemo } from "react"
import { classifyDevice } from "../libs/device"

const Reservation = () => {
    const isMobile = useMemo(() => {
        const device = classifyDevice()
        return device === "Android" || device === "Mobile" || device === "ios"
    }, [])

    const components = useMemo(() => (
        <div className="main">
            <div className="background-cover"></div>
            <div className="body">
                <div className="title">
                        <div className="en">Reservation</div>
                        <div className="ja">予約</div>
                </div>
                <div className="description">
                    下記Googleフォームよりご予約いただけます。
                </div>
                <div>
                    <Button 
                        buttonType="powerful-red"
                        label="Googleフォーム"
                        onClick={() => { window.open(ProductionInfo.reservationUrl) }}
                    />
                </div>
            </div>
        </div>
    ), [])

    return isMobile ? (
        <ReservationStyleMobile>
            {components}
        </ReservationStyleMobile>
    ) : (
        <ReservationStylePC>
            {components}
        </ReservationStylePC>
    )
}
export default Reservation

const ReservationStylePC = styled.div`
    background-color: black;
    padding: 100px 0 0 0;
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
        .description {
            margin: 10px auto 20px auto;
        }
    }
`

const ReservationStyleMobile = styled.div`
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
        .description {
            margin: 10px auto 20px auto;
        }
    }
`