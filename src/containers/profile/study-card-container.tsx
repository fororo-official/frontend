import StudyCard, { StudyCardType } from "@/components/common/study-card";

function StudyCardContainer({ showAttendance }: StudyCardType) {
  const studyList = [
    "React + Typescript 스터디",
    "C를 잘해야 A+이 가능합니다",
    "포리프 화이팅 스터디",
  ];
  return (
    <div className="flex flex-col gap-2">
      {studyList.map((studyname, idx) => (
        <StudyCard
          key={idx}
          showAttendance={showAttendance}
          studyName={studyname}
        />
      ))}
    </div>
  );
}

export default StudyCardContainer;
