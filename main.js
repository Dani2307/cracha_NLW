//userName.textContent = 'Daniela dos Santos'

const usersSocialMedia = {
  github: 'Dani2307',
  youtube: 'maykbrito',
  facebook: 'santos.danielaoliveira',
  instagram: 'danioliveira9324',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${usersSocialMedia[social]}`
  }
}
changeSocialMediaLinks()
description.textContent =
  'Aspirante a desenvolvedora Front-end, e apaixonada por desafios.'

//Json é um documento para transacionar dados

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${usersSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(dataJson => {
      userName.textContent = dataJson.name
      description.textContent = dataJson.bio
      userGitHub.href = dataJson.html_url
      userImage.src = dataJson.avatar_url
      userLogin.textContent = dataJson.login
    })
}
getGitHubProfileInfos()
