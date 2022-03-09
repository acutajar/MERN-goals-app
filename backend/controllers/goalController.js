const asyncHandler = require("express-async-handler");
//@desc     Get goals
//@route    GET /api/goals
//@access   private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200);
  throw new Error("Please add a text field.");
});

//@desc     Set goals
//@route    SET /api/goals
//@access   private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "Please add a valid text field" });
  }
  res.status(200).json({ message: "Set goal" });
});

//@desc     Update a goal
//@route    PUT /api/goals/:id
//@access   private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//@desc     Delete a goal
//@route    DELETE /api/goals/:id
//@access   private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
