import {
  StudyCardContainerInterface,
  StudyCardInterface,
  studyLangs,
} from "../types/study";

const studyCard1: StudyCardInterface = {
  name: "React + Typescript 스터디",
  startTime: "16:00",
  endTime: "18:00",
  mentor: "김건재",
  type: "정규스터디",
  lang: [studyLangs.React, studyLangs.Javascript],
};
const studyCard2: StudyCardInterface = {
  name: "C를 잘해야 A+이 가능합니다",
  startTime: "13:00",
  endTime: "15:00",
  mentor: "김민진",
  type: "정규스터디",
  lang: [studyLangs.C],
};
const studyCard3: StudyCardInterface = {
  name: "파이썬은 위대한 언어이다",
  startTime: "14:00",
  endTime: "17:00",
  mentor: "양병현",
  type: "자율스터디",
  lang: [studyLangs.Python],
};
const studyCard4: StudyCardInterface = {
  name: "Java + Spring",
  startTime: "15:00",
  endTime: "19:00",
  mentor: "표준성",
  type: "자율스터디",
  lang: [studyLangs.Java],
};

const studyCard5: StudyCardInterface = {
  name: "자바를 잡아보자구",
  startTime: "15:00",
  endTime: "19:00",
  mentor: "송우정",
  type: "정규스터디",
  lang: [studyLangs.Java],
};

const ExampleStudyCards: StudyCardContainerInterface = {
  studyValue: [studyCard1, studyCard2, studyCard3, studyCard4, studyCard5],
  attendance: false,
};

export default ExampleStudyCards;
