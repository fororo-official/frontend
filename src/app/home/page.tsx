import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StudyCardContainer from "@/containers/profile/study-card-container";

function HomePage() {
  const numberOfStudies = 3;
  return (
    <>
      <div className="flex flex-col w-10/12 max-w-4xl">
        <div className="mt-2">
          <span className="font-bold text-3xl">스터디 목록</span>
        </div>
        <div className="mb-4">
          <span className="text-base text-gray-500">
            {numberOfStudies}개의 스터디가 개설되어있습니다.
          </span>
        </div>
        <div className="flex flex-row gap-2 mb-8">
          <Input />
          <Button>나이스</Button>
        </div>
        <StudyCardContainer showAttendance={false} />
      </div>
    </>
  );
}

export default HomePage;
