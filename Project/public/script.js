const cards = document.querySelectorAll('.card_recipe')
const modalOverlay = document.querySelector('.modal_overlay')
const closeModal = document.querySelector('.close_modal a')
const image_modal = document.querySelector('.image_modal img')
const recipe_name = document.querySelector('.info_modal .recipe_name')
const chef_name = document.querySelector('.info_modal .chef_name')

cards.forEach(card => {
    card.addEventListener('click', function() {
        modalOverlay.classList.add('active')
        image_modal.setAttribute('src', `../assets/${card.id}.png`)
        const recipe_name_element = document.getElementById(`${card.id}_recipe_name`).innerText
        const chef_name_element = document.getElementById(`${card.id}_chef_name`).innerText

        recipe_name.innerHTML = recipe_name_element
        chef_name.innerHTML = chef_name_element
    })
})

closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})