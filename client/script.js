const signUp = document.querySelector('#nav1')
const library = document.querySelector('#nav2')
const gamePage = document.querySelector('#nav3')
const aboutUs = document.querySelector('#nav4')
const sideBar = document.querySelector('#side-bar')

let isLoggedIn = false
library.classList.add('hidden')

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
          greeting.classList.add('greeting')
          updateContainer.appendChild(greeting)
    const updateHeading = document.createElement('h3')
          updateHeading.innerText = 'Update Info'
          updateContainer.appendChild(updateHeading)
    const nameInput = document.createElement('input')
          nameInput.type = 'text'
          nameInput.placeholder = 'Name'
          nameInput.classList.add('new-name')
          updateContainer.append(nameInput)
    const nameBtn = document.createElement('button')
          nameBtn.type = 'button'
          nameBtn.classList.add('new-name-btn')
          nameBtn.innerText = 'Change Name'
          updateContainer.append(nameBtn)
    const usernameInput = document.createElement('input')
          usernameInput.type = 'text'
          usernameInput.placeholder = 'Username'
          usernameInput.classList.add('new-username')
          updateContainer.append(usernameInput)
    const usernameBtn = document.createElement('button')
          usernameBtn.type = 'button'
          usernameBtn.innerText = 'Change Username'
          usernameBtn.classList.add('new-username-btn')
          updateContainer.append(usernameBtn)
    const passwordInput = document.createElement('input')
          passwordInput.type = 'text'
          passwordInput.placeholder = 'New Password'
          passwordInput.classList.add('new-password')
          updateContainer.append(passwordInput)
    const passwordBtn = document.createElement('button')
          passwordBtn.type = 'button'
          passwordBtn.innerText = 'Change Password'
          passwordBtn.classList.add('new-password-btn')
          updateContainer.append(passwordBtn)
    const emailInput = document.createElement('input')
          emailInput.type = 'text'
          emailInput.placeholder = 'Email'
          emailInput.classList.add('new-email')
          updateContainer.append(emailInput)
    const emailBtn = document.createElement('button')
          emailBtn.type = 'button'
          emailBtn.innerText = 'Change Email'
          emailBtn.classList.add('new-email-btn')
          updateContainer.append(emailBtn)
    const currentPassword = document.createElement('input')
          currentPassword.type = 'password'
          currentPassword.placeholder = 'Current Password'
          currentPassword.classList.add('current-password')
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
                signUp.classList.add('hidden')
                library.classList.remove('hidden')
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

const updateName = async () => {
      const newName = document.querySelector('.new-name').value
      // console.log(newName)
      const greeting = document.querySelector('.greeting').innerHTML
      // console.log(greeting)
      const username = greeting.replace('Hello ', "")
      const currentPassword = document.querySelector('.current-password').value
      try {
            const response = await axios.get(`http://localhost:3001/users/name/${username}`)
            const id = response.data._id
            if (response.status === 200) {
                  if (response.data.password === currentPassword) {
                        const update = await axios.put(`http://localhost:3001/users/${id}`, { name: newName })
                        if (update.status === 200) {
                              alert('Name updated successfully!')
                        } else {
                              alert('Failed to update name')
                        }
                  } else {
                        alert('Incorrect password')
                  }
            } else {
                  alert('Error: Please try again')
            }
      } catch (e) {
            console.log(`Error updating name:`, e)
            alert('An errr occured while updating your name. Please try again')
      }
}

const updateUsername = async () => {
      const newUsername = document.querySelector('.new-username').value
      const greeting = document.querySelector('.greeting').innerHTML
      // console.log(greeting)
      const username = greeting.replace('Hello ', "")
      const currentPassword = document.querySelector('.current-password').value
      try {
            const response = await axios.get(`http://localhost:3001/users/name/${username}`)
            const id = response.data._id
            if (response.status === 200) {
                  if (response.data.password === currentPassword) {
                        const update = await axios.put(`http://localhost:3001/users/${id}`, { username: newUsername })
                        if (update.status === 200) {
                              alert('Username updated successfully!')
                        } else {
                              alert('Failed to update username')
                        }
                  } else {
                        alert('Incorrect password')
                  }
            } else {
                  alert('Error: Please try again')
            }
      } catch (e) {
            console.log(`Error updating name:`, e)
            alert('An errr occured while updating your username. Please try again')
      }
}

const updatePassword = async () => {
      const newPassword = document.querySelector('.new-password').value
      const greeting = document.querySelector('.greeting').innerHTML
      // console.log(greeting)
      const username = greeting.replace('Hello ', "")
      const currentPassword = document.querySelector('.current-password').value
      try {
            const response = await axios.get(`http://localhost:3001/users/name/${username}`)
            const id = response.data._id
            if (response.status === 200) {
                  if (response.data.password === currentPassword) {
                        const update = await axios.put(`http://localhost:3001/users/${id}`, { password: newPassword })
                        if (update.status === 200) {
                              alert('Password updated successfully!')
                        } else {
                              alert('Failed to update password')
                        }
                  } else {
                        alert('Incorrect password')
                  }
            } else {
                  alert('Error: Please try again')
            }
      } catch (e) {
            console.log(`Error updating name:`, e)
            alert('An errr occured while updating your password. Please try again')
      }
}

const updateEmail = async () => {
      const newEmail = document.querySelector('.new-email').value
      const greeting = document.querySelector('.greeting').innerHTML
      // console.log(greeting)
      const username = greeting.replace('Hello ', "")
      const currentPassword = document.querySelector('.current-password').value
      try {
            const response = await axios.get(`http://localhost:3001/users/name/${username}`)
            const id = response.data._id
            if (response.status === 200) {
                  if (response.data.password === currentPassword) {
                        const update = await axios.put(`http://localhost:3001/users/${id}`, { email: newEmail })
                        if (update.status === 200) {
                              alert('Email updated successfully!')
                        } else {
                              alert('Failed to update Email')
                        }
                  } else {
                        alert('Incorrect password')
                  }
            } else {
                  alert('Error: Please try again')
            }
      } catch (e) {
            console.log(`Error updating name:`, e)
            alert('An errr occured while updating your email. Please try again')
      }
}





document.querySelector('.login-button').addEventListener('click', () => {
    login()
    let isLoggedIn = true
    return isLoggedIn
})

document.addEventListener('click', (event) => {
      if (event.target && event.target.classList.contains('new-name-btn')) {
            console.log('new name btn pressed')
            updateName()
      }
})

document.addEventListener('click', (event) => {
      if (event.target && event.target.classList.contains('new-username-btn')) {
            console.log('new username btn pressed')
            updateUsername()
      }
})

document.addEventListener('click', (event) => {
      if (event.target && event.target.classList.contains('new-password-btn')) {
            console.log('new password btn pressed')
            updatePassword()
      }
})

document.addEventListener('click', (event) => {
      if (event.target && event.target.classList.contains('new-email-btn')) {
            console.log('new email btn pressed')
            updateEmail()
      }
})

library.addEventListener('click', async () => {
      const greeting = document.querySelector('.greeting').innerHTML
      // console.log(greeting)
      const username = greeting.replace('Hello ', "")
      const currentPassword = document.querySelector('.current-password').value
      const response = await axios.get(`http://localhost:3001/users/name/${username}`)
      const id = response.data._id
      window.location.href = `http://127.0.0.1:5500/client/library.html#${id}`
})

aboutUs.addEventListener('click', async () => {
      window.location.href = 'http://127.0.0.1:5500/client/about.html'
})

gamePage.addEventListener('click', () => {
      window.location.href = 'http://127.0.0.1:5500/client/game-info.html'
})