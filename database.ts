import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

export async function connect() {
   
const connectionString = 'mongodb://localhost:27017/music-api';

mongoose.connect(connectionString, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to MongoDB: ${connectionString}`);
});

}
  