import { client } from "../db/db.js";

const userCollection = client.db("pollock").collection("users");

export const createUser = async (req, res) => {
  const { username, email } = req.body;
  console.log(username, email);
};
