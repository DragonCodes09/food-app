const mongoose = require("mongoose");

const mongodb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dragon_codes_2:Toothless_2@dragon-cluster.igxyh.mongodb.net/"
    );
    console.log("DB connected");
    const foodCollection = await mongoose.connection.db.collection("food");
    const data = await foodCollection.find({}).toArray();

    global.food_items = data;
    const categoryCollection = await mongoose.connection.db.collection(
      "category"
    );
    const catData = await categoryCollection.find({}).toArray();
    global.food_category = catData;
    // BNrX8BfQgnUBwLHw
  } catch (err) {
    console.log(err);
  }
};
module.exports = mongodb;
