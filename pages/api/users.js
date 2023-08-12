const login = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ users: "users" });
};

export default login;
