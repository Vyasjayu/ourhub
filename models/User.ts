import mongoose, { Schema, models } from "mongoose";


const UserSchema = new Schema(

{
    name: {
        type: String,
        default: "",
    },


    phone: {
        type: String,
        required: true,
        unique: true,
    },


    email: {
        type: String,
        default: "",
    },


    // Wallet Balance
    walletBalance: {
        type: Number,
        default: 0,
    },


    // Payment History
    transactions: [
        {
            orderId: {
                type: String,
            },


            paymentId: {
                type: String,
            },


            amount: {
                type: Number,
            },


            status: {
                type: String,
                default: "success",
            },


            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],


},


{
    timestamps: true,
}

);



const User =
    models.User ||
    mongoose.model("User", UserSchema);



export default User;