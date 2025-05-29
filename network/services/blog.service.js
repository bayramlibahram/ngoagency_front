import RequestHandler from "@/network/core/request-handler";

export default class BlogService extends RequestHandler {
  constructor() {
    super("posts/site");
  }
  getBlogs = async (props) => {
    return await this.get("list", props);
  };
  getBlog = async (props) => {
    return await this.get("one", props);
  };
}
