const data = {
  1648751400: {
    data: {
      1: {
        projectName: "Project_2",
        project_id: "1",
        hours: {
          5: {
            taskid: "5",
            name: "Development",
            hour: 184.2,
          },
          27: {
            taskid: "27",
            name: "Infrastructure",
            hour: 6,
          },
          79: {
            taskid: "79",
            name: "Support",
            hour: 0.5,
          },
          130: {
            taskid: "130",
            name: "Meeting (Project - any meeting client or internal related to the current project(s))",
            hour: 1,
          },
        },
      },
      17: {
        projectName: "Project_15",
        project_id: "17",
        hours: {
          5: {
            taskid: "5",
            name: "Development",
            hour: 11,
          },
          6: {
            taskid: "6",
            name: "QA - Testing",
            hour: 24,
          },
          11: {
            taskid: "11",
            name: "Non-billable (Idle time if there are no assigned project task also not worked on any other relevant tasks like Project_15 etc.,)",
            hour: 58,
          },
          14: {
            taskid: "14",
            name: "Task Assignment",
            hour: 1,
          },
          33: {
            taskid: "33",
            name: "Knowledge Transfer",
            hour: 4,
          },
          57: {
            taskid: "57",
            name: "R & D",
            hour: 163,
          },
        },
      },
    },
    date: "2022-04-01 00:00:00",
  },
};

const projectReportId = Object.keys(data)[0];
let res = {
  projectReportId: projectReportId,
  tempData: data[projectReportId]?.data,
  data: [],
};

Object.keys(res?.tempData).map((key) => {
  const obj = { ...res?.tempData[key], entries: [] };
  delete obj.hours;

  const hourObj = res?.tempData[key].hours;
  Object.keys(hourObj).map((key2) => {
    const task = {
      taskId: key2,
      name: hourObj[key2]?.name,
      hour: hourObj[key2]?.hour,
    };
    obj.entries.push(task);
  });
  res.data.push(obj);
});

delete res.tempData;
console.log(JSON.stringify(res));
