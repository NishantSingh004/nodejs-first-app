// // const http = require("http")
// // const gfName = require("./features") old way to import 

// // new way

// // import gfName from "./features.js";
// // import * as  myObj from "./features.js"
// // console.log(gfName);
// // console.log(myObj.gfName2);

// import { genrateRandom } from "./features.js"
// //console.log(genrateRandom())
// import http from "http"
// import fs from "fs"
// import  url  from "url";

// // const newUrl = 'https://example.com:8080/path/name?query=string#hash';

// // const parse = url.parse(newUrl)
// // console.log(parse)



// // const urlObject = {
// //   protocol: 'https',
// //   hostname: 'example.com',
// //   port: 8080,
// //   pathname: '/path/name',
// //   query: { query: 'string' },
// //   hash: '#hash'
// // };

// // const formattedUrl = url.format(urlObject);

// // console.log(formattedUrl); // https://example.com:8080/path/name?query=string#hash

// // const baseURL = 'https://example.com/path/';
// // const targetURL = 'name';

// // const resolvedUrl = url.resolve(baseURL, targetURL);
// // console.log(resolvedUrl); // https://example.com/path/name



// //another method to use fs by making it into sync file
//  const home = fs.readFileSync("./index.html");
//  console.log(home);
//  //now just use it inside the createServer with res.end(home) that it 

// const server = http.createServer((req, res) => {
// if (req.url ===  "/about"){
//   res.end(`<h1>love is ${genrateRandom()}</h1>`)
// }
// else if(req.url === "/"){
//   //fs.readFile("./index.html", (err,home)=>{
//     res.end(home)
//   //})
// }
// else if(req.url === "/contact"){
//   res.end("<h1>contact paqe</h1>")
// }
// else{
//   res.end("<h1>Page not found</h1>")
// }
// })

// server.listen(5000, () => {
//  console.log("server is working") 
// }) 

