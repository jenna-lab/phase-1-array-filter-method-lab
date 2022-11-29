function findMatching(driver, string) {
  return driver.filter(function (driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
}
function fuzzyMatch(driver, string) {
  return driver.filter(function (driver) {
    return (
      driver.toLowerCase().substring(0, string.length) === string.toLowerCase()
    );
  });
}
function matchName(drivers, argument) {
  return drivers.filter(function (driver) {
    return driver.name === argument;
  });
}
