interface StudyCardInterface {
  name: string;
  startTime: string;
  endTime: string;
  mentor: string;
  attendance?: boolean;
  type: "정규스터디" | "자율스터디";
  lang: studyLangs[];
}

interface StudyCardContainerInterface {
  studyValue: StudyCardInterface[];
  attendance: boolean;
}

export enum studyLangs {
  C = "C",
  CPP = "C++",
  Java = "Java",
  Python = "Python",
  Javascript = "Javascript",
  React = "React",
}

export const langColorMap: Record<studyLangs, string> = {
  [studyLangs.C]: "blue",
  [studyLangs.CPP]: "green",
  [studyLangs.Java]: "orange",
  [studyLangs.Python]: "yellow",
  [studyLangs.Javascript]: "purple",
  [studyLangs.React]: "pink",
};

export type { StudyCardContainerInterface, StudyCardInterface };
