const express = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = express.Router();
const jwt =require("jsonwebtoken")
const {passward}=require("../pass/passward")
// User Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await User.create({
        username: username,
        password: password
    })

    res.json({
        message: 'user created successfully'
    })
    
});
router.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const user= User.find({
        username,
        password
    })
    if(user){
        const token=jwt.sign({username},passward)
        res.json({
            token,
        })
    }
    else{
        res.status(411).json({
            message: "Incorrect email and pass"
        })

    }
})

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
     // Implement fetching all courses logic
     const response = await Course.find({});

     res.json({
         courses: response
     })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router;