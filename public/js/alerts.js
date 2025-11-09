function showSuccess(message = 'Operación realizada con éxito', redirect = null) {
  Swal.fire({
    title: '✅ Éxito',
    text: message,
    icon: 'success',
    confirmButtonColor: '#3085d6'
  }).then(() => {
    if (redirect) window.location.href = redirect;
  });
}

function showError(message = 'Ocurrió un error inesperado') {
  Swal.fire({
    title: '❌ Error',
    text: message,
    icon: 'error',
    confirmButtonColor: '#d33'
  });
}

function confirmDelete(url, message = '¿Estás seguro de eliminar este registro?') {
  Swal.fire({
    title: 'Confirmar eliminación',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(url)
        .then(res => {
          if (res.ok) {
            showSuccess('Registro eliminado correctamente', window.location.href);
          } else {
            showError('No se pudo eliminar el registro');
          }
        })
        .catch(() => showError('Error de conexión con el servidor'));
    }
  });
}
