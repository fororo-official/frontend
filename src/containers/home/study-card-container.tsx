import { StudyCardContainerInterface } from "@/app/types/study";
import StudyCard from "@/components/common/study-card";

function HomeStudyCardContainer({ studyValue }: StudyCardContainerInterface) {
  return (
    <div className="flex flex-col gap-2">
      {studyValue.map((val, idx) => (
        <StudyCard
          name={val.name}
          mentor={val.mentor}
          startTime={val.startTime}
          endTime={val.endTime}
          attendance={val.attendance}
          lang={val.lang}
          type={val.type}
          key={idx}
        />
      ))}
    </div>
  );
}

export default HomeStudyCardContainer;
