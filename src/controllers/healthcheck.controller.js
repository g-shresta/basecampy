import ApiResponse from "../utils/api-response.js";
import asyncHandler from "../utils/async-handler.js";

const health = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, { message: "SERVER RUNNING" }))
})
export default health