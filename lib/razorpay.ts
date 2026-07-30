import Razorpay from "razorpay";

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

// Debug Logs
console.log("========== RAZORPAY CONFIG ==========");
console.log("KEY ID:", keyId ? "Loaded ✅" : "Missing ❌");
console.log("KEY SECRET:", keySecret ? "Loaded ✅" : "Missing ❌");
console.log("=====================================");

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: keyId || "",
  key_secret: keySecret || "",
});

export default razorpay;