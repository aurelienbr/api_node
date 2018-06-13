import { Request, Response } from "express";
import { default as Coord, CoordModel } from "../models/Coords";

/**
 * GET /
 * Home page.
 */
export let getCoords = (req: Request, res: Response) => {
  Coord.find({}, (err, coords: CoordModel) => {
    if (err) res.send(err);
    res.json(coords);
  });
};

export let getCoord = (req: Request, res: Response) => {
  Coord.find({ _id: req.params.id }, (err, coord: CoordModel) => {
    if (err) res.send(err);
    res.json(coord);
  });
};

export let createCoord = (req: Request, res: Response) => {
  const new_coord = new Coord({
    lat: req.body.lat,
    lng: req.body.lng,
    city: req.body.city
  });
  new_coord.save((err, coords: CoordModel) => {
    if (err) res.send(err);
    res.json(coords);
  });
};

export let deleteCoord = (req: Request, res: Response) => {
  Coord.remove({ _id: req.params.id }, err => {
    if (err) res.send(err);
    res.json({ message: "succesfully deleted" });
  });
};
