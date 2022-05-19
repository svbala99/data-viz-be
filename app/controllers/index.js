// exports
exports.findAll = (req, res) => {
  const projectData = require("../../JSON/project-report.json");
  const resourceData = require("../../JSON/resource-report.json");
  const masterData = require("../../JSON/master-report.json");

  try {
    /**
     * PROJECT DATA FROM ITS JSON
     */
    const projectDataProvider = (projectData) => {
      const projectReportId = Object.keys(projectData)[0];
      let resultant = {
        projectReportId: projectReportId,
        tempData: projectData[projectReportId]?.data,
        data: [],
      };

      Object.keys(resultant?.tempData).map((key) => {
        const obj = { ...resultant?.tempData[key], entries: [] };
        delete obj.hours;

        const hourObj = resultant?.tempData[key].hours;
        Object.keys(hourObj).map((key2) => {
          const task = {
            taskId: key2,
            name: hourObj[key2]?.name,
            hour: hourObj[key2]?.hour,
          };
          obj.entries.push(task);
        });
        resultant.data.push(obj);
      });

      delete resultant.tempData;
      return resultant;
    };

    /**
     * RESOURCE DATA FROM ITS JSON
     */
    const resourceDataProvider = (resourceData) => {
      const resultant2 = [];

      Object.keys(resourceData).map((k) => {
        const obj = { projectId: k, ...resourceData[k], usersArray: [] };
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

        resultant2.push(obj);
      });

      return resultant2;
    };

    /**
     * MASTER REPORT DATA FROM ITS JSON
     */
    const masterDataProvider = (masterData) => {
      const resultant3 = masterData.map(
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
      return resultant3;
    };

    // formulate the response payload
    const projectDataResponse = projectDataProvider(projectData);
    const resourceDataResponse = resourceDataProvider(resourceData);
    const masterDataResponse = masterDataProvider(masterData);

    // send data
    res
      .status(200)
      .send({ projectDataResponse, resourceDataResponse, masterDataResponse });
  } catch (e) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};
