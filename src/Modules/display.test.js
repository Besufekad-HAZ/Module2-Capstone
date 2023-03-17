// /**
//  * @jest-environment jsdom
//  */

// import FoodList from './Methods-all.js';

// // test('use jsdom in this test file', () => {
// //   const element = document.createElement('div');
// //   expect(element).not.toBeNull();
// // });

// // test('new FoodList object is instanciated', () => {
// //   const foodList = new FoodList();
// //   expect(foodList.foods).toBeDefined();
// // });

// describe('Add food', () => {
//   const foodList = new FoodList();

//   test('add new food', () => {
//     const id = '354';
//     const title = 'Burger';
//     const imageUrl = 'image url';

//     foodList.addMeals(id, title, imageUrl);

//     expect(foodList.foods[id].title).toBe(title);
//     expect(foodList.foods[id].image).toBe(imageUrl);
//   });

//   test('add extra food', () => {
//     foodList.addFood('2', 'second food', 'second image');
//     const numberOfFood = Object.keys(foodList.foods).length;

//     expect(numberOfFood).toBe(2);
//     expect(foodList.foods['2'].title).toBe('second food');
//   });

//   test('add multiple foods', () => {
//     // arrange
//     const foods = [
//       {
//         idMeal: '3',
//         strMeal: 'third',
//         strMealThumb: 'url',
//       },
//       {
//         idMeal: '4',
//         strMeal: 'fourth',
//         strMealThumb: 'url',
//       },
//     ];
//     const numberOfFoodsBeforeAdd = Object.keys(foodList.foods).length;

//     // act
//     foodList.addFoods(foods);
//     const numberOfFoodsAfterAdd = Object.keys(foodList.foods).length;

//     expect(numberOfFoodsBeforeAdd).toBe(2);
//     expect(numberOfFoodsAfterAdd).toBe(4);
//   });
// });

// // describe('Get likes', () => {
// //   const foodList = new FoodList();
// //   foodList.addFood('11', '', '');

// //   test('no like returns 0', () => {
// //     expect(foodList.getLikes('11')).toBe(0);
// //   });

// //   test('five likes', () => {
// //     foodList.foods['11'].likes = 5;
// //     expect(foodList.getLikes('11')).toBe(5);
// //   });
// // });

// // describe('Set likes', () => {
// //   const foodList = new FoodList();

// //   test('zero like', () => {
// //     foodList.addFood('11', '', '');
// //     foodList.setLikes('11', 2);
// //     expect(foodList.getLikes('11')).toBe(2);
// //   });

// //   test('zero like', () => {
// //     foodList.addFood('11', '', '');
// //     foodList.setLikes('11', 5);
// //     expect(foodList.getLikes('11')).toBe(5);
// //   });
// // });

// // describe('Get human readable like counter', () => {
// //   const foodList = new FoodList();

// //   test('zero like', () => {
// //     foodList.addFood('11', '', '');
// //     foodList.setLikes('11', 0);
// //     expect(foodList.getLikesText('11')).toBe('0 like');
// //   });

// //   test('one like', () => {
// //     foodList.addFood('22', '', '');
// //     foodList.setLikes('22', 1);
// //     expect(foodList.getLikesText('22')).toBe('1 like');
// //   });

// //   test('many likes', () => {
// //     foodList.addFood('33', '', '');
// //     foodList.setLikes('33', 2);
// //     expect(foodList.getLikesText('33')).toBe('2 likes');
// //   });
// // });

// // describe('Count all food items', () => {
// //   test('count 0 items', () => {
// //     const foodList = new FoodList();
// //     expect(foodList.getItemsCount()).toBe(0);
// //   });

// //   test('count multiply items', () => {
// //     const foodList = new FoodList();
// //     foodList.addFood('123', '', '');
// //     foodList.addFood('333', '', '');
// //     foodList.addFood('222', '', '');
// //     expect(foodList.getItemsCount()).toBe(3);
// //   });
// // });

// // describe('count comments', () => {
// //   test('count 0 comment', () => {
// //     const foodlist = new FoodList();
// //     foodlist.addFood('111', '', '');
// //     expect(foodlist.getCommentsCount('111')).toBe(0);
// //   });

// //   test('count multiple comments', () => {
// //     const foodList = new FoodList();
// //     foodList.addFood('111', '', '');
// //     foodList.addComments('111', [
// //       {
// //         comment: '',
// //         creation_date: '',
// //         username: '',
// //       },
// //       {
// //         comment: '',
// //         creation_date: '',
// //         username: '',
// //       },
// //     ]);
// //     expect(foodList.getCommentsCount('111')).toBe(2);
// //   });
// // });
// //   });
// // });
