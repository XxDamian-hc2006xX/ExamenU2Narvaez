const inputEmpresa = document.getElementById('inputEmpresa')
const inputEnlace = document.getElementById('inputEnlace')
const inputTelefono = document.getElementById('inputTelefono')

function guardarBorrador() {
    const borradorEmpresa = {
        empresa: inputEmpresa.value,
        enlace: inputEnlace.value,
        telefono: inputTelefono.value
    }
    const jsonString = JSON.stringify(borradorEmpresa)
    sessionStorage.setItem('borradorEmpresa', jsonString)
}

function cargarBorrador() {
    const borrador = sessionStorage.getItem('borradorEmpresa')
    if (borrador) {
        const datos = JSON.parse(borrador)
        inputEmpresa.value = datos.empresa || ''
        inputEnlace.value = datos.enlace || ''
        inputTelefono.value = datos.telefono || ''
    }
}

inputEmpresa.addEventListener('input', guardarBorrador)
inputEnlace.addEventListener('input', guardarBorrador)
inputTelefono.addEventListener('input', guardarBorrador)

window.addEventListener('load', cargarBorrador)
