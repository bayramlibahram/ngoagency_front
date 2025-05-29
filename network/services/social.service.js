import RequestHandler from "@/network/core/request-handler";

export default class SocialService extends RequestHandler {
  constructor() {
    super("socials/site");
  }
  getSocials = async (props) => {
    return this.get("list", props);
  };
}
