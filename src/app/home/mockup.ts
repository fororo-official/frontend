import {
  StudyCardContainerInterface,
  StudyCardInterface,
} from "../types/study";

const studyCard1: StudyCardInterface = {
  name: "React + Typescript 스터디",
  startTime: "16:00",
  endTime: "18:00",
  mentor: "김건재",
  attendance: false,
};
const studyCard2: StudyCardInterface = {
  name: "C를 잘해야 A+이 가능합니다",
  startTime: "13:00",
  endTime: "15:00",
  mentor: "김민진",
  attendance: false,
};
const studyCard3: StudyCardInterface = {
  name: "포리프 화이팅 스터디",
  startTime: "14:00",
  endTime: "17:00",
  mentor: "양병현",
  attendance: false,
};
const studyCard4: StudyCardInterface = {
  name: "Java + Spring",
  startTime: "15:00",
  endTime: "19:00",
  mentor: "표준성",
  attendance: false,
};

const ExampleStudyCards: StudyCardContainerInterface = {
  studyValue: [studyCard1, studyCard2, studyCard3, studyCard4],
};

export default ExampleStudyCards;
