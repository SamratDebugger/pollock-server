import { client } from "../db/db.js";

const userCollection = client.db("pollock").collection("users");

export const createUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    const newUser = {
      username,
      email,
      role: "member",
      createdAt: new Date(),
    };

    await userCollection.insertOne(newUser);
    res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User Can't Be Created",
    });
  }
};
