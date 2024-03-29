const tasks = (arr) => arr.join(" && ");

module.exports = {
  hooks: {
    "pre-commit": tasks(["pretty-quick --staged"]),
    "commit-msg": tasks(["commitlint -E HUSKY_GIT_PARAMS"]),
  },
};
