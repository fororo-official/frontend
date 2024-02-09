import { StudyContainerInterface } from "@/app/types/study";
import StudyCard from "@/components/common/study-card";

function StudyCardContainer({
  studyValue,
  attendance,
}: StudyContainerInterface) {
  return (
    <div className="flex flex-col gap-2">
      {studyValue.map((val, idx) => (
        <StudyCard
          sid={val.sid}
          name={val.name}
          mentor={val.mentor}
          startTime={val.startTime}
          endTime={val.endTime}
          imageUrl={val.imageUrl}
          attendance={attendance}
          type={val.type}
          lang={val.lang}
          key={idx}
        />
      ))}
    </div>
  );
}

export default StudyCardContainer;
