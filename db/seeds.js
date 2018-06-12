require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/user')
const Comment = require('../models/comment')
const FinGoal = require('../models/finGoals')
const Budget = require('../models/budget')


// Connect to Database
mongoose.connect(process.env.MONGODB_URI)
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
            budgetName:{
                name: "House Budget"
            },
            expenses: {
                name: "Rent",
                amount: 1200,
            },
            income: {
                incomeType: "Job",
                amount: 3700
                //misc?
            }
        })


        const budget2 = new Budget({
            budgetName:{
                name: "Misc Budget"
            },
            expenses: {
                name: "Car note",
                amount: 350,
            },
            income: {
                incomeType: "Code Project",
                amount: 700
                //misc?
            }
        })


        const budget3 = new Budget({
            budgetName:{
                name: "My Budget"
            },
            expenses: {
                name: "DayCare",
                amount: 350,
            },
            income: {
                incomeType: "Yard work",
                amount: 100
                //misc?
            }
        })


        const budget4 = new Budget({
            budgetName:{
                name: "Her Budget"
            },
            expenses: {
                name: "Car insurance",
                amount: 350,
            },
            income: {
                incomeType: "Child support",
                amount: 700
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

        const finGoals3 = new FinGoal({
            name: "Save 1000 dollars",
            goalAmount: 1000,
            currentAmount: 200,
            dueDate: new Date(2018, 10, 15),
            budgetBar: 0,
            comment: [comment2]
        })

        const finGoals4 = new FinGoal({
            name: "pay off student loans",
            goalAmount: 10000,
            currentAmount: 1500,
            dueDate: new Date(2020, 10, 15),
            budgetBar: 0,
            comment: [comment2]
        })

        const user1 = new User({
            name: "Mike",
            email: "mike@ga.com",
            password: "xxx",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmjcQafkuES7Wnflw3jHLbIZ8_D8yP0V5SfbV5svJgL6HJmL8",
            budget: [budget1],
            financialGoals: [finGoals1],
        })

        const user2 = new User({
            name: "Paul",
            email: "paul@ga.com",
            password: "xxx",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHVl72cONzwQL7f8eFaepPl9Bo9IAVkBCQf0J_Yna1o2K4Ue8n5Q",
            budget: [budget3],
            financialGoals: [finGoals3],
        })

        const user3 = new User({
            name: "Serena",
            email: "serena@court.com",
            password: "xxx",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsxNKs-iiKJiv_VjJ-yz1u1UABkbXo1xtkZL1KMICofFnr-WAXw",
            budget: [budget2],
            financialGoals: [finGoals2]
        })
        const user4 = new User({
            name: "Jamie",
            email: "jamie@coffee.com",
            password: "xxx",
            pic: "https://media.licdn.com/dms/image/C4D03AQGkcx6zbf2JDA/profile-displayphoto-shrink_800_800/0?e=1534377600&v=beta&t=3WjN8_hvkiKfY3pGuJO5rI5L6bpzQARcota_jpEN7eg",
            budget: [budget2],
            financialGoals: [finGoals2]
        })
        

        const user5 = new User({
            name: "Oprah",
            email: "oprahwin@own.com",
            password: "xxx",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpBK9dfaWOKkuN6CW73_fpnigzr0k16SkZa3G5-pz_OPQ4_8U",
            budget: [budget4],
            financialGoals: [finGoals4],
        })

        const users = [user1, user2, user3, user4, user5]


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

    
