import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
  AccountId: String,
});

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  login: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountToken: {
    type: String,
  },
  accountRefreshToken: {
    type: String,
  },
  accounts: [
    {
      accountId: {
        type: String,
      },
    },
  ],
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const userModels = mongoose.model("user", userSchema);

export { userModels };
