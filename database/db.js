import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-7v5ixws-shard-00-00.xuoichd.mongodb.net:27017,ac-7v5ixws-shard-00-01.xuoichd.mongodb.net:27017,ac-7v5ixws-shard-00-02.xuoichd.mongodb.net:27017/?ssl=true&replicaSet=atlas-fkqpgu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}
export default Connection;