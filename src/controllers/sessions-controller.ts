import { Request, Response } from "express";

class SessionsController {
  create(request: Request, reponse: Response){
    return reponse.json({ message: "ok" })
  }
}

export { SessionsController }