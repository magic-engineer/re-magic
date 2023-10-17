import React, { useMemo, useState } from 'react';
import './App.css';
import Background from "@/assets/img/Background.png"
import Card from "@/assets/img/Card.png"
import { styled } from "styled-components"
import { motion } from "framer-motion";
import { classifyDevice } from './libs/device';
import { ProductionInfo } from './libs/items/ProductionInfo';
import dayjs from 'dayjs';
import Button from './components/common/button/button';
import { members } from './libs/items/Members';

const App = () => {
  const [transitionEnd, setTransitionEnd] = useState(false)

  const isMobile = useMemo(() => {
    const device = classifyDevice()
    return device === "Android" || device === "ios" || device === "Mobile"
  }, [])
  
  const motionComponent = (
    <motion.div 
          className='card'
          animate={{
            opacity: [0, 0, 1],
            translateX: ["-50%"],
            translateY: ["-50%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 1],
          }}
          onAnimationComplete={() => {
            setTransitionEnd(true) 
            console.log("end")
          }}
          style={{
            backgroundImage: `url(${Card})`
          }}
        >
        </motion.div>
  )

  const leftInfo = (
    <div className="note left">
      {transitionEnd ? (<>
        <div className="title">公演情報</div>
          <div className="info">
            <div>{dayjs(ProductionInfo['stage-date']).format("YYYY/MM/DD (ddd)")}</div>
            <div>開場: {dayjs(ProductionInfo['open-datetime']).format("HH:mm")}</div>
            <div>開演: {dayjs(ProductionInfo['start-datetime']).format("HH:mm")}</div>
            <div>終演: {dayjs(ProductionInfo['end-datetime']).format("HH:mm")}</div>
            <div className='location'>{ProductionInfo.location}</div>
            <Button 
              buttonType="powerful-red-white-shadow"
              label={"Google Map"}
              onClick={() => { window.open(ProductionInfo.googleMapURL) }}
            />
        </div>
      </>) : <></>}
    </div>
  )

  const rightInfo = (
    <div className="note right">
      {transitionEnd ? (<>
        <div className="members">
          <div className="title">出演者</div>
          <div className="list">
            {
              members.actors.length ? members.actors.sort((a, b) => a.phonetic.localeCompare(b.phonetic, "ja")).map((member, index) => (
                <div key={"actor" + index}>{member.name}</div>
              )) : <></>
            }
          </div>
        </div>
        <div className="members">
          <div className="title">スタッフ</div>
          <div className="list">
            {
              members.staffs.sort((a, b) => a.phonetic.localeCompare(b.phonetic, "ja")).map((member, index) => (
                <div key={"staff" + index}>{member.name}</div>
              ))
            }
          </div>
        </div>
      </>) : <></>}
    </div>
  )

  return isMobile ? (
    <AppStyle>
      <div className="home">
        {motionComponent}
      </div>
      {leftInfo}
      {rightInfo}
    </AppStyle>
  ) : (
    <AppStylePC>
      {leftInfo}
      <div className="home">
        {motionComponent}
      </div>
      {rightInfo}
    </AppStylePC>
  );
}

export default App;

const AppStylePC = styled.div`
background-color: black;
padding: 100px 0 0 0;
display: flex;
justify-content: center;
  .home {
    margin: auto;
    width: 800px;
    height: 800px;
    background-image: url(${Background});
    background-size: 800px;
    .card {
      position: absolute;
      top: 60%;
      left: 50%;
      height: 356.4px;
      width: 252px;
      border-radius: 20px;
      background-size: 256px 361px;
    }
  }
  .note {
    width: 200px;
    height: auto;
    color: white;
    text-align: center;
    padding: 20px 0 0 0;
    position: fixed;
    top: 100px;
    &.left {
      left: 50px;
    }
    &.right {
      right: 50px;
    }
    .members {
      margin-bottom: 30px;
    }
    .title {
      font-weight: bold;
      margin: 10px auto 10px auto;
    }
    .location {
      margin: 10px auto 10px auto;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`

const AppStyle = styled.div`
background-color: black;
padding: 100px 0 50px 0;
height: 1000px;
  .home {
    margin: auto;
    width: 100vw;
    height: 100vw;
    background-image: url(${Background});
    background-size: 100vw;
    .card {
      position: absolute;
      top: 40%;
      left: 50%;
      height: 297px;
      width: 210px;
      border-radius: 20px;
      background-size: 210px 297px;
    }
  }
  .note {
    color: white;
    margin: 20px auto 30px auto;
    text-align: center;
    .title {
      font-weight: bold;
      margin: 10px auto 10px auto;
    }
    .info {
      margin: 0 auto 10px auto;
    }
    .location {
      margin: 10px auto 10px auto;
    }
  }
`
