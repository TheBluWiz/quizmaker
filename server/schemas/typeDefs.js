const typeDefs = `#graphql
  type User {
    _id: ID
    username: String!
    firstname: String
    lastname: String
    email: String!
    password: String!
  }

  type Quiz {
    quizID: ID!
    createdAt: String!
    owner: String!
    questions: Question!
  }

  type QuizUser {
    user: ID!
    quiz: ID!
    score: Int
    completedAt: String
  }

  type Question {
    questiontext: String!
    answers: [String!]!
    correctAnswers: [String!]!
    questiontype: String
  }

  type Answer {
    questionId: Question!
    userId: User!
    selectedanswer: [String!]!
    isCorrect: Boolean!
  }

  type Category {
    name: String!
    description: String!
    quizes: [Quiz]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    getQuizById(quizId: ID!): Quiz!
    getQuestionsByQuizId(quizId: ID!): Quiz!
    getAllQuizzes: [Quiz]
    getAllQuizzesByOwner(owernerId: ID!): [Quiz]!
    getAllQuizzesByStudent(studentId: ID!): [Quiz]!
    getAnswersByQuizId(quizId: ID!): [Answer!]!
    getMyProfile: User!
    getUserByUserNameOrEmail(username: String!, email: String!): User!
  }

  type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    // look to this: quizData: Object!
    createQuiz(quizData: Object!): Quiz
    updateQuiz(quizId: ID!, title: String!): Quiz
    createQuestion(quizId: ID!, questionData: Object!): Question
    updateQuestion(questionId: ID!, updatedQuestionData: Object!): Question
    saveAnswer(answerData: Object!): Answer
    deleteQuiz(quizId: ID!): Quiz
    deleteQuestion(questionId: ID!): Question
  }
`;
createQuiz(quizData: {title: String, options: String[]}): Quiz


module.exports = typeDefs;
