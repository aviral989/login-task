// pages/api/users.js

import { faker } from '@faker-js/faker';

// Generate mock user data
const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = {
      id: faker.datatype.uuid(),
      name: faker.person.fullName(),
      checked: faker.datatype.boolean()
    };
    users.push(user);
  }
  return users;
};

// API route handler to get all users
export default function handler(req, res) {
    // Parse query parameters for pagination
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
  
    // Generate mock users
    const allUsers = generateUsers(50); // Generate 100 total mock users
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const users = allUsers.slice(startIndex, endIndex);
  
    // Return paginated users
    res.status(200).json({
      page,
      pageSize,
      totalPages: Math.ceil(allUsers.length / pageSize),
      users
    });
  }