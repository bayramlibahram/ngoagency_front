import RequestHandler from "@/network/core/request-handler";

export default class Page extends RequestHandler {
  constructor() {
    super("pages/site");
  }
  getPage = async (props) => {
    return await this.get("one", props);
  };
}
