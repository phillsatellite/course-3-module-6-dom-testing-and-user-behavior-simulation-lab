//Adds element to the DOM
function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId)
  if (container) {
    container.textContent = text
  }
}

//Removs element by ID from the DOM 
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.remove()
  }
}

//Simulates button click and updates DOM 
function simulateClick(containerId, text) {
  const container = document.getElementById(containerId)
  if (container) {
    container.textContent = text
  }
}

//Handle form submission and update the DOM
function handleFormSubmit(formId, containerId) {
  const form = document.getElementById(formId)
  const container = document.getElementById(containerId)
  const input = form.querySelector('input')

  if (!input.value.trim()) {
    const errorMessage = document.getElementById('error-message')
    errorMessage.textContent = 'Input cannot be empty'
    errorMessage.classList.remove('hidden')
    return
  }

  container.textContent = input.value
  input.value = ''
  const errorMessage = document.getElementById('error-message')
  errorMessage.textContent = ''
  errorMessage.classList.add('hidden')
}

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit
}