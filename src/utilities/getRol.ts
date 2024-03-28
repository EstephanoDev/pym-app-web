export const getRolNombre = (rolId: string) => {
  switch (rolId) {
    case 'b474d45qjtuawdm':
      return 'admin';
    case '0os9pqec9mkos5n':
      return 'INSTALADORES';
    case 'evvidegq10df11t':
      return 'CELADORES RA';
    case 'ack48kx0hf2mbvj':
      return 'FUSIONADORES';
    case 'ie2hrs6von4ipyv':
      return 'CELADORES RD';
    default:
      return 'Rol Desconocido';
  }
};


