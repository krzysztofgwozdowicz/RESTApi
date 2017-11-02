
// this method displays info about this api in  json format
exports.display_help = function(req, res){
    res.json({subsites:{
                "/tasks" : "get all task or post new task ",
                "/tasks/taskID" : "get,put,delete task with specified taskId ",
                "/api" : "displays this info ",
                        },
                taskBody:{
                    name: {
                        type: "String",
                        required: 'specify name of the task'
                      },
                      Created_date: {
                        type: "Date",
                        default: "Date.now"
                      },
                      status: {
                        type: [{
                          type: "String",
                          enum: ['pending', 'ongoing', 'completed']
                        }],
                        default: ['pending']
                      }

                }
  });
  
  };