const Item = require("../../../models/Order.js");
const addItem = async function (req, res){ 
    const news = req.body.news;
    const card = req.body.card; 
    const books = req.body.books;
    const plastic = req.body.plastic;
    const aluminium = req.body.aluminium;
    const ac = req.body.ac;
    const fridge = req.body.fridge;
    const washing = req.body.washing;
    const battery = req.body.battery;
    const ewaste = req.body.ewaste;
    const cpu = req.body.cpu;
    const lcd = req.body.lcd;
    const amount = req.body.amount;
    const acquired = req.body.acquired;
    const owner = req.body.owner;  
    item = new Item({
            news: news,
            card: card,
            books: books, 
            plastic: plastic,
            aluminium: aluminium,
            ac: ac,
            fridge: fridge,
            washing: washing,
            battery: battery,
            ewaste: ewaste,
            cpu: cpu,
            lcd: lcd,
            amount: amount,
            acquired: acquired,
            owner: owner

        });
        await product.save();
        res.status(200).send({
        message: "Created Successfully",
        itemData: {
            item
        },
        });
    }
    module.exports={
        addItem: addItem
    };