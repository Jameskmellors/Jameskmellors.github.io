const primaryPassword = 'bluegate1999'
const secondaryPassword = 'jameskmellors'

let passwordGiven

const passwordProtectOnPage = () => {
    passwordGiven = prompt('Please enter the password *case sensitive*')
    if (passwordGiven != null && passwordGiven == primaryPassword) {
    } else {
        alert("ACCESS DENIED")
        window.location.replace('../index.html')

    }
}

const passwordFunction = () => {
    passwordGiven = prompt('Please enter the password *case sensitive*')
    if (passwordGiven != null && passwordGiven == secondaryPassword) {
        window.location.replace('password protection/select-your-website.html')
    } else {
        alert("ACCESS DENIED")
    }
}