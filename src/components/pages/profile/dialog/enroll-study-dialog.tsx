import { Button } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import "./dialog.css";
import { MockUpSignUpData } from "./mockup";
export type SignUpDialogType = {
  name: string;
  studentId: number;
  major: HYU_DEPARTMENTS[keyof HYU_DEPARTMENTS][number];
};

function EnrollStudyDialog() {
  const numberOfApplicant = 32;
  const ExampleData = MockUpSignUpData;
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="w-32">스터디 등록</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">스터디 등록</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            현재 {numberOfApplicant}명이 지원했어요.
          </Dialog.Description>
          <Dialog.Content>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>이름</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>학번</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>학과</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {ExampleData.map((val) => (
                  <Table.Row>
                    <Table.RowHeaderCell>{val.name}</Table.RowHeaderCell>
                    <Table.Cell>{val.studentId}</Table.Cell>
                    <Table.Cell>{val.major}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Dialog.Content>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <Dialog.Close asChild>
              <Button variant={"outline"}>선택 승낙</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button variant={"default"}>모두 승낙</Button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default EnrollStudyDialog;
