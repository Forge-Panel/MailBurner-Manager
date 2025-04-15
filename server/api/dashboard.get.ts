import User from "../lib/Entities/User"

export default defineEventHandler(async (event) => {
  return await User.findAll()
})