import {Router} from "express";

const router = new Router ();

// POST /signin

router.post("/signin", async (req,res)=> {
    //check if user exist 
    //check if password is a match 
    //send the user data 
    const user = { _id: "1", email: "alex@gmail.com", userName: "alex123"}
    res.json(user);

});

router.post("/signup", async (req,res)=> {
    //check email is not in db 
    //
});

export default router; 