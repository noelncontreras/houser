

module.exports = {
    getAllHouses: async (req, res) => {
        const allHouses = await req.app.get("db").get_All_Houses();
        return res.status(200).send(allHouses)
    },
    addNewHouse: async (req, res) => {
        const {name, address, city, state, zip} = req.body;
        const db = req.app.get("db");

        await db.add_New_House(name, address, city, state, zip);
        res.sendStatus(200);
    },
    deleteHouse: async (req, res) => {
        const {user_id} = req.params;
        const db = req.app.get("db");

        db.delete_House(user_id)
        .then(() => res.sendStatus(200))
    }
};