module.exports = function (app){
    let items = [
        {id:1,name:'pizza'},
        {id:2,name:'chocolate'},
        {id:3,name:'lazanya'},
        {id:4,name:'shawama'},
        {id:5,name:'burger'}
];
    //get route
    app.get('/items',(req,res) =>{
        res.send({
            data:  items
        });
    });

    //post route
    app.post('/items/:name',(req,res) =>{
        const params = req.params;
        console.log(params);
        const name = params.name;

        items.push(name);

        res.send({
            message: 'Item Added Successfully'
        });
    });

    app.put('/items/:id',(req,res)=>{
        const name = req.body.name;
        const id = req.body.id;
        for (var item of items){
            if(items[item].id == id){
                items[item].name = name;
            }
        }
        res.send({
            message: "Item updated successfully"
        });

        // const myItems = items.find(item => item.id === parseInt(req.params.id));
        // // console.log(myItems);
        // myItems.name = req.body.name;
        // res.send(items);
    });
}