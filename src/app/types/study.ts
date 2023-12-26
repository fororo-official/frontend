interface StudyCardInterface {
  name: string;
  startTime: string;
  endTime: string;
  mentor: string;
  attendance: boolean;
}

interface StudyCardContainerInterface {
  studyValue: StudyCardInterface[];
}

export type { StudyCardContainerInterface, StudyCardInterface };
