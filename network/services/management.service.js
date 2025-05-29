import RequestHandler from "@/network/core/request-handler";

export default class ManagementService extends RequestHandler {
  constructor() {
    super("managements/site");
  }
  getManagements = async (params) => {
    return await this.get("list", params);
  };
  getManagement = async (params) => {
    return await this.get("one", params);
  };
}
