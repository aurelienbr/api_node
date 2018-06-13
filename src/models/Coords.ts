import mongoose from "mongoose";

export type CoordModel = mongoose.Document & {
  lat: number,
  lng: number,
  city: string
};

const coordController = new mongoose.Schema({
  lat: Number,
  lng: Number,
  city: String
});


// export const User: UserType = mongoose.model<UserType>('User', userSchema);
const Coord = mongoose.model("Coords", coordController);
export default Coord;
