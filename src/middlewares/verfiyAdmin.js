const verifyAdmin = async (req, res, next) => {
    const email = req.email.user;
    const query = { email: email }
    const result = await userCollection.findOne(query);
    if (result?.role !== "admin") {
        return res.status(403).send({ message: "forbidden" });
    }
    next();
}