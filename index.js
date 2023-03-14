function addContact() {
  const contactSection = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = 'Nome: '
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'

  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))
  nameLi.appendChild(nameInput)

  const phoneLi = document.createElement('li')
  phoneLi.innerText = 'Telefone: '
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phoneName'

  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))
  phoneLi.appendChild(phoneInput)

  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for=address>Endereço: </label>'
  const addresInput = document.createElement('input')
  addresInput.type = 'text'
  addresInput.name = 'addressName'
  addresInput.id = 'address'

  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))
  addressLi.appendChild(addresInput)

  contactSection.append(h3, ul)
}

function removeContact() {
  const contactSection = document.getElementById('contacts-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}
