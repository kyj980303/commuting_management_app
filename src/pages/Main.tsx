import { useState } from "react";
import { styled } from "styled-components";
import { RecordModal } from "../components/RecordModal";
import { Week } from "../components/Week";

interface Props {
  color?: string;
}

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
  border: 1px solid #d1d1d1;
  width: 100%;
  height: auto;
`;

const WeekTime = styled.div`
  background-color: #f8f8f8;
  height: 20px;
  padding: 20px;
  border-bottom: 1px solid #d1d1d1;
`;

const WeekTitleSpan = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #616161;
`;

const TimeSpan = styled.span`
  float: right;
  font-size: 1.3rem;
  font-weight: bold;
  color: #616161;
`;

const TimeInput = styled.input`
  float: right;
  width: 50px;
  height: 25px;
  margin-top: -4px;
  padding-right: 6px;
  text-align: right;
  margin-right: 5px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #6b8dff;
  border: 1px solid #d1d1d1;
`;

const CalculatedTime = styled.div`
  border-bottom: 1px solid #d1d1d1;
  background-color: white;
  height: 20px;
  padding: 20px;
`;

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
  font-size: 1rem;
`;

export function Main() {
  const [isModal, setIsModal] = useState(Boolean);
  const [dayTitle, setDayTitle] = useState("");

  return (
    <>
      <MainDiv>
        <ContentDiv>
          <ContentTitle>퇴근합시당</ContentTitle>
          <RecordDiv>
            <Week
              title="월"
              hour={3}
              min={40}
              status={setIsModal}
              dayTitle={setDayTitle}
            />
            <Week
              title="화"
              hour={7}
              min={40}
              status={setIsModal}
              dayTitle={setDayTitle}
            />
            <Week
              title="수"
              hour={9}
              min={33}
              status={setIsModal}
              dayTitle={setDayTitle}
            />
            <Week
              title="목"
              hour={8}
              min={40}
              status={setIsModal}
              dayTitle={setDayTitle}
            />
            <Week
              title="금"
              hour={3}
              min={33}
              status={setIsModal}
              dayTitle={setDayTitle}
            />
          </RecordDiv>
          <CalculatedDiv>
            <WeekTime>
              <WeekTitleSpan>주간 근무 시간</WeekTitleSpan>
              <TimeSpan>시간</TimeSpan>
              <TimeInput type="text" placeholder="40" />
            </WeekTime>

            <CalculatedTime>
              <WeekTitleSpan>총 근무 시간</WeekTitleSpan>
              <TimeSpan>시간</TimeSpan>
              <ResultTime color="#60aa3e">38</ResultTime>
            </CalculatedTime>

            <CalculatedTime>
              <WeekTitleSpan>남은 시간</WeekTitleSpan>
              <TimeSpan>시간</TimeSpan>
              <ResultTime color="#ff6b6b">2</ResultTime>
            </CalculatedTime>
          </CalculatedDiv>

          <ResetBtn>시간 초기화</ResetBtn>
        </ContentDiv>
        {isModal && <RecordModal status={setIsModal} dayTitle={dayTitle} />}
      </MainDiv>
    </>
  );
}
