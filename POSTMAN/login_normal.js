// what is replacer
// const fs=require('fs')
// var naame=require('readline-sync').question('enter your name:-')
// var password=require('readline-sync').question('enter your password:-')
// var dob=require('readline-sync').questionInt('enter your dob:-')
// var dic={}
// dic["name"]=naame
// dic["password"]=password
// dic["dob"]=dob
// a=JSON.stringify(dic)
// fs.writeFileSync('login.JSON',a)
// // b=fs.readFileSync('login.JSON')
// // c=b.toString()
// // console.log(c);

const fs = require('fs')
naame = require('readline-sync').question("enter your name:-")
password = require('readline-sync').question("enter the password:-")
u = 0, l = 0, d = 0, s = 0
if (password.length >= 6) {
    for (i of password) {
        if (i.toUpperCase()) {
            u = 1
        }
        if (parseInt(i)) {
            d = 1
        }
        if (i.toLowerCase()) {
            l = 1
        }
        if (i == "@" || i == "!" || i == "#" || i == "$" || i == "%" || i == "^" || i == "&" || i == "*" == s) {
            s = 1
        }
    }
    t = u + l + d + s
    // console.log(t)
    if (t !== 4) {
        console.log("please enter atleaset 1 capital 1 small 1 special 1 digit number")
    }
    else {
        password2 = require('readline-sync').question("confirm password:-")
        if (password !== password2) {
            console.log("please enter correct password")

        }
        else {
            hobby = require('readline-sync').question("enter your hobby:-")
            birth = require('readline-sync').questionInt("enter your DOB:-")
            gender = require('readline-sync').question("eneter your gender:-")
            designation = require('readline-sync').question("enter your post:-")
            dic = {}
            dic["name"] = naame
            dic["password"] = password
            dic["hobby"] = hobby
            dic["birth"] = birth
            dic["gender"] = gender
            dic["designation"] = designation

            file1 = JSON.stringify(dic, null, 3)
            fs.writeFileSync("Neetu.JSON", file1)
            console.log("congratulation", naame, "your signup successfully")
        }

    }
}

else {
    console.log("password is too short")
}
