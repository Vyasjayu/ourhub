import Razorpay from "razorpay";

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

// Debug Logs
console.log("========== RAZORPAY CONFIG ==========");
console.log("KEY ID:", keyId ? "Loaded ✅" : "Missing ❌");
console.log("KEY SECRET:", keySecret ? "Loaded ✅" : "Missing ❌");
console.log("=====================================");

if (!keyId) {
  throw new Error("RAZORPAY_KEY_ID is missing in .env.local");
}

if (!keySecret) {
  throw new Error("RAZORPAY_KEY_SECRET is missing in .env.local");
}

const razorpay = new Razorpay({
  key_id: keyId,
  key_secret: keySecret,
});

export default razorpay;