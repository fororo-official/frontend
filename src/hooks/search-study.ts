"use client";
import {
  StudyCardContainerInterface,
  StudyCardInterface,
} from "@/app/types/study";
import { useEffect, useState } from "react";

interface UseStudySearchProps {
  studyData: StudyCardContainerInterface;
}

const useStudySearch = ({ studyData }: UseStudySearchProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredStudyData, setFilteredStudyData] = useState<
    StudyCardInterface[]
  >([]);

  useEffect(() => {
    // Function to filter studyData based on study name
    const filterStudyData = () => {
      const filteredData = studyData.studyValue.filter(
        (study) =>
          study.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          study.lang.some((lang) =>
            lang.toLowerCase().includes(searchInput.toLowerCase())
          )
      );
      setFilteredStudyData(filteredData);
    };

    // Call the filterStudyData function when searchInput or studyData changes
    filterStudyData();
  }, [searchInput, studyData]);

  // Function to update the search input
  const handlesearchInputChange = (input: string) => {
    setSearchInput(input);
  };

  // Return the filtered study data and the function to update the search input
  return { searchInput, filteredStudyData, handlesearchInputChange };
};

export default useStudySearch;
