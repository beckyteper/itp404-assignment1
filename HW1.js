//Task 1
var reviewsData = {
  data: [
    {
      id: 1,
      attributes: {
        'review-title': 'Terrible!',
        'stars': 1,
        'cost': 'high'
      }
    },
    {
      id: 2,
      attributes: {
        'review-title': 'Decent place',
        'stars': 3,
        'cost': 'average'
      }
    },
    {
      id: 3,
      attributes: {
        'review-title': 'I would come again',
        'stars': 3.5,
        'cost': 'average'
      }
    },
    {
      id: 4,
      attributes: {
        'review-title': 'So good, and cheap!',
        'stars': 4,
        'cost': 'low-average'
      }
    },
    {
      id: 5,
      attributes: {
        'review-title': 'Good, but pricey!',
        'stars': 4,
        'cost': 'high'
      }
    }
  ]
};

function extractReviews(reviewData) {
  var dataObjects = reviewData.data;
  var mappedReviews = dataObjects.map(function(dataObject) {
    var attributes = dataObject.attributes;
    return {
      id: dataObject.id,
      title: attributes['review-title'],
      stars: attributes['stars'],
      cost: attributes['cost']
    }
  });

  return mappedReviews;
}

console.log(extractReviews(reviewsData));

//Task 2
var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];

function findGoodReviews(reviews) {
  var goodReviews = [];
  reviews.filter(function(review) {
    if (review.title.toUpperCase().indexOf('GOOD') != '-1') {
      goodReviews.push(review);
    }
  })

  return goodReviews;
}

console.log(findGoodReviews(reviews));

//Task 3
//uses reviews from Task 2
function classifyReviewsByCost(reviews) {
  var highCount = reviews.reduce(function(count, review) {
    if (review.cost === 'high') {
      count++;
    }

    return count;
  }, 0);

  var averageCount = reviews.reduce(function(count, review) {
    if (review.cost === 'average') {
      count++;
    }

    return count;
  }, 0);

  var lowAverageCount = reviews.reduce(function(count, review) {
    if (review.cost === 'low-average') {
      count++;
    }

    return count;
  }, 0);

  var reviewsCost = {
    'high': highCount,
    'average': averageCount,
    'low-average': lowAverageCount
  };

  return reviewsCost;
}

console.log(classifyReviewsByCost(reviews));
