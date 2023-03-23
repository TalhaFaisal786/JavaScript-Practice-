class person{
    constructor(fname,lname,dob){
        this.fname=fname;
        this.lname=lname;
        this.dob=new Date(dob);
    }

    getfullname(){
        return this.fname+this.lname;
    }
    getbirthyear(){
        return this.dob.getFullYear();
    }
}



const person1=new person("Talha","Faisal","7-7-2003");
const person2=new person("Ghani","Imran","21-7-2001");


console.log(person1.getbirthyear());
console.log(person1.getfullname());
console.log(person2.getfullname());