const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  index(req, res) {
    // Listar todos os registros
    const contacts = ContactsRepository.findAll();

    res.json(contacts);
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
