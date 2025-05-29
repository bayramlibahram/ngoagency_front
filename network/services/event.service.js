import RequestHandler from "@/network/core/request-handler";

export default class EventService extends RequestHandler {
  constructor() {
    super("events/site");
  }

  getEvents = async (params) => {
    return await this.get("list", params);
  };
  getEventsByCategory = async (params) => {
    return await this.get("category/list", params);
  };
}
