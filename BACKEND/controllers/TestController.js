
class TestController{
    
    constructor(){
        this.init();
    }
    
    init (){
        this.greetUser    = this.greetUser.bind(this);
        this.takeUserData = this.takeUserData.bind(this);
    }

    async greetUser(req, res, next){
        try{

        }catch(err){
            next(err);
        }
    }

    async takeUserData(req, res, next){
        try{
            const { name, lastName } = req.body;
            console.log(`${name} <===> ${lastName}`);
            res.json({ name, lastName });
        }catch(err){
            next(err);
        }
    }
}

module.exports = TestController;