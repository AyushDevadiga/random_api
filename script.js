function getRandomUser() {
  fetch("https://randomuser.me/api/").then((data) => {
    let res = data.json()
    return res
  }).then((res) => {
    let user_info = res.results[0]

    document.getElementById('profile-pic').src = user_info.picture.large

    let { title, first, last } = user_info.name
    document.getElementById('full-name').innerText = `${title} ${first} ${last}`

    document.getElementById('email').innerText = user_info.email

    let { city, country } = user_info.location
    document.getElementById('location').innerText = `${city}, ${country}`

    document.getElementById('phone').innerText = user_info.phone
    document.getElementById('password').innerText = user_info.login.password
  })
}

getRandomUser()
document.getElementById('new-user').addEventListener('click', getRandomUser)
