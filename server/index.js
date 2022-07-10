import express, { request } from 'express'
import cors from 'cors'
import { users, discussions, requests } from './data.js'

const app = express()
const port = 5000


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



let newUsers = users
let newRequests = requests
let newDiscussions = discussions



app.get("/", (req, res) => {

    res.send("Welcome...!")
})


app.post("/register", (req, res) => {
    const { firstName, lastName, email, password } = req.body
    // let user = {}
    // let message = ''
    // users.map((item) => {
    //     if (item.email == email) {
    //         message = "User already exist."
    //     } else {
    //         newUsers.push(req.body)
    //         message = "Sign in Successfull"
    //     }
    // })
    // res.send({ user: req.body, message })
    let user={
        firstName,
        lastName,
        email,
        password,
        isAdmin: false,
        isModerator: false,
        isMember:false,

    }
    newUsers.push(user)
    res.send('')
})


app.post('/login', (req, res) => {
    const { email } = req.body
    let message = ''
    let user = users.find((item) => item.email === email)
    if (!user) {
        message = "Not Found."
    } else {
        message = "Login successfull!"
    }  
    res.send({ user, message })
})


app.get("/users", (req, res) => {
    res.send(users)
})


app.post("/postDiscussion", (req, res) => {
    newDiscussions.unshift(req.body)
    res.send(newDiscussions)
})


app.get("/discussions", (req, res) => {
    res.send(newDiscussions)
})


app.post("/addModerator", (req, res) => { 
    let { email  } = req.body 
    newUsers.map((item,index)=>{
        if(item.email == email){
            newUsers[index].isModerator = true
        }
    })
    res.send(newUsers)
})

app.get("/allrequests", (req, res) => {
    res.send(newRequests)
})

app.post("/request", (req, res) => {
    newRequests.push(req.body)
    res.send(newRequests)
})

app.get('/approve',(req,res)=>{
    let email = req.query.email
    newUsers.map((item,index)=>{
        if(item.email == email){
            newUsers[index].isMember = true
        }
    })
    let newReqs = request.filter((item)=>{
        item.email !== email
    })
    newRequests =[...newReqs]
    res.send('')
})
app.get('/reject',(req,res)=>{
    let email = req.query.email
    newUsers.map((item,index)=>{
        if(item.email == email){
            newUsers[index].isMember = true
        }
    })
    let newReqs = request.filter((item)=>{
        item.email !== email
    })
    requests =[...newReqs]
    res.send('')
})



app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`)
})