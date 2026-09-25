import mongoose from 'mongoose';
import { connectDatabase } from '../config/database';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Team from '../models/Team';
import User from '../models/User';
import Workout from '../models/Workout';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();
    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { username: 'maya.runner', email: 'maya@example.com', name: 'Maya Chen', password: 'octofit-demo' },
      { username: 'liam.lifter', email: 'liam@example.com', name: 'Liam Brooks', password: 'octofit-demo' },
      { username: 'sofia.walker', email: 'sofia@example.com', name: 'Sofia Ramirez', password: 'octofit-demo' },
    ]);

    const teams = await Team.create([
      { name: 'Peak Performers', description: 'Consistent effort, shared goals, and strong finishes.', members: [users[0]._id, users[1]._id] },
      { name: 'Trail Blazers', description: 'A welcoming team for building healthy daily habits.', members: [users[2]._id] },
    ]);

    const activities = await Activity.create([
      { user: users[0]._id, type: 'running', durationMinutes: 32, distanceMiles: 3.1, calories: 315, points: 42, completedAt: new Date('2026-09-22') },
      { user: users[1]._id, type: 'strength', durationMinutes: 45, calories: 280, points: 38, completedAt: new Date('2026-09-23') },
      { user: users[2]._id, type: 'walking', durationMinutes: 50, distanceMiles: 2.4, calories: 210, points: 30, completedAt: new Date('2026-09-24') },
    ]);

    const leaderboard = await Leaderboard.create([
      { user: users[0]._id, team: teams[0]._id, points: 420, rank: 1 },
      { user: users[1]._id, team: teams[0]._id, points: 380, rank: 2 },
      { user: users[2]._id, team: teams[1]._id, points: 310, rank: 3 },
    ]);

    const workouts = await Workout.create([
      { name: 'After-School Starter', description: 'A balanced routine for building a consistent movement habit.', type: 'full body', difficulty: 'beginner', durationMinutes: 20, exercises: ['Bodyweight squats', 'Incline push-ups', 'Marching high knees'] },
      { name: 'Run Strong', description: 'A short interval session to improve speed and endurance.', type: 'cardio', difficulty: 'intermediate', durationMinutes: 30, exercises: ['Warm-up walk', 'Four-minute run', 'One-minute recovery walk'] },
    ]);

    console.log(`Database seeding complete: ${users.length} users, ${teams.length} teams, ${activities.length} activities, ${leaderboard.length} leaderboard entries, and ${workouts.length} workouts`);
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    await mongoose.disconnect();
    process.exit(1);
  }
}

seedDatabase();
