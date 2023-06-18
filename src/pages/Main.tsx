import { useState } from "react";
import { styled } from "styled-components";
import { RecordModal } from "../components/RecordModal";
import { Week } from "../components/Week";
import { start } from "repl";

const MainDiv = styled.div`
  width: 100%;
  height: 730px;
  background-color: #f7f8fc;
  padding-top: 40px;
`;

const ContentDiv = styled.div`
  width: 33.489%;
  height: 700px;
  box-sizing: border-box;
  background: #ffffff;
  border: 2px solid #e9e9eb;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  margin: 0 auto;
  padding: 45px;
`;

const ContentTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.15rem;
  margin-bottom: 15px;
`;

const RecordDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 14px;
`;

const CalculatedDiv = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
`;

const WeekTime = styled.div`
  background-color: #f8f8f8;
  height: 20px;
  padding: 20px;
  border-bottom: 1px solid #d1d1d1;
  border-radius: 5px 5px 0px 0px;
`;

const WeekTitleSpan = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #616161;
`;

const TimeSpan = styled.span`
  float: right;
  margin-right: 2%;
  font-size: 1.3rem;
  font-weight: bold;
  color: #616161;
`;

const TimeInput = styled.input`
  float: right;
  width: 50px;
  height: 25px;
  margin-top: -4px;
  padding-right: 0.5%;
  text-align: right;
  margin-right: 5px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #6b8dff;
  border: 1px solid #bababa;
  &::placeholder {
    color: #6b8dff;
  }
`;

const CalculatedTime = styled.div`
  background-color: white;
  height: 20px;
  padding: 20px;
  &:nth-of-type(3) {
    border-radius: 0px 0px 5px 5px;
    border-top: 1px solid #d1d1d1;
  }
`;

interface Props {
  color?: string;
}

const ResultTime = styled.span<Props>`
  float: right;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.color};
  margin-right: 5px;
`;

const ResetBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #6b8dff;
  color: #fff;
  border: none;
  margin-top: 10px;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #5f7bd5;
    transition: all 0.3s;
  }
`;

export function Main() {
  const [isModal, setIsModal] = useState(Boolean);
  const [dayTitle, setDayTitle] = useState("");
  const [weekWorkTime, setWeekWorkTime] = useState("");
  const [btnTitle, setBtnTitle] = useState("");

  const handleWeekWorkTime = (e: any) => {
    setWeekWorkTime(e.target.value);
  };

  const localStorage = window.localStorage;
  const days = ["월", "화", "수", "목", "금"];

  let data = [];
  let startDate: Date;
  let endDate: Date;
  let storedVal: string | null;
  let value : any;
  let diff: number;
  let diffHour: number;
  let diffMin: number;
  for (let i = 0; i < 5; i++) {
    storedVal = localStorage.getItem(days[i]);
    if (storedVal !== null) {
      value = JSON.parse(storedVal);

      console.log('확인');
      console.log(value);
      if (value.startState === '오후') {
        startDate = new Date(1998, 3, 3, Number(value.startHour) + 12, Number(value.startMin), 0);
      } else {
        startDate = new Date(1998, 3, 3, Number(value.startHour), Number(value.startMin), 0);
      }
      
      if (value.endState === '오후') {
        endDate = new Date(1998, 3, 3, Number(value.endHour) + 12, Number(value.endMin), 0);
      } else {
        endDate = new Date(1998, 3, 3, Number(value.endHour), Number(value.endMin), 0);
      }

      diff = (endDate.getTime() - startDate.getTime()) / 1000 / 60;
      diffHour = Math.floor(diff / 60) + Number(value.stateNum);
      diffMin = diff % 60;

      data.push({
        dayTitle: days[i],
        hour: diffHour,
        min: diffMin
      });
    } else {
      data.push({
        dayTitle: days[i],
        hour: 0,
        min: 0
      })
    }
  }

  data.map(e => {console.log(`
    hour : ${e.hour} / min : ${e.min}
  `)});

  console.log(new Date(1998, 3, 3, 9, 0, 0));
  console.log(new Date(1998, 3, 3, 18, 30, 0));
  const ttt = (new Date(1998, 3, 3, 18, 30, 0).getTime() - new Date(1998, 3, 3, 9, 0, 0).getTime()) / 1000 / 60;
  console.log(ttt);
  console.log(`diffHour : ${Math.floor(ttt / 60)}`);
  console.log(`diffMin : ${ttt % 60}`);


  return (
    <>
      <MainDiv>
        <ContentDiv>
          <ContentTitle>퇴근합시당</ContentTitle>
          <RecordDiv>
            {data.map(day => {
              return (<Week key={day.dayTitle} title={day.dayTitle} hour={day.hour} min={day.min} />)
            })}
          </RecordDiv>
          <CalculatedDiv>
            <WeekTime>
              <WeekTitleSpan>주간 근무 시간</WeekTitleSpan>
              <TimeSpan>시간</TimeSpan>
              <TimeInput
                type="text"
                placeholder="40"
                value={weekWorkTime}
                onChange={handleWeekWorkTime}
              />
            </WeekTime>
            <CalculatedTime>
              <WeekTitleSpan>총 근무 시간</WeekTitleSpan>
              <TimeSpan>분</TimeSpan>
              <ResultTime color="#60aa3e">30</ResultTime>
              <TimeSpan>시간</TimeSpan>
              <ResultTime color="#60aa3e">38</ResultTime>
            </CalculatedTime>
            <CalculatedTime>
              <WeekTitleSpan>남은 시간</WeekTitleSpan>
              <TimeSpan>분</TimeSpan>
              <ResultTime color="#ff6b6b">30</ResultTime>
              <TimeSpan>시간</TimeSpan>
              <ResultTime color="#ff6b6b">1</ResultTime>
            </CalculatedTime>
          </CalculatedDiv>
          <ResetBtn>시간 초기화</ResetBtn>
        </ContentDiv>
        {isModal && (
          <RecordModal
            status={setIsModal}
            dayTitle={dayTitle}
            // btnTitle={setBtnTitle}
          />
        )}
      </MainDiv>
    </>
  );
}
