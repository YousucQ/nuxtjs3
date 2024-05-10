import type { Member } from "@/state/interfaces";
import { createMemberList } from "~/membersDB";

export default defineEventHandler((event): Member[] => {
  const memberList = createMemberList();
  const memberListValues = memberList.values();
  const memberListArray = Array.from(memberListValues);
  return memberListArray;
});
