

const name2 = "rahul";
const email = "virahul@gmail.com";
const password = "123456";
const skill = "backend";
const subjects = ['js','react'];

// fetch('http://localhost:5000/api/student/register',{
//     method:'post',
//     headers: {
//         "Content-Type" : "application/json"
//     },
//     body:JSON.stringify({name:name2,email,password,skill,subjects}),
// }).then(res=> res.json()).then(data=>console.log(data)).catch(err=>console.log(err));
fetch('http://localhost:5000/api/student').then(res=> res.json()).then(data=>console.log(data)).catch(err=>console.log(err));