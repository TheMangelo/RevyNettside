import React, {useState} from 'react';
import styled from 'styled-components';
import "./styles.css"

const MainContainer = styled.div`
      padding-top: 13%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
`

const TitleText = styled.div`
    display: block;
    font-size: 7em;
    font-weight: bold;  
`;

const TimeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    border: 15px solid green;
    padding: 50px;
    margin: 20px;
    border: 3px solid;
`;

const TimeValue = styled.div`
    font-weight: bold;
    font-size: 4em;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`



const Timer = () => {

  const [days, setDays] = useState(12);
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(1);

  return (

  <MainContainer>
    <TitleText> Abakusrevyen </TitleText> 
    <TimeContainer>
      <TimeValue>{days} <p> Days </p> </TimeValue>
      <TimeValue> {hours} </TimeValue>
      <TimeValue> {minutes} </TimeValue>
      <TimeValue> {seconds} </TimeValue>
    </TimeContainer>
  </MainContainer>

  );
};

export default Timer;