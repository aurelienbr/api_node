import { Request, Response } from "express";
import { default as Education, EducationModel } from "../models/Educations";

/**
 * GET /
 * Home page.
 */
export let getEducations = (req: Request, res: Response) => {
  Education.find({}, (err, educations: EducationModel) => {
    if (err) res.send(err);
    res.json(educations);
  });
};

export let getEducation = (req: Request, res: Response) => {
  Education.find({ _id: req.params.id }, (err, education: EducationModel) => {
    if (err) res.send(err);
    res.json(education);
  });
};

export let createEducation = (req: Request, res: Response) => {
  const new_education = new Education({
    href: req.body.href,
    ecole: req.body.ecole,
    duree: req.body.duree,
    lieu: req.body.lieu,
    description: req.body.description,
    coord: {
      lat: req.body.lat,
      lng: req.body.lng
    }
  });
  new_education.save((err, coords: EducationModel) => {
    if (err) res.send(err);
    res.json(coords);
  });
};

export let deleteEducation = (req: Request, res: Response) => {
  Education.remove({ _id: req.params.id }, err => {
    if (err) res.send(err);
    res.json({ message: "succesfully deleted" });
  });
};
