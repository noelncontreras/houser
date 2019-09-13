

module.exports = {
    getAllHouses: async (req, res) => {
        const allHouses = await req.app.get("db").get_All_Houses();
        return res.status(200).send(allHouses)
    }
};