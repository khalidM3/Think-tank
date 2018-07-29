import User from './user'
import Post from './post'
import Problem from './problem'
import Solution from './solution'
import SolutionComment from './comment'
import {promisify} from './util'

export const fetchMe = promisify(User.fetchFakeMe)
export const fetchUser = promisify(User.fetchFakeUser)
export const fetchUsers = promisify(User.fetchFakeUsers)
export const fetchPosts = promisify(Post.fetchFakePosts)
export const fetchProblems = promisify(Problem.fetchFakeProblems)
export const fetchSolution = promisify(Solution.fetchFakeSolution)
export const fetchSolutions = promisify(Solution.fetchFakeSolutions)
export const fetchSolutionComments = promisify(SolutionComment.fetchFakeSolutionComments)

export default {
  fetchMe,
  fetchUsers,
  fetchPosts,
  fetchProblems,
  fetchSolution,
  fetchSolutions,
  fetchSolutionComments,
}
