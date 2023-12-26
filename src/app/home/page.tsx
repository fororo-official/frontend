"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StudyCardContainer from "@/containers/profile/study-card-container";
import useStudySearch from "@/hooks/search-study";
import ExampleStudyCards from "./mockup";

function HomePage() {
  const StudyCards = ExampleStudyCards;
  const { searchInput, filteredStudyData, handlesearchInputChange } =
    useStudySearch({
      studyData: StudyCards,
    });
  console.log(searchInput, filteredStudyData);

  return (
    <>
      <div className="flex flex-col w-10/12 max-w-4xl">
        <div className="mt-2">
          <span className="font-bold text-3xl">스터디 목록</span>
        </div>
        <div className="mb-4">
          <span className="text-base text-gray-500">
            {StudyCards.studyValue.length}개의 스터디가 개설되어있습니다.
          </span>
        </div>
        <div className="flex flex-row gap-2 mb-8">
          <Input
            type="text"
            placeholder="스터디 이름 또는 언어로 검색해보세요!"
            onChange={(e) => handlesearchInputChange(e.target.value)}
          />
          <Button>나이스</Button>
        </div>
        {searchInput && filteredStudyData.length === 0 ? (
          <h1 className="text-base font-bold">
            검색결과와 일치하는 스터디가 존재하지 않습니다.
          </h1>
        ) : (
          <StudyCardContainer
            studyValue={filteredStudyData}
            attendance={false}
          />
        )}
      </div>
    </>
  );
}

export default HomePage;
