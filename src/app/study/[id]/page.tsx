import { langColorMap, studyLangs } from "@/app/types/study";
import Summary from "@/components/pages/profile/summary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Text } from "@radix-ui/themes";
import Link from "next/link";
function Page({ params }: { params: { id: string } }) {
  const name = decodeURIComponent(params.id);
  return (
    <>
      <Summary name={"React + TypeScript 스터디"} info={"양병현"} />
      <div className="flex flex-row w-10/12 max-w-4xl gap-2 justify-start pt-2">
        <Badge className="mb-0.5">{"정규스터디"}</Badge>
        {[studyLangs.React, studyLangs.Javascript].map((val, idx) => (
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
      </div>
      <div className="w-10/12 max-w-4xl h-px bg-gray-200 mt-2 mb-4" />
      <div className="flex flex-col w-10/12 max-w-4xl py-2 gap-8">
        <div className="mb-2">
          <Text size="3" weight={"medium"} className="text-gray-900">
            대법원장의 임기는 6년으로 하며, 중임할 수 없다. 대한민국의 영토는
            한반도와 그 부속도서로 한다. 헌법재판소 재판관은 정당에 가입하거나
            정치에 관여할 수 없다. 군사법원의 조직·권한 및 재판관의 자격은
            법률로 정한다. 감사위원은 원장의 제청으로 대통령이 임명하고, 그
            임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.
          </Text>
        </div>
        <div className="flex flex-col">
          <Text size="6" weight="bold" className="text-gray-900">
            스터디 목표
          </Text>
          <Text size="3" weight={"medium"}>
            대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안
            당시의 대통령에 대하여는 효력이 없다. 모든 국민은 언론·출판의 자유와
            집회·결사의 자유를 가진다.
          </Text>
        </div>
        <div className="flex flex-col">
          <Text size="6" weight="bold" className="text-gray-900">
            스터디 시간
          </Text>
          <Text size="3" weight={"medium"}>
            매주 화요일 18:00 - 20:00
          </Text>
        </div>

        <Button>
          <Link href={"/apply"} className="w-full">
            지원하기
          </Link>
        </Button>
      </div>
    </>
  );
}

export default Page;
