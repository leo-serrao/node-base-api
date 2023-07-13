const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Leonardo',
    email: 'leonardo@gmail.com',
    phone: '123-456-4512',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    // Listar todos os registros
    return new Promise((resolve) => {
      resolve(contacts);
    })
  }
}

module.exports = new ContactsRepository();
