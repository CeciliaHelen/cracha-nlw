const LinksSocialMedia = {
  github: 'CeciliaHelen',
  youtube: 'channel/UCFem4Nwt7f69ywicijy4uJQ',
  facebook: 'profile.php?id=100010639334292',
  instagram: 'cecilia_hln',
  twitter: 'CecisHelen'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
