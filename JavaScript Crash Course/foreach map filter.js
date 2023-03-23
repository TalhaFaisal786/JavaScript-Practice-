const todos=[
    {
      id:1,
      person:"talha",
      work:"owner"
    },
    {
        id:2,
        person:"ghani",
        work:"owner",
        d:true
      },
      {
        id:3,
        person:"najam",
        work:"manager",
        d:true
      },
]

// todos.forEach(function(todo){
//     console.log(todo.person);
//     console.log(todo.work);
// });


// let todoperson=todos.map(function(todo){
//     return(todo.person);

// });
// let todowork=todos.map(function(todo){
//     return(todo.work);

// });


// console.log(todoperson);
// console.log(todowork);



let todocompleted=todos.filter(function(todo){
        return todo.iscompleted==true;

});        

console.log(todocompleted);