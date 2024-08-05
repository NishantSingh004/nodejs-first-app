// const gfName =  "MrsRandom";
// const gfName2 = "MrsRandom2";
// const gfName3 = "MrsRandom3";

// //module.exports = gfName;  older method to export

// //new one 
// export default gfName;
// export {gfName2, gfName3};

export const genrateRandom = () =>{
return `${Math.floor(Math.random()*100)}%`;
};
// Math.floor will give non decimal number only if we dont wana use Math.random the instead we can use ~~ only both are same 
