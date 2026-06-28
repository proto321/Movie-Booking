
import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dbUsermovie:moviepass123@cluster0.bdxglmd.mongodb.net/?appName=Cluster0')
        .then(() => console.log('DB CONNECTED'))
}



// # dbUsermovie
// # moviepass123
// # mongodb+srv://dbUsermovie:<db_password>@cluster0.bdxglmd.mongodb.net/?appName=Cluster0

// Allow acces anywhere in database & network>Access List>
// edit> allow acess from anywhere i.e, Access List Entry: 0.0.0.0/0