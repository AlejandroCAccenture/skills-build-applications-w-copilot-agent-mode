import { Router } from 'express'
import Activity from '../models/Activity'
import Leaderboard from '../models/Leaderboard'
import Team from '../models/Team'
import User from '../models/User'
import Workout from '../models/Workout'

const apiRouter = Router()

const resources = ['users', 'teams', 'activities', 'leaderboard', 'workouts'] as const

apiRouter.get('/users', async (_request, response) => {
  response.json(await User.find().select('-password').sort({ name: 1 }).lean())
})

apiRouter.get('/teams', async (_request, response) => {
  response.json(await Team.find().populate('members', 'username name').sort({ name: 1 }).lean())
})

apiRouter.get('/activities', async (_request, response) => {
  response.json(await Activity.find().populate('user', 'username name').sort({ completedAt: -1 }).lean())
})

apiRouter.get('/leaderboard', async (_request, response) => {
  response.json(await Leaderboard.find().populate('user', 'username name').populate('team', 'name').sort({ rank: 1 }).lean())
})

apiRouter.get('/workouts', async (_request, response) => {
  response.json(await Workout.find().sort({ difficulty: 1, name: 1 }).lean())
})

apiRouter.get('/', (_request, response) => {
  response.json({
    name: 'OctoFit Tracker API',
    resources: resources.map((resource) => `/api/${resource}/`),
  })
})

export default apiRouter