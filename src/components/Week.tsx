import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { RecordModal } from "./RecordModal";

interface Props {
  title?: string;
  hour?: number;
  min?: number;
  status?: any;
}

const WeekList = styled.div`
  width: 84%;
  height: 52px;
  background-color: #f8f8f8;
  border: 1px solid #d1d1d1;
  display: inline-block;
  margin-right: 6.25px;
  margin-bottom: 7px;
`;

const Day = styled.span`
  width: 52px;
  height: 52px;
  display: inline-block;
  background-color: #6b8dff;
  font-size: 1rem;
  color: white;
  text-align: center;
  margin-top: 0px;
`;

const DayContent = styled.p`
  font-size: 1.2rem;
  margin-top: 15px;
`;

const TimeInput = styled.span`
  padding-left: 10px;
  font-size: 1.1rem;
`;

const ControlBtn = styled.span`
  cursor: pointer;
  width: 53px;
  height: 53px;
  background-color: #8072d7;
  display: inline-block;
  color: white;
  text-align: center;
`;

const ControlBtnContent = styled.p`
  font-size: 1.1rem;
`;

export const Week = ({ title, hour, min, status }: Props) => {
  const openModal = () => status((prev: boolean) => !prev);

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
      <ControlBtn>
        <ControlBtnContent onClick={openModal}>등록</ControlBtnContent>
      </ControlBtn>
    </>
  );
};
