//@desc     Get goals
//@route    GET /api/goals
//@access   private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

//@desc     Set goals
//@route    SET /api/goals
//@access   private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set goal" });
};

//@desc     Update a goal
//@route    PUT /api/goals/:id
//@access   private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

//@desc     Delete a goal
//@route    DELETE /api/goals/:id
//@access   private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
};
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
