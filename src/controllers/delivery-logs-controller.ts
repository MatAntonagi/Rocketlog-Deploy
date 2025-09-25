import { Response, Request } from "express";

class DeliveryLogsController {
  async create(request: Request, response: Response) {
    return response.json({ message: "Create Delivery Logs" });
  }
}

export { DeliveryLogsController };
