// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://i.pinimg.com/564x/05/03/d5/0503d5d523ad4215b30c751db344d218.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt recusandae, perspiciatis veniam labore sunt culpa nam provident enim, quae voluptatum molestiae fugiat neque, animi asperiores magni at. Laboriosam nemo vel eum vero, dignissimos cum accusantium vitae, rem fugiat reprehenderit, harum necessitatibus rerum voluptatibus velit ea unde. Quisquam mollitia laboriosam dicta.',
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://i.pinimg.com/564x/9b/67/9a/9b679a062dcaacf5f04424e5c29a5683.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt recusandae, perspiciatis veniam labore sunt culpa nam provident enim, quae voluptatum molestiae fugiat neque, animi asperiores magni at. Laboriosam nemo vel eum vero, dignissimos cum accusantium vitae, rem fugiat reprehenderit, harum necessitatibus rerum voluptatibus velit ea unde. Quisquam mollitia laboriosam dicta.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://i.pinimg.com/564x/1f/15/fa/1f15fa2cae685ac20894f5d1ab537ecb.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt recusandae, perspiciatis veniam labore sunt culpa nam provident enim, quae voluptatum molestiae fugiat neque, animi asperiores magni at. Laboriosam nemo vel eum vero, dignissimos cum accusantium vitae, rem fugiat reprehenderit, harum necessitatibus rerum voluptatibus velit ea unde. Quisquam mollitia laboriosam dicta.',
  },
]

// select items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set starting item
let currentItem = 0

// load intial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson()
})

// show person based on item
function showPerson() {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson()
})

prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson()
})

// show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem)
  showPerson()
})
