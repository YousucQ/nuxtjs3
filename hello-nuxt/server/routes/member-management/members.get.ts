import type { ReturnJSONMembers } from "~/state/interfaces";
import { createMemberList } from "~/membersDB";

export default defineEventHandler((event): ReturnJSONMembers => {
  const memberList = createMemberList();
  const memberListValues = memberList.values();
  const memberListArray = Array.from(memberListValues);
  return {
    result: 1,
    data: memberListArray,
  };
});
