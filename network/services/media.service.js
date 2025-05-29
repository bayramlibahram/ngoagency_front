import RequestHandler from "@/network/core/request-handler";

export default class MediaService extends RequestHandler {
  constructor() {
    super("medias/site");
  }

  getMediaList = async (params) => {
    return await this.get("list", params);
  };
}
