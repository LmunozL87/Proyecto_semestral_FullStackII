function validarCorreo(correo) {
  const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return formato.test(correo.trim());
}

function validarRut(rut) {
  const formato = /^\d{7,8}$/;
  return formato.test(rut.trim());
}

function validarContaseña(contraseña) {
  const formato = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return formato.test(contraseña);
}