const signUp = document.querySelector('#nav1')
const library = document.querySelector('#nav2')
const aboutUs = document.querySelector('#nav3')
const gamePage = document.querySelector('#nav4')
const sideBar = document.querySelector('#side-bar')

let isLoggedIn = false

const addLoginSection = () => {
    const loginContainer = document.createElement('div')
          loginContainer.classList.add('login-section')
    const loginHeading = document.createElement('h2')
          loginHeading.innerText = 'Login'
          loginContainer.appendChild(loginHeading)
    const usernameInput = document.createElement('input')
          usernameInput.type = 'text'
          usernameInput.placeholder = 'Username'
          usernameInput.name = 'username'
          usernameInput.required = true 
          usernameInput.classList.add('username-login')
          loginContainer.appendChild(usernameInput)
    const passwordInput = document.createElement('input')
          passwordInput.type = 'password'
          passwordInput.placeholder = 'Password'
          passwordInput.name = 'password'
          passwordInput.required = true 
          passwordInput.classList.add('password-login')
          loginContainer.appendChild(passwordInput)
    const loginButton = document.createElement('button')
          loginButton.type = 'submit'
          loginButton.classList.add('login-button')
          loginButton.innerText = 'Login'
          loginContainer.appendChild(loginButton)
    sideBar.appendChild(loginContainer)
}

const addUpdateInfo = (currentUser) => {
    const updateContainer = document.createElement('div')
          updateContainer.classList.add('update-container')
    const greeting = document.createElement('h2')
          greeting.innerText = `Hello ${currentUser}`
          updateContainer.appendChild(greeting)
    const updateHeading = document.createElement('h3')
          updateHeading.innerText = 'Update Info'
          updateContainer.appendChild(updateHeading)
    const nameInput = document.createElement('input')
          nameInput.type = 'text'
          nameInput.placeholder = 'Name'
          updateContainer.append(nameInput)
    const nameBtn = document.createElement('button')
          nameBtn.type = 'button'
          nameBtn.innerText = 'Change Name'
          updateContainer.append(nameBtn)
    const usernameInput = document.createElement('input')
          usernameInput.type = 'text'
          usernameInput.placeholder = 'Username'
          updateContainer.append(usernameInput)
    const usernameBtn = document.createElement('button')
          usernameBtn.type = 'button'
          usernameBtn.innerText = 'Change Username'
          updateContainer.append(usernameBtn)
    const passwordInput = document.createElement('input')
          passwordInput.type = 'text'
          passwordInput.placeholder = 'New Password'
          updateContainer.append(passwordInput)
    const passwordBtn = document.createElement('button')
          passwordBtn.type = 'button'
          passwordBtn.innerText = 'Change Password'
          updateContainer.append(passwordBtn)
    const emailInput = document.createElement('input')
          emailInput.type = 'text'
          emailInput.placeholder = 'Password'
          updateContainer.append(emailInput)
    const emailBtn = document.createElement('button')
          emailBtn.type = 'button'
          emailBtn.innerText = 'Change Password'
          updateContainer.append(emailBtn)
    const currentPassword = document.createElement('input')
          currentPassword.type = 'password'
          currentPassword.placeholder = 'Current Password'
          updateContainer.append(currentPassword)
    sideBar.removeChild(document.querySelector('.login-section'))
    sideBar.appendChild(updateContainer)
}

addLoginSection()

const login = async () => {
    const username = document.querySelector('.username-login').value
    const password = document.querySelector('.password-login').value
    try {
        const response = await axios.get(`http://localhost:3001/users/name/${username}`)
        console.log(response)
        if (response.status === 200) {
            if (response.data.password === password) {
                document.querySelector('.login-section').classList.add('hidden')
                addUpdateInfo(username)
                console.log('logged in')
                return username
            } else {
                const failedLogin = document.createElement('h3')
                failedLogin.innerText('Login failed, try again')
                sideBar.appendChild(failedLogin)
            } 
        }
    } catch (e) {
        console.error('Error', e)
    }
} //I looked at the Buy Bi Bye Cycle project from the group projects last week for help with this, so thanks to that group! 

document.querySelector('.login-button').addEventListener('click', () => {
    login()
})

