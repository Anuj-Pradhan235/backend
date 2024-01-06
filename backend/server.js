import express from "express";
import "dotenv/config"
const app=express();
const port =process.env.PORT;
app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>")
})
app.get("/api/v1/jokes",(req,res)=>{
    const jokeArray = [
        { id: 1, title: 'Joke 1', content: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
        { id: 2, title: 'Joke 2', content: 'What do you call fake spaghetti? An impasta!' },
        { id: 3, title: 'Joke 3', content: 'How do you organize a space party? You planet!' },
        { id: 4, title: 'Joke 4', content: 'Why don’t scientists trust atoms? Because they make up everything!' },
        { id: 5, title: 'Joke 5', content: 'What do you call a fish wearing a crown? A kingfish!' }
      ];
    res.send(jokeArray);
})
app.listen(port,()=>{
console.log(`App is listening at ${port}`);
})