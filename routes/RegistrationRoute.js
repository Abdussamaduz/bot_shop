// const router = require('express').Router()

// router.get('/', (request, response) => {
//     response.render('registration', {
//         title: "Registration Page"
//     })
// })

// module.exports = {
//     path: '/registration',
//     router: router
// }

const { Router } = require("express")
const { createUser, updateDate } = require('../models/UserModel')
const { generateCrypt } = require('../modules/bcrypt')
const { generateJWTToken } = require('../modules/jwt')
const AuthMiddleware = require('../middlewares/AuthMiddleware')
const Joi = require('joi')

const router = Router()
// console.log(router);

const RegistrationValidation = new Joi.object({
    firstname: Joi.string()
        .min(3)
        .max(32)
        .required()
        .error(new Error("Firstname is incorrect")),
    email: Joi.string()
        .alphanum()
        .min(6)
        .max(16)
        .required()
        .error(new Error("Email is incorrect")),
    password: Joi.string()
        .min(6)
        .max(20)
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .error(new Error("Password is incorrect")),
    city: Joi.string()
        .required()
        .trim()
        .max(32)
        .error(new Error("City is incorrect")),
    cardnumber: Joi.number()
        .min(16)
        .required()
        .error(new Error("card number Error")),
    phone: Joi.number()
        .min(10000)
        .max(9999999999999)
        .required()
        .error(new Error("Phone number is incorrect")),
})


router.get('/', (req, res) => {
    res.render('registration',{
        title: "Sign Up Page"
    })
})

router.post('/', async (request, response) => {
    console.log(request.body);
    try {
        const { firstname, email, password, city, cardnumber, phone, } = await RegistrationValidation.validateAsync(request.body)
        console.log(request.body);
        const user = await createUser( firstname, email, await generateCrypt(password), city, cardnumber, phone,)
        console.log(user);
        let token = generateJWTToken({
            _id: user._id,
            name: user?.name,
            username: user?.username
        })
        let data = await RegistrationValidation.validateAsync(request?.body)
        let update = await updateDate(request?.user?._id, data)
        response.cookie('token', token).redirect('/')
    } catch (e) {
        if(String(e).includes("dublicate key")) {
            e = "Phone or Username is not available"
        }
        response.render('registration', {
            title: "Sign Up Page",
            error: e + ""
        })
    }
})

// router.get('/bdate', AuthMiddleware, async (request, response) => {
//     response.render('bdate',{
//         title: "Birthdate Page"
//     })
// })

// router.post("/bdate", AuthMiddleware, async (request, response) => {
//     try {
//         let data = await BirthDate.validateAsync(request?.body)
//         let update = await updateDate(request?.user?._id, data)
//         response.redirect('/')
//     } catch (error) {
//         console.log(error);
//         response.render("bdate", {
//             title: "Birthdate Page",
//             error: error + ""
//         })
//     }
// })

module.exports = {
    path: "/registration",
    router: router
}