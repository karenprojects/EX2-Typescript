function validarCPF(cpf: string): boolean {
    // Remover caracteres especiais
    cpf = cpf.replace(/[^0-9]/g, '');
  
    // Verificação de tamanho
    if (cpf.length !== 11) {
      return false;
    }
  
    // Sequências inválidas
    const invalidSequences = ['00000000000', '11111111111', '22222222222', '33333333333',
                            '44444444444', '55555555555', '66666666666', '77777777777',
                            '88888888888', '99999999999'];
  
    if (invalidSequences.includes(cpf)) {
      return false;
    }
  
    // Cálculo do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += (10 - i) * parseInt(cpf[i]);
    }
  
    let firstDigit = sum % 11;
    firstDigit = firstDigit < 2 ? 0 : 11 - firstDigit;
  
    // Cálculo do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += (11 - i) * parseInt(cpf[i]);
    }
  
    let secondDigit = sum % 11;
    secondDigit = secondDigit < 2 ? 0 : 11 - secondDigit;
  
    // Validação dos dígitos verificadores
    return firstDigit === parseInt(cpf[9]) && secondDigit === parseInt(cpf[10]);
  }
  
  // Exemplo de uso
  const cpf = '123.456.789-00';
  const isValid = validarCPF(cpf);
  
  if (isValid) {
    console.log('CPF válido!');
  } else {
    console.log('CPF inválido!');
  }