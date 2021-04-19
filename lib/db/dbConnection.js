import config from "config";
import mongoose from "mongoose";

const dbUri = config.get("database.uri");

mongoose.connect(dbUri, {
  dbName: config.get("database.dbName"),
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Get the default connection
const { connection } = mongoose;

// Bind connection to error event (to get notification of connection errors)
connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

connection.on(
  "connected",
  console.log.bind("Connection established successfully!")
);

export default connection;
