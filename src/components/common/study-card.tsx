import { Badge } from "@/components/ui/badge";
import { Text } from "@radix-ui/themes";

export type StudyCardType = {
  showAttendance: boolean;
  studyName?: string;
};

function StudyCard({ showAttendance, studyName }: StudyCardType) {
  return (
    <div className="flex justify-start bg-white border border-gray-200 rounded-lg active:bg-gray-50 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1634618948828-aa7b3d0724fd?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-32 h-32 object-cover max-md:hidden"
        alt="study"
      />
      .
      <div className="flex flex-1">
        <div className="flex-1 flex flex-col justify-start items-start p-4">
          <Badge className="mb-0.5">정규스터디</Badge>
          <Text size="3" className="text-gray-900 font-semibold">
            {studyName}
          </Text>
          <Text size="2" className="text-gray-400">
            매주 화요일 16 : 00 ~ 18 : 00
          </Text>
          <Text size="2" className="text-gray-400">
            김건재 멘토
          </Text>
        </div>
        {/* 출석률 표시 ex) 80%*/}
        {showAttendance && (
          <div className="flex items-end p-4">
            <div className="flex flex-col justify-center items-center w-16 h-16 rounded-sm bg-gray-100">
              <Text size="2" className="text-gray-400">
                출석률
              </Text>
              <Text size="4" className="text-gray-900 font-semibold">
                80%
              </Text>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudyCard;
