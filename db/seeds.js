require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/user')
const Comment = require('../models/comment')
const FinGoal = require('../models/finGoals')
const Budget = require('../models/budget')


// Connect to Database
mongoose.connect('mongodb://localhost/user')
    .then(() => {
        console.log('connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })


// Remove old User Data
User.remove()
    .then(() => {

        const budget1 = new Budget({
            expenses: {
                name: "Rent",
                amount: 1200,
            },
            income: {
                type: "Job",
                amount: 3700
                //misc?
            }
        })


        const budget2 = new Budget({
            expenses: {
                name: "Car note",
                amount: 350,
            },
            income: {
                type: "Code Project",
                amount: 700,
                //misc?
            }
        })

        const comment1 = new Comment({
            body: "new comment"
        })

        const comment2 = new Comment({
            body: "another comment"
        })

        const finGoals1 = new FinGoal({
            name: "Travel to India",
            goalAmount: 3000,
            currentAmount: 800,
            dueDate: new Date(2018, 8, 15),
            budgetBar: 0,
            comment: [comment1]
        })

        const finGoals2 = new FinGoal({
            name: "Buy new car",
            goalAmount: 10000,
            currentAmount: 400,
            dueDate: new Date(2020, 10, 15),
            budgetBar: 0,
            comment: [comment2]
        })

        const user1 = new User({
            name: "Oprah",
            email: "oprahwin@own.com",
            password: "xxx",
            pic: "https://pmcvariety.files.wordpress.com/2018/01/oprah-winfrey-backstage-golden-globes.jpg?w=1000&h=563&crop=1",
            budget: [budget1],
            financialGoals: [finGoals1],
        })

        const user2 = new User({
            name: "Serena",
            email: "serena@court.com",
            password: "xxx",
            pic: "https://pmcvariety.files.wordpress.com/2018/01/oprah-winfrey-backstage-golden-globes.jpg?w=1000&h=563&crop=1",
            budget: [budget2],
            financialGoals: [finGoals2]
        })

        const users = [user1, user2]


        // save test data
        return User.insertMany(users)
    })
            .then(() => {
                console.log("database created!")
                // close the database
                mongoose.connection.close()
            }).catch((err) => {
                console.log('ERROR', err)
            })

    
