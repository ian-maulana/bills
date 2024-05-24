import mongoose, { Schema, Document } from 'mongoose';

export enum Gender {
  male = 'male',
  female = 'famale',
}

export enum Role {
  admin = 'admin',
  viewer = 'viewer',
}

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  role: Role;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add first name'],
  },
  email: {
    type: String,
    required: [true, 'Please add email'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Please add phone'],
    unique: true,
  },
  gender: {
    type: String,
    enum: Object.values(Gender),
  },
  role: {
    type: String,
    enum: Object.values(Role),
    default: 'admin',
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IUser>('User', UserSchema);
