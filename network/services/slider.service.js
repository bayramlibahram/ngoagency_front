import RequestHandler from "@/network/core/request-handler";
export default class SliderService extends RequestHandler {
  constructor() {
    super("sliders/site");
  }
  getSliders = async (props) => {
    return await this.get("list", props);
  };
}
