
const {users,tasks}=require("../data/index")
const { v4: uuidv4 } = require('uuid');
module.exports={
    Query: {
        greeting: () => ["harshan", "sujan"],
        tasks: () => tasks,
    
        // (obj level has only arfs)
        task:(_,{id})=> 
        tasks.find(task=> task.id === id),
        
        // (obj level has only arfs)
        
                 
      },
      Mutation:{
        createTasklist :(_,{input})=>{
          task = {...input,id:uuidv4()}
          tasks.push(task);
          return task;
        }
      },
    // field level has only parent (one to many rel)
      Task: {
        user: ({ userId }) => users.find((user) => user.id === userId),
      },
    
     
}

