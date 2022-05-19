const data = [
  {
    Project: "Project_1",
    "Project Type": "Project effort",
    "Start Date": "2022-04-01",
    "End date": "2022-04-30",
    Name: "Resource_54",
    Tasks: null,
    "Total Hours": 0,
    Role: "Ui Developer",
    PM: "Resource_13",
  },
  {
    Project: "Project_1",
    "Project Type": "Project effort",
    "Start Date": "2022-04-01",
    "End date": "2022-04-30",
    Name: "Resource_13",
    Tasks: "Leave",
    "Total Hours": 8,
    Role: "Project Manager",
    PM: "Resource_13",
  },
  {
    Project: "Project_1",
    "Project Type": "Project effort",
    "Start Date": "2022-04-01",
    "End date": "2022-04-30",
    Name: "Resource_13",
    Tasks:
      "Meeting (Project - any meeting client or internal related to the current project(s))",
    "Total Hours": 23,
    Role: "Project Manager",
    PM: "Resource_13",
  },
  {
    Project: "Project_1",
    "Project Type": "Project effort",
    "Start Date": "2022-04-01",
    "End date": "2022-04-30",
    Name: "Resource_13",
    Tasks: "Development",
    "Total Hours": 57.25,
    Role: "Project Manager",
    PM: "Resource_13",
  },
  {
    Project: "Project_1",
    "Project Type": "Project effort",
    "Start Date": "2022-04-01",
    "End date": "2022-04-30",
    Name: "Resource_13",
    Tasks: "Documentation",
    "Total Hours": 6.75,
    Role: "Project Manager",
    PM: "Resource_13",
  }
];

const res = data.map(
  ({
    "Project Type": projectType,
    "Start Date": startDate,
    "End date": endDate,
    "Total Hours": totalHours,
    Project: projectId,
    Name: name,
    PM: pm,
    Role: role,
    Tasks: tasks,
    ...rest
  }) => ({
    projectId,
    name,
    pm,
    role,
    tasks,
    projectType,
    startDate,
    endDate,
    totalHours,
    ...rest,
  })
);

console.log(JSON.stringify(res));
