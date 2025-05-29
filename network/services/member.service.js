import RequestHandler from "@/network/core/request-handler";

export default class MemberService extends RequestHandler {
  constructor() {
    super("members/site");
  }
  getMembers = async (params) => {
    return await this.get("list", params);
  };
}
