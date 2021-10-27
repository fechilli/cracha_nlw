const link = {
  github: 'fechilli',
  youtube: 'UCJWz-4IWbaRUvau95j91voA',
  facebook: 'luiz.felipe.10888',
  instagram: 'fechilli',
  twitter: 'feh_chilli'
}

function mudandoRedesSocialLinks() {
  for (let li of socialMidias.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${link[social]}`
  }
}

mudandoRedesSocialLinks()

function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${link.github}`


  fetch(url)
  .then(response => response.json())
  .then(data =>{
    userNamer.textContent = data.name
    userBio.textContent = data.bio
    user
  } )
  
    
  }
  

getGithubProfileInfos()