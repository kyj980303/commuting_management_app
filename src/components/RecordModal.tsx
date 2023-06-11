import { useState } from "react";
import styled from "styled-components";
import TimePicker from "react-time-picker";

interface Props {
  bgcolor: string;
}

const ModalDiv = styled.div`
  /* width: 100%;
  height: 100vh;
  background-color: #c7c7c742; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #0000007f;
  overflow-y: hidden;
`;

const ContentDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 30%;
  width: 37%;
  height: auto;
  box-sizing: border-box;
  background: #ffffff;
  border: 2px solid #e9e9eb;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  margin: 0 auto;
  padding: 25px;
`;

const ContentTitleDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid #b1b1b1;
`;

const TitleP = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const RecordDiv = styled.div`
  width: 80%;
  height: auto;
  margin: 40px auto;
  margin-bottom: 20px;
`;

const RecordTime = styled.div`
  margin-bottom: 10px;
  .react-time-picker__inputGroup__leadingZero {
    display: none;
  }
  .timepicker {
    select {
      width: 20% !important;
      height: 40px;
      border: 1px solid #d1d1d1;
      background-color: #f7f8fc;
      border-radius: 5px;
      padding-left: 3px;
      font-size: 1rem;
    }
    input {
      width: 20% !important;
      height: 36px;
      border: 1px solid #d1d1d1;
      background-color: #f7f8fc;
      border-radius: 5px;
      padding-left: 6px;
      font-size: 1rem;
      margin-right: 5px;
      margin-left: 5px;
    }
  }
`;

const TitleBox = styled.div<Props>`
  float: left;
  width: 25%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  border-radius: 5px;
  background-color: ${(props) => props.bgcolor};
  margin-right: 10px;
`;

const WorkStatus = styled.div`
  width: 100%;
  height: auto;
`;
const StatusSelectBox = styled.select`
  width: 98.5%;
  height: 40px;
  background-color: #69b9f2;
  border: none;
  border-radius: 5px;
  color: #fff;
  margin-bottom: 20px;
  font-size: 1rem;
  padding-left: 2%;
  cursor: pointer;
`;

const Option = styled.option`
  color: #fff;
  font-size: 1.2rem;
`;

const ButtonDiv = styled.div`
  width: 100%;
  height: auto;
`;

const CancelBtn = styled.button`
  width: 48.4%;
  height: 40px;
  background-color: #b8b8b8;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 1rem;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    background-color: #9e9e9e;
  }
`;

const RegisterBtn = styled.button`
  width: 48.4%;
  height: 40px;
  background-color: #4f78ff;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    background-color: #4667d3;
  }
`;

const stateOption = [
  { key: 1, value: "근무상태" },
  { key: 2, value: "선택안함" },
  { key: 3, value: "반차" },
  { key: 4, value: "반반차" },
  { key: 5, value: "휴가" },
];

export const RecodeModal = () => {
  const [startTime, setStartTime] = useState<string | null>("09:00");
  const [endTime, setEndTime] = useState<string | null>("18:00");
  const [selectedOption, setSelectedOption] = useState("");
  const [isModal, setIsModal] = useState(true);

  const handleStartTime = (time: string | null) => {
    setStartTime(time);
  };

  const handleEndTime = (time: string | null) => {
    setEndTime(time);
  };

  const handleSelect = (e: any) => {
    setSelectedOption(e.currentTarget.value);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  console.log("option", selectedOption);

  return (
    <>
      {isModal ? (
        <ModalDiv>
          <ContentDiv>
            <ContentTitleDiv>
              <TitleP>출퇴근 시간 등록</TitleP>
            </ContentTitleDiv>
            <RecordDiv>
              <RecordTime>
                <TitleBox bgcolor="#6aaf4a">출근 시간</TitleBox>
                <TimePicker
                  onChange={handleStartTime}
                  value={startTime}
                  clearIcon={null}
                  disableClock={true}
                  className="timepicker"
                />
              </RecordTime>
              <RecordTime>
                <TitleBox bgcolor="#FF6B6B">퇴근 시간</TitleBox>
                <TimePicker
                  onChange={handleEndTime}
                  value={endTime}
                  clearIcon={null}
                  disableClock={true}
                  className="timepicker"
                />
              </RecordTime>
              <WorkStatus>
                <StatusSelectBox onChange={handleSelect} value={selectedOption}>
                  {stateOption.map((item, index) => (
                    <Option key={item.key} value={item.value}>
                      {item.value}
                    </Option>
                  ))}
                </StatusSelectBox>
              </WorkStatus>
              <ButtonDiv>
                <CancelBtn onClick={closeModal}>등록 취소</CancelBtn>
                <RegisterBtn>등록 확인</RegisterBtn>
              </ButtonDiv>
            </RecordDiv>
          </ContentDiv>
        </ModalDiv>
      ) : (
        <></>
      )}
    </>
  );
};
