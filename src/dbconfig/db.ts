import mongoose from 'mongoose';

export async function connecttodb() {
try {
mongoose.connect("mongodb+srv://21012003rs:xo46gGwuYsY2e812@cluster0.srzk2sy.mongodb.net/WALL-MART-FINAL?retryWrites=true&w=majority&appName=Cluster0");
const connection = mongoose.connection;

connection.on('connected', () => {
console.log('MongoDB connected successfully');
})

connection.on('error', (err) => {
console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
process.exit();
})

} catch (error) {
console.log('Something goes wrong!');
console.log(error);
}
}