const data = [
  {
    id: "-LtQfb1hbDv6EnQOBg3j",
    answers: [
      {
        comments: "",
        rating: 1
      },
      {
        comments: "",
        rating: 2
      },
      {
        comments: "",
        rating: 3
      },
      {
        comments: "",
        rating: 4
      },
      {
        comments: "",
        rating: 1
      },
      {
        comments: "",
        rating: 2
      },
      {
        comments: "",
        rating: 3
      },
      {
        comments: "",
        rating: 4
      },
      {
        comments: "",
        rating: 2
      },
      {
        comments: "",
        rating: 4
      }
    ],
    createdDate: 1573496190876,
    name: "Paul McConnell",
    surveyId: "-LtQUUFnxE9Y4gOjuqmq",
    userId: "iRn7FKIcgTWslk5WrPJkRYQMVKo1"
  },
  {
    id: "-LtQfri1TljjtfqGq3U9",
    answers: [
      {
        comments: "",
        rating: 1,
        successIndicators: [4, 5]
      },
      {
        comments: "",
        rating: 1
      },
      {
        comments: "",
        rating: 3
      },
      {
        comments: "",
        rating: 4
      },
      {
        comments: "",
        rating: 2
      },
      {
        comments: "",
        rating: 3
      },
      {
        comments: "",
        rating: 4
      },
      {
        comments: "",
        rating: 3
      },
      {
        comments: "",
        rating: 4
      },
      {
        comments: "",
        rating: 3
      }
    ],
    createdDate: 1573496259109,
    name: "Needy Neil",
    surveyId: "-LtQUUFnxE9Y4gOjuqmq",
    userId: "GAPF0gnCzTQOsAVMBwqszXCm4NE3"
  }
];

const aggregateRatingsByAnswerId = (aggregateRatings, userRatings) => {
  userRatings.forEach((rating, index) => {
    if (!aggregateRatings[index]) {
      aggregateRatings[index] = [];
    }
    aggregateRatings[index].push(rating);
  });
  return aggregateRatings;
};

const sumOfRatings = (sum, rating) => sum + rating;

const allRatingsByAnswerId = data
  .map(surveyAnswers =>
    surveyAnswers.answers.map(userAnswers => userAnswers.rating)
  )
  .reduce(aggregateRatingsByAnswerId, []);

const averageRatingByAnswer = allRatingsByAnswerId.reduce(
  (averages, answerRatings, index) => {
    const averageRatingForAnswer =
      answerRatings.reduce(sumOfRatings, 0) / answerRatings.length;
    averages[index] = { averageRating: averageRatingForAnswer };
    return averages;
  },
  {}
);

console.log(averageRatingByAnswer);
