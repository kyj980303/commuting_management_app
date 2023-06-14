import { styled } from "styled-components";

interface Props {
  title?: string;
  hour?: number;
  min?: number;
  status?: any;
  dayTitle?: any;
  btnTitle?: any;
}

const WeekList = styled.div`
  width: 84%;
  height: 52px;
  background-color: #f8f8f8;
  border: 1px solid #d1d1d1;
  display: inline-block;
  margin-right: 6.25px;
  margin-bottom: 7px;
  border-radius: 5px;
`;

const Day = styled.span`
  width: 52px;
  height: 52px;
  display: inline-block;
  background-color: #6b8dff;
  font-size: 1rem;
  color: white;
  text-align: center;
  border-radius: 5px 0px 0px 5px;
`;

const DayContent = styled.p`
  font-size: 1.2rem;
  margin-top: 15px;
`;

const TimeInput = styled.span`
  padding-left: 10px;
  font-size: 1.1rem;
`;

const ControlBtn = styled.button`
  cursor: pointer;
  width: 55px;
  height: 55px;
  background-color: #6aaf4a;
  display: inline-block;
  color: white;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  position: relative;
  top: -2px;
  &:hover {
    background-color: #5b9440;
    transition: all 0.3s;
  }
`;

export const Week = ({
  title,
  hour,
  min,
  status,
  dayTitle,
  btnTitle,
}: Props) => {
  const openModal = () => {
    status((prev: boolean) => !prev);
    dayTitle(title);
  };

  console.log("버튼 명 week: ", btnTitle);
  return (
    <>
      <WeekList>
        <Day>
          <DayContent>{title}</DayContent>
        </Day>
        <TimeInput>
          {hour}시간 {min}분
        </TimeInput>
      </WeekList>
      <ControlBtn onClick={openModal}>등록</ControlBtn>
    </>
  );
};
