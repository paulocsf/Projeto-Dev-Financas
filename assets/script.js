const Modal = {
    open(){
        // abrir o Modal
        // adicionar a classe active no modal
        document
        .querySelector('.modal-overlay')
        .classList.add('active')
    },
    close(){
        // fechar o modal
        // remover a classe active no modal
        document
        .querySelector('.modal-overlay')
        .classList.remove('active')
    }
}