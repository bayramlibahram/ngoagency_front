import RequestHandler from "@/network/core/request-handler";

export default class PartnerService extends RequestHandler {
  constructor() {
    super("partners/site");
  }
  getPartners = async (params) => {
    return await this.get("list", params);
  };
}
