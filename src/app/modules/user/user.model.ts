import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true, immutable: true },
  photoUrl: String,
  role: { type: String, required: true, enum: ['user', 'admin'] },
  userStatus: {
    type: String,
    required: true,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

// hook --> post
userSchema.post('find', function (docs, next) {
  docs.forEach((doc:IUser) => {
    doc.name = doc.name.toUpperCase();
  });
    next();
});

const User = model<IUser>('User', userSchema);

export default User;
