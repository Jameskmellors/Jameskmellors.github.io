const passwordForEntry = 'bluegate1999'

let passwordGiven

const passwordProtectOnPage = () => {
    passwordGiven = prompt('Please enter the password *case sensitive*')
    if (passwordGiven != null && passwordGiven == passwordForEntry) {
        alert('ACCESS GRANTED')
    } else {
        alert("ACCESS DENIED")
        window.location.replace('../index.html')

    }
}

const passwordFunction = () => {
    passwordGiven = prompt('Please enter the password *case sensitive*')
    if (passwordGiven != null && passwordGiven == passwordForEntry) {
        alert('ACCESS GRANTED')
        window.location.replace('password protection/select-your-website.html')
    } else {
        alert("ACCESS DENIED")
    }
}