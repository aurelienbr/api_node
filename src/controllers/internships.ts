import { Request, Response } from "express";
import { default as Internship, InternshipModel } from "../models/Internships";

/**
 * GET /
 * Home page.
 */
export let getInternships = (req: Request, res: Response) => {
  Internship.find({}, (err, coords: InternshipModel) => {
    if (err) res.send(err);
    res.json(coords);
  });
};

export let getInternship = (req: Request, res: Response) => {
  Internship.find({ _id: req.params.id }, (err, coord: InternshipModel) => {
    if (err) res.send(err);
    res.json(coord);
  });
};

export let createInternship = (req: Request, res: Response) => {
  const new_internship = new Internship({
    href: req.body.href,
    titre: req.body.titre,
    company: req.body.company,
    duree: req.body.duree,
    lieu: req.body.lieu,
    description: req.body.description,
    coord: {
      lat: req.body.lat,
      lng: req.body.lng
    }
  });
  new_internship.save((err, coords: InternshipModel) => {
    if (err) res.send(err);
    res.json(coords);
  });
};

export let deleteInternship = (req: Request, res: Response) => {
  Internship.remove({ _id: req.params.id }, err => {
    if (err) res.send(err);
    res.json({ message: "succesfully deleted" });
  });
};
