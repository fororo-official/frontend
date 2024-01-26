import { Milestone } from "@/app/types/milestone";
import { GalleryImageType } from "@/components/common/gallery";
import {
  StudyContainerInterface,
  StudyInterface,
  studyLangs,
} from "../app/types/study";

const studyCard1: StudyInterface = {
  sid: 0,
  name: "React + Typescript 스터디",
  startTime: "16:00",
  endTime: "18:00",
  mentor: "김건재",
  type: "정규스터디",
  lang: [studyLangs.React, studyLangs.Javascript],
};
const studyCard2: StudyInterface = {
  sid: 1,
  name: "C를 잘해야 A+이 가능합니다",
  startTime: "13:00",
  endTime: "15:00",
  mentor: "김민진",
  type: "정규스터디",
  lang: [studyLangs.C],
};
const studyCard3: StudyInterface = {
  sid: 2,
  name: "파이썬은 위대한 언어이다",
  startTime: "14:00",
  endTime: "17:00",
  mentor: "양병현",
  type: "자율스터디",
  lang: [studyLangs.Python],
};
const studyCard4: StudyInterface = {
  sid: 3,
  name: "Java + Spring",
  startTime: "15:00",
  endTime: "19:00",
  mentor: "표준성",
  type: "자율스터디",
  lang: [studyLangs.Java],
};

const studyCard5: StudyInterface = {
  sid: 4,
  name: "자바를 잡아보자구",
  startTime: "15:00",
  endTime: "19:00",
  mentor: "송우정",
  type: "정규스터디",
  lang: [studyLangs.Java],
};

const ExampleStudyCards: StudyContainerInterface = {
  studyValue: [studyCard1, studyCard2, studyCard3, studyCard4, studyCard5],
  attendance: false,
};

const galleryImages: GalleryImageType[] = [
  {
    id: 0,
    imageURI: "hpec",
    name: "HPEC",
    description: "2023년 10월에 개최된 알고리즘 경진 대회",
    isHovered: false,
    isClick: false,
  },
  {
    id: 1,
    imageURI: "homecoming",
    name: "2023 홈커밍데이",
    description: "토스, 증권사 등에서 오신 선배들과의 즐거운 만남",
    isHovered: false,
    isClick: false,
  },
  {
    id: 2,
    imageURI: "hackathon",
    name: "해커톤",
    description: "포리프 활동의 결실, 한 학기의 마무리 해커톤",
    isHovered: false,
    isClick: false,
  },
  {
    id: 3,
    imageURI: "promotion",
    name: "동아리박람회",
    description: "FORIF 동아리박람회",
    isHovered: false,
    isClick: false,
  },
  {
    id: 4,
    imageURI: "graduation_poster",
    name: "졸업 현수막",
    description:
      "포리프 운영진(멘토) 활동 2학기 이상 시 졸업 현수막을 만들어드립니다! 황성우 선배님 사용 허락 감사드립니다",
    isHovered: false,
    isClick: false,
  },
];

const milestone: Milestone = {
  data: [
    {
      year: 2024,
      events: [
        {
          month: "01",
          details: [
            {
              event: "FORIF 웹사이트 오픈",
            },
          ],
        },
      ],
    },
    {
      year: 2023,
      events: [
        {
          month: "12",
          details: [
            {
              event: "제 8회 해커톤",
            },
          ],
        },
        {
          month: "11",
          details: [
            {
              event: "제 1회 홈커밍데이",
            },
          ],
        },
        {
          month: "09",
          details: [
            {
              event: "2023 HPEC 개최",
            },
            {
              event: "(Hanyang Programming Evaluation Contest)",
            },
          ],
        },
        {
          month: "08",
          details: [
            {
              event: "OOPARTS와 연합 스터디",
            },
          ],
        },

        {
          month: "05",
          details: [
            {
              event: "FORIF MT",
            },
          ],
        },
        {
          month: "04",
          details: [
            {
              event: "노션 특강",
            },
          ],
        },
      ],
    },
    {
      year: 2022,
      events: [
        {
          month: "12",
          details: [
            {
              event: "동아리방 리모델링",
            },
          ],
        },
      ],
    },
    {
      year: 2021,
      events: [
        {
          month: "06",
          details: [
            {
              event: "FORIF 중앙동아리 승격",
            },
          ],
        },
      ],
    },
    {
      year: 2015,
      events: [
        {
          month: "03",
          details: [
            {
              event: "FORIF 창립일",
            },
          ],
        },
      ],
    },
  ],
};

export { ExampleStudyCards, galleryImages, milestone };
