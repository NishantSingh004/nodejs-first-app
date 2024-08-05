import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import path from "path";
import bcrypt from "bcrypt"

mongoose.connect("mongodb://127.0.0.1:27017", {
  dbName: "backend",
}).then(() => console.log("database connected"))
  .catch(e => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const app = express();

//middlewares 
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const decoded = jwt.verify(token, "sdjfwjdffjsdfjfhjrewr");

    req.user = await User.findById(decoded._id);
    next();
  } else {
    res.redirect("/login")
  }
};

app.get("/", isAuthenticated, (req, res) => {
  res.render("logout", { name: req.user.name });
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/login", async(req, res)=> {
 
  const {email, password} = req.body;
  let user = await User.findOne({email});

    if(!user){
      return res.redirect("/register")
    }

    const isMatch = await bcrypt.compare(password, user.password)
  
  if (!isMatch) {
    console.log("Password mismatch, rendering login with error.");
    return res.render("login", { email, message: "Incorrect Password" });
  }

  const token = jwt.sign({ _id: user._id }, "sdjfwjdffjsdfjfhjrewr");
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });

  console.log("Login successful, redirecting to home.");
  res.redirect("/");
});



app.post('/register', async (req, res) => {
  
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    return res.redirect("/login");
  }
  
const hashedPassword = await bcrypt.hash(password, 10)

  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ _id: user._id }, "sdjfwjdffjsdfjfhjrewr");
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000)
  });
  res.redirect("/");
});


app.get("/login", (res, req) => {
  req.render("login")
})

app.get('/logout', (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now())
  });
  res.redirect("/");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post('/contact', async (req, res) => {
  const { name, email } = req.body;
  // Ensure `message` model is defined if used here
  await message.create({ name, email });
  res.redirect("/success");
});

app.listen(5000, () => {
  console.log("server is working");
});
// look i did same copy paste your code still its registering without password in database