"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StudyCardContainer from "@/containers/home/study-card-container";
import handleQueryAndToast from "@/hooks/handleQueryAndToast";
import useStudySearch from "@/hooks/search-study";
import Image from "next/image";
import ExampleStudyCards from "../../mockup/mockup";
const StudiesPage = () => {
  handleQueryAndToast();

  const StudyCards = ExampleStudyCards;
  const { searchInput, filteredStudyData, handlesearchInputChange } =
    useStudySearch({
      studyData: StudyCards,
    });

  return (
    <div className="pt-16 mb-8 min-h-full h-fit">
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-10/12 max-w-4xl">
          <div className="mt-2">
            <span className="font-bold text-3xl">스터디 목록</span>
          </div>
          <div className="mb-4">
            <span className="text-base text-gray-500">
              {StudyCards.studyValue.length}개의 스터디가 개설되어있습니다.
            </span>
          </div>
          <div className="relative flex flex-row mb-8 items-center justify-start">
            <Image
              src={"/icons/search_icon.svg"}
              width={16}
              height={16}
              alt="Search Icon"
              className="absolute ml-2"
            />
            <Input
              type="text"
              placeholder="스터디 이름 또는 언어로 검색해보세요!"
              onChange={(e) => handlesearchInputChange(e.target.value)}
              className="flex-grow pl-7"
            />
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
      </div>
      <Button className="fixed bottom-5 right-5">지원하기!</Button>
    </div>
  );
};

export default StudiesPage;
