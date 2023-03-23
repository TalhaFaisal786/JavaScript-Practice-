//constructor function

function person(fname,lname,dob){
    this.fname=fname;
    this.lname=lname;
    this.dob=new Date(dob);
    



}

//prototype used many times

person.prototype.getbirthyear=function(){
    return this.dob.getFullYear();
}
person.prototype.getfullname=function(){
    return this.fname+this.lname;
}

const person1=new person("Talha","Faisal","7-7-2003");
const person2=new person("Ghani","Imran","21-7-2001");

console.log(person1.getbirthyear());

console.log(person2.getfullname());
console.log(person1.getfullname());
console.log(person2.getbirthyear());