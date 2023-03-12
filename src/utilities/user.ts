function getUser (): UserDetail {
  // ... logic to get user data
  return {
    name: "John Doe",
    age: 70
  }
}

function getUserBalance (): number {
  // ... logic to calculate user balance
  return 100
}

export {
  getUser,
  getUserBalance
}