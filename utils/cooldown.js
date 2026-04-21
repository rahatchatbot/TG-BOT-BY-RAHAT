const map = new Map();

module.exports = (user, cmd) => {
  const now = Date.now();
  const key = user + cmd;

  if (map.has(key)) {
    if (now < map.get(key)) return true;
  }

  map.set(key, now + 3000);
  return false;
};
