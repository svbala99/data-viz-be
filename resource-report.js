const data = {
  1: {
    projectName: "Project_2",
    project_id: "1",
    users: {
      118: {
        uid: "118",
        name: "Resource_7",
        hours: {
          27: {
            taskid: "27",
            name: "Infrastructure",
            hour: 6,
          },
          130: {
            taskid: "130",
            name: "Meeting (Project - any meeting client or internal related to the current project(s))",
            hour: 1,
          },
        },
      },
      126: {
        uid: "126",
        name: "Resource_31",
        hours: {
          79: {
            taskid: "79",
            name: "Support",
            hour: 0.5,
          },
        },
      },
      318: {
        uid: "318",
        name: "Resource_43",
        hours: {
          5: {
            taskid: "5",
            name: "Development",
            hour: 34,
          },
        },
      },
      657: {
        uid: "657",
        name: "Resource_44",
        hours: {
          5: {
            taskid: "5",
            name: "Development",
            hour: 144,
          },
        },
      },
      702: {
        uid: "702",
        name: "Resource_20",
        hours: {
          5: {
            taskid: "5",
            name: "Development",
            hour: 6.2,
          },
        },
      },
    },
  },
  17: {
    projectName: "Project_15",
    project_id: "17",
    users: {
      424: {
        uid: "424",
        name: "Resource_4",
        hours: {
          11: {
            taskid: "11",
            name: "Non-billable (Idle time if there are no assigned project task also not worked on any other relevant tasks like Project_15 etc.,)",
            hour: 8,
          },
        },
      },
      559: {
        uid: "559",
        name: "Resource_27",
        hours: {
          11: {
            taskid: "11",
            name: "Non-billable (Idle time if there are no assigned project task also not worked on any other relevant tasks like Project_15 etc.,)",
            hour: 23,
          },
        },
      },
      662: {
        uid: "662",
        name: "Resource_21",
        hours: {
          6: {
            taskid: "6",
            name: "QA - Testing",
            hour: 24,
          },
        },
      },
      686: {
        uid: "686",
        name: "Resource_24",
        hours: {
          57: {
            taskid: "57",
            name: "R & D",
            hour: 133,
          },
        },
      },
      701: {
        uid: "701",
        name: "Resource_75",
        hours: {
          57: {
            taskid: "57",
            name: "R & D",
            hour: 30,
          },
        },
      },
      702: {
        uid: "702",
        name: "Resource_20",
        hours: {
          11: {
            taskid: "11",
            name: "Non-billable (Idle time if there are no assigned project task also not worked on any other relevant tasks like Project_15 etc.,)",
            hour: 16.5,
          },
        },
      },
      703: {
        uid: "703",
        name: "Resource_33",
        hours: {
          14: {
            taskid: "14",
            name: "Task Assignment",
            hour: 1,
          },
        },
      },
      705: {
        uid: "705",
        name: "Resource_14",
        hours: {
          5: {
            taskid: "5",
            name: "Development",
            hour: 11,
          },
        },
      },
      719: {
        uid: "719",
        name: "Resource_76",
        hours: {
          11: {
            taskid: "11",
            name: "Non-billable (Idle time if there are no assigned project task also not worked on any other relevant tasks like Project_15 etc.,)",
            hour: 10.5,
          },
        },
      },
      723: {
        uid: "723",
        name: "Resource_16",
        hours: {
          33: {
            taskid: "33",
            name: "Knowledge Transfer",
            hour: 4,
          },
        },
      },
    },
  },
};
const res = [];

Object.keys(data).map((k) => {
  const obj = { projectId: k, ...data[k], usersArray: [] };
  const userObj = obj.users;

  Object.keys(userObj).map((key2) => {
    const user = {
      userId: key2,
      name: userObj[key2]?.name,
      hours: userObj[key2]?.hours,
    };
    Object.keys(userObj[key2]?.hours).map((key3) => {
      const task = {
        taskId: userObj[key2]?.hours[key3].taskid,
        name: userObj[key2]?.hours[key3].name,
        hour: userObj[key2]?.hours[key3].hour,
      };
      user.hours = task;
    });
    obj.usersArray.push(user);
  });

  delete obj.users;

  res.push(obj);
});
console.log(res);
