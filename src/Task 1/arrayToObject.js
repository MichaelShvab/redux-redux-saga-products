const arr = [{
  id: 1,
  name: 'Tel Aviv',
},{
  id: 2,
  name: 'London',
},{
  id: 3,
  name: 'Moscow',
}];

const mapper = (arr) => {
    const map =  arr.reduce((prev, cur) => ({...prev, [cur.id]: cur}), {})
    return map
}

console.log(mapper(arr));