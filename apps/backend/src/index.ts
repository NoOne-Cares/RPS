import app from './server'
import ConnetDB from './db'

ConnetDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log("UP AND RUNNING ON PORT :" + process.env.PORT)
        })
    })
    .catch((err) => {
        console.log("fail to connect db :" + err)
    })

