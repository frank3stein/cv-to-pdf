const saveToPdf = require("./save-to-pdf")
const express = require("express")
const port = 3000;

const app = express();


app.get('/save', async function (res, req) {
    const url = "localhost:8080/"
    try {

        const pdf = await saveToPdf(url)
    }
    catch (err) {
        console.error(err)
    }
    res.download(pdf)
})


app.listen(port, () => console.log(`Pdf server running on http://localhost:${port}`))