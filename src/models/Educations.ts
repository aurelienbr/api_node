import mongoose from "mongoose";

export type EducationModel = mongoose.Document & {
  href: string,
  ecole: string,
  duree: string,
  lieu: string,
  description: string,
  coord: {
    lat: number,
    lng: number
  }
};

const EducationModel = new mongoose.Schema({
  href: String,
  ecole: String,
  duree: String,
  lieu: String,
  description: String,
  coord: {
    lat: Number,
    lng: Number
  }
});


// export const User: UserType = mongoose.model<UserType>('User', userSchema);
const Education = mongoose.model("Educations", EducationModel);
export default Education;
