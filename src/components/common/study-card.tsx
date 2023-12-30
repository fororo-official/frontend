import { StudyCardInterface, langColorMap } from "@/app/types/study";
import { Badge } from "@/components/ui/badge";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

function StudyCard({
  name,
  mentor,
  attendance,
  lang,
  endTime,
  startTime,
  type,
}: StudyCardInterface) {
  return (
    <div className="flex justify-start bg-white border border-gray-200 rounded-lg active:bg-gray-50 overflow-hidden">
      <Image
        src="/study/basic-study-cover.avif"
        className="w-32 h-32 object-cover max-md:hidden"
        alt="study"
        width="128"
        height="128"
        priority
      />
      <div className="flex flex-1">
        <div className="flex-1 flex flex-col justify-start items-start p-4">
          <Flex gap="2">
            <Badge className="mb-0.5">{type}</Badge>
            {lang.map((val, idx) => (
              <Badge
                className={`mb-0.5 bg-${langColorMap[
                  val
                ].toLowerCase()}-500 hover:bg-${langColorMap[
                  val
                ].toLowerCase()}-400`}
                key={idx}
              >
                {val}
              </Badge>
            ))}
          </Flex>
          <Text size="3" className="text-gray-900 font-semibold">
            {name}
          </Text>
          <Text size="2" className="text-gray-400">
            매주 화요일 {startTime} ~ {endTime}
          </Text>
          <Text size="2" className="text-gray-400">
            {mentor} 멘토
          </Text>
        </div>
        {/* 출석률 표시 ex) 80%*/}
        {attendance && (
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
