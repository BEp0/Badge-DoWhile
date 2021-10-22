//object
const LinksSocialMidia = {
    github: "BEp0",
    linkedin: "in/bep0"
}

//function
function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        //alert(social)
        li.children[0].href = `https://www.${social}.com/${LinksSocialMidia[social]}`
    }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMidia.github}`

    // promise
    fetch(url)
        .then(response => response.json()) // transform to json
        .then(data => {
            userName.textContent = data.name
            bio.textContent = data.bio
            userLink.href = data.html_url
            userPhoto.src = data.avatar_url
            userLink.textContent[0] = data.login
        })
}

getGithubProfileInfos()