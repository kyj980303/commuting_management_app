import { useEffect, useState } from "react";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";

const ModalDiv = styled.div`
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

const SelectBox = styled.select`
  width: 20.1%;
  height: 40px;
  border: 1px solid #d1d1d1;
  background-color: #f7f8fc;
  border-radius: 5px;
  font-size: 1rem;
  margin-right: 2%;
  padding-left: 1%;
`;

const InputTime = styled.input`
  width: 20.1%;
  height: 36px;
  border: 1px solid #d1d1d1;
  background-color: #f7f8fc;
  border-radius: 5px;
  font-size: 1rem;
  padding-left: 2%;
  &:first-of-type {
    margin-right: 2%;
  }
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

interface Props {
  bgcolor?: string;
  status?: any;
  dayTitle?: string;
}

export const RecordModal = ({ status, dayTitle }: Props) => {
  const { addToast } = useToasts();
  const [selectedOption, setSelectedOption] = useState("근무상태");
  const [startState, setStartState] = useState("오전");
  const [startHour, setStartHour] = useState("9");
  const [startMin, setStartMin] = useState("30");
  const [endState, setEndState] = useState("오후");
  const [endHour, setEndHour] = useState("6");
  const [endMin, setEndMin] = useState("30");
  const [stateNum, setStateNum] = useState(0);

  useEffect(() => {
    if (selectedOption === "휴가") {
      setStateNum(-8);
    } else if (selectedOption === "반차") {
      setStateNum(-4);
    } else if (selectedOption === "반반차") {
      setStateNum(-2);
    } else {
      setStateNum(0);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (Number(startHour) > 12 && Number(startHour) < 24) {
      let start = (Number(startHour) - 12).toString();
      setStartHour(start);
    }

    if (Number(endHour) > 12 && Number(endHour) < 24) {
      let end = (Number(endHour) - 12).toString();
      setEndHour(end);
    }

    if (startState === "오전" && Number(startHour) >= 12) {
      addToast("오전은 11시 59분까지 가능", { appearance: "warning" });
    } else if (startState === "오후" && Number(startHour) > 23) {
      addToast("오후는 23시 59분까지 가능", { appearance: "warning" });
    } else if (Number(startHour) < 0) {
      addToast("시간이 음수가 될 수 없잖아!", { appearance: "warning" });
    }

    if (endState === "오전" && Number(endHour) >= 12) {
      addToast("오전은 11시 59분까지 가능", { appearance: "warning" });
    } else if (endState === "오후" && Number(endHour) > 23) {
      addToast("오후는 23시 59분까지 가능", { appearance: "warning" });
    } else if (Number(endHour) < 0) {
      addToast("시간이 음수가 될 수 없잖아!", { appearance: "warning" });
    }
  }, [endHour, startHour]);

  const handleSelect = (e: any) => {
    setSelectedOption(e.currentTarget.value);
  };

  const closeModal = () => {
    status((prev: boolean) => !prev);
  };

  const handleStartState = (e: any) => {
    setStartState(e.currentTarget.value);
  };

  const handleStartHour = (e: any) => {
    setStartHour(e.currentTarget.value);
  };

  const handleStartMin = (e: any) => {
    setStartMin(e.currentTarget.value);
  };

  const handleEndState = (e: any) => {
    setEndState(e.currentTarget.value);
  };

  const handleEndHour = (e: any) => {
    setEndHour(e.currentTarget.value);
  };

  const handleEndMin = (e: any) => {
    setEndMin(e.currentTarget.value);
  };

  const insertRecord = () => {
    const data = [
      {
        startState,
        startHour,
        startMin,
      },
      {
        endState,
        endHour,
        endMin,
      },
      stateNum,
    ];

    if (dayTitle !== undefined) {
      localStorage.setItem(dayTitle, JSON.stringify(data));
    }

    closeModal();

    console.log("dataaaa", data);
    console.log(
      "시작시간",
      startState,
      startHour,
      startMin,
      "끝나는시간",
      endState,
      endHour,
      endMin,
      stateNum
    );
  };

  return (
    <>
      <ModalDiv>
        <ContentDiv>
          <ContentTitleDiv>
            <TitleP>출퇴근 시간 등록</TitleP>
          </ContentTitleDiv>
          <RecordDiv>
            <RecordTime>
              <TitleBox bgcolor="#6aaf4a">출근 시간</TitleBox>
              <SelectBox onChange={handleStartState} value={startState}>
                <Option>오전</Option>
                <Option>오후</Option>
              </SelectBox>
              <InputTime
                type="text"
                placeholder={startHour + "시"}
                onChange={handleStartHour}
              ></InputTime>
              <InputTime
                type="text"
                placeholder={startMin + "분"}
                onChange={handleStartMin}
              ></InputTime>
            </RecordTime>
            <RecordTime>
              <TitleBox bgcolor="#FF6B6B">퇴근 시간</TitleBox>
              <SelectBox onChange={handleEndState} value={endState}>
                <Option>오전</Option>
                <Option>오후</Option>
              </SelectBox>
              <InputTime
                type="text"
                placeholder={endHour + "시"}
                onChange={handleEndHour}
              ></InputTime>
              <InputTime
                type="text"
                placeholder={endMin + "분"}
                onChange={handleEndMin}
              ></InputTime>
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
              <RegisterBtn onClick={insertRecord}>등록 확인</RegisterBtn>
            </ButtonDiv>
          </RecordDiv>
        </ContentDiv>
      </ModalDiv>
    </>
  );
};
