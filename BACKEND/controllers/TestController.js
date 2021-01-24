
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

    async setCookie(req, res, next){
        try{
            res
                .cookie('data','digimon 4',{ secure:true, sameSite:'none' })
                .send('ready');
        }catch(err){
            next(err);
        }
    }
}

module.exports = TestController;