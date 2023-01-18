import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String, required: true
  }
},
{
  timestamps: true
})

schema.plugin(mongooseDelete, { deletedAt: true })

export const UserModel = mongoose.model('User', schema)