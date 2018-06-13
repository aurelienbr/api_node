import mongoose from "mongoose";

export type InternshipModel = mongoose.Document & {
  href: string,
  titre: string,
  company: string,
  duree: string,
  lieu: string,
  description: string,
  coord: {
    lat: number,
    lng: number
  }
};

const internshipController = new mongoose.Schema({
  href: String,
  titre: String,
  company: String,
  duree: String,
  lieu: String,
  description: String,
  coord: {
    lat: Number,
    lng: Number
  }
});


// export const User: UserType = mongoose.model<UserType>('User', userSchema);
const Internship = mongoose.model("Internships", internshipController);
export default Internship;
