import mongoose from "mongoose"
const salesSchema = new mongoose.Schema({
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: true
      },
      quantity: { type: String, require: true }
    }
  ]
})

export default mongoose.model("Sale", salesSchema)
