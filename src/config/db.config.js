import mongoose from 'mongoose'
import dontenv from 'dotenv'
dontenv.config()

console.log('⏳ Conecting to DB')
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_URL, (err) => {
  if (err) {
    console.log('Error:', err)
  } else {
    console.log('✅ DB Connected')
  }
})