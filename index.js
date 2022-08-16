// Code your solution in this file!

function distanceFromHqInBlocks(n) {
  if (n >= 42) {
    let dis = n - 42;
    return dis;
  } else {
    let dis = 42 - n;
    return dis;
  }
}

function distanceFromHqInFeet(n) {
  let feet = distanceFromHqInBlocks(n) * 264;
  return feet;
}

function distanceTravelledInFeet(n, f) {
  if (n >= f) {
    let dis = (n - f) * 264;
    return dis;
  } else {
    let dis = (f - n) * 264;
    return dis;
  }
}

function calculatesFarePrice(s, d) {
  let distanceTravelled = distanceTravelledInFeet(s, d);
  let fareprice;

  if (distanceTravelled > 0 && distanceTravelled <= 400) {
    return 0;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
    fareprice = (distanceTravelled - 400) * 0.02;
  } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
    fareprice = 25;
  } else {
    return "cannot travel that far";
  }
  return fareprice;
}
