import { AsyncHandler } from "../utils/AysncHandler";

const createUser = AsyncHandler(async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

export default createUser