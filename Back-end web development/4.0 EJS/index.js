import express from 'express';
const port = 3000;
const app = express();

app.get('/',(req, res) =>{
    const today = new Date();
    let day = today.getDay();
    let type = "It's weekday";
    let adv = "It's time to work hard"
    if(day === 0 || day === 6)
    {
        type = "It's weekend";
        adv = "It's time to rest";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
})
app.listen(port, () => {
    console.log("Server Started!")
});