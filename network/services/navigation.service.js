import RequestHandler from "@/network/core/request-handler";

export default class NavigationService extends RequestHandler {
  constructor() {
    super("navigations/site");
  }
  getNavigations = async (params) => {
    return await this.get("list", params);
  };
}
