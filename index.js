
function totalTimeSpent(chore) {
  const timeSpent = chore.minutes * chore.timesDone
  chore.timeSpent = parseInt(timeSpent * 100) / 100

  return chore
}

function calculateTimeSpent(chores) {
  return chores.map(totalTimeSpent)
}

function environmentFilter(log) {
  return log.environment === 'qa'
}


function filterForQA(logs) {
  return logs.filter(environmentFilter)
}

function filterByName(chores, name) {
  return chores.filter((chore) => {
    return chore.doneBy === name
  })
}
//'updates the assignee of tasks to be someone else'


module.exports = {
  //assignTasks,
  calculateTimeSpent,
  filterByName,
  filterForQA,
}
