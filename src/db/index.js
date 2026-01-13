import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGO DB CONNECTION SUCCESS")
    }
    catch (error) {
        console.log("MONGO DB CONNECTION ERROR")
        process.exit(1)
    }
}

export default connectDB