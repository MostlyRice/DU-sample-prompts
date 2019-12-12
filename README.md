# JavaScript Sample Prompt

These are sample exam prompts. The prompts on the exam look very similar.

## Prompt 1

Many systems use a scaled [star ratings](<https://en.wikipedia.org/wiki/Star_(classification)>) system. Some organizations have decided that a simpler up-down-voting system is easier for their user base.

Modify the given function, `getThumbsRating(ratings)` such that:

1. given an array of rating integers in the range of (-1, 0, 1), calculate the average rating
2. based on the average rating,
   - if positive, return a ðŸ‘
   - if negative, return a ðŸ‘Ž
   - otherwise return a âœŠ

```js
function getThumbsRating(ratings) {
  const up = "👍";
  const down = "👎";
  const none = "✊";

  return none;
}
```

For example:

- given ratings of `[]`, the result is `âœŠ`
- given ratings of `[-1,1,1,1]`, the result is `ðŸ‘`
- given ratings of `[-1,1,-1,-1,-1]`, the result is `ðŸ‘Ž`
- given ratings of `[-1,-1,1,1]`, the result is `âœŠ`
- given ratings of `[1,1,1,1,1]`, the result is `ðŸ‘`


## Prompt 2

Retail stores have a finite amount of floor space, and a popular metric to measure store success is [Sales per unit area](https://en.wikipedia.org/wiki/Sales_per_unit_area). At a high level, given a store's area and its sales, you can calculate this metric by `sales / area`. Many retailers like to compare their stores to nearby competing stores.

Modify the given function `getNearestCompetingStore(stores)` such that:

1. given an array of store objects,
2. find the two most competitive stores - that is the two stores with the _smallest_ Sales per unit area _difference_
2. return the two stores as a list; otherwise return null

```js
const storeSet1 = [{sales: 123411, area: 1234}, {sales: 5026107, area: 20712}, {sales: 23121, area: 901}, {sales: 4121928, area: 4993}];
const storeSet2 = [{sales: 123411, area: 1234}];
const storeSet3 = [{sales: 123411, area: 1234}, {sales: 123411, area: 1234}];

function getNearestCompetingStore(stores) {
  return [];
}
```

For example, given `storeSet1`, the two most competitive stores are:

```js
[{sales: 123411, area: 1234}, {sales: 23121, area: 901}]
```

For example, given `storeSet2`, the result is:

```js
null
```

For example, given `storeSet3`, the two most competitive stores are:

```js
[{sales: 123411, area: 1234}, {sales: 123411, area: 1234}]
```