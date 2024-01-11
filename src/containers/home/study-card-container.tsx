import { StudyContainerInterface } from "@/app/types/study";
import StudyCard from "@/components/common/study-card";

function HomeStudyCardContainer({ studyValue }: StudyContainerInterface) {
  return (
    <div className="flex flex-col gap-2">
      {studyValue.map((val) => (
        <StudyCard
          sid={val.sid}
          name={val.name}
          mentor={val.mentor}
          startTime={val.startTime}
          endTime={val.endTime}
          attendance={val.attendance}
          lang={val.lang}
          type={val.type}
          key={val.sid}
        />
      ))}
    </div>
  );
}

export default HomeStudyCardContainer;
