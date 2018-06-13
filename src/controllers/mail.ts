import { Request, Response } from "express";
import mailgun from "../config/mailgun";

const mail = (req: Request, res: Response) => {
  const data = {
    from: req.body.email,
    to: "aurelienbrachet123@gmail.com",
    subject: req.body.subject,
    text: req.body.text
  };
  mailgun.messages().send(data, (error: any) => {
    if (error) {
      res.status(404).json({ message: error });
    } else {
      res.json({ message: "email sent" });
    }
  });
};

export default mail;
