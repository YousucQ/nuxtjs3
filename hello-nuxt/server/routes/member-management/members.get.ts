import type { Member, ReturnJSONMembers } from "~/state/interfaces";
// import { createMemberList } from "~/membersDB";

export default defineEventHandler(async (event): Promise<ReturnJSONMembers> => {
  let memberList = new Map<number, Member>();
  const storage = useStorage();
  const memberListStorage = await storage.getItem(
    "local:member-management_members"
  );
  if (memberListStorage !== undefined) {
    console.log("STORAGE = ", memberListStorage);
    memberList = new Map<number, Member>(memberListStorage as any);
    console.log("MAP = ", memberList);
  }
  // const memberList = createMemberList();
  const memberListValues = memberList.values();
  const memberListArray = Array.from(memberListValues);
  return {
    result: 1,
    data: memberListArray,
  };
});
