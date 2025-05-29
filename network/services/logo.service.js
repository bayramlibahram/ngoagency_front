import RequestHandler from "@/network/core/request-handler";

export default class LogoService extends RequestHandler {
  constructor() {
    super("logos/site");
  }
  getLogo = async (params) => {
    return await this.get("one", params);
  };
}
