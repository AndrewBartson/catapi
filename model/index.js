let cats = [
    {
      id: 8728347,
      name: 'charlie the cat',
      age: 2,
      breed: 'tabby',
      temp: 'lies down a lot'
    },
    {
      id: 324223,
      name: 'chairmen meow',
      age: 5,
      breed: 'ragdoll',
      temp: 'aggressive'
    }
]

let id = 5000

function getCat(id) {
  let cat = cats.find(cat => cat.id == id)
  return cat
}

function getAllCats() {
  return cats
}

function createCat(data) {
  let cat = {
    id: id++,
    name: data.name,
    age: data.age,
    breed: data.breed,
    temp: data.temp
  }
  cats.push(cat)
  return cat
}

function updateCat(id, data) {
  let cat = getCat(id)
  for (var key in data) {
    cat[key] = data[key]
  }
  return cat
}

function deleteCat(id) {
  let cat = getCat(id)
  cats = cats.filter(cat => cat.id != id)
  return cat
}

module.exports = {
  getCat, getAllCats, createCat, updateCat
}
