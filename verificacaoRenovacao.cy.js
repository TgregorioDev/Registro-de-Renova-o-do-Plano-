describe('Login e verificação do plano do cliente', () => {
    // Carregar os dados dos usuários do arquivo JSON
    before(() => {
      cy.fixture('EXEMPLOusuarios.json').as('usuarios');  // carregando a lista de usuários
    });
    afterEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
    })
  
      // Iterar sobre cada usuário
       // iterar sobre cada usuário na lista
       it('Deve realizar login, capturar dados e registrar para todos os usuários', function() {
        const usuariosExistentes = []
        this.usuarios.forEach((usuario, index) => {
          cy.visit('url.exemplo.com');
    
          cy.get('input[name=email]')
            .type(usuario.email);  
    
          cy.get('button.submit')
            .first().click({force: true});
    
          cy.get('input[name=password]')
            .type(usuario.senha);  
    
          cy.get('button.submit')
            .last().click({force: true});
    
          
          cy.get('body > app-root > app-documents-home > app-header > header > div.header-navigation > div:nth-child(5) > a > i', {timeout: 100000}).should('be.visible')
            .first().click({force: true});
    
          cy.get('body > app-root > app-configurations-index > div > app-taxonomy > aside > a:nth-child(7)', {timeout: 100000}).should('be.visible')
            .last().click({force: true});
    
          cy.get('body > app-root > app-configurations-index > main > app-configurations-plan > div > div:nth-child(1) > article:nth-child(1) > div > div > p > span', {timeout: 100000})
            .invoke('text').then((nome) => {  // Coleta o nome
    
            cy.get('body > app-root > app-configurations-index > main > app-configurations-plan > div > div:nth-child(1) > article:nth-child(1) > div > div > div > div:nth-child(1) > div.info > p.configuration-text.mb-1 > strong', {timeout: 100000})
              .invoke('text').then((data) => {  // Coleta a data de renovação
    
                const dadosUsuario = {  // Objeto com os dados coletados
                  nome: nome.trim(),
                  dataRenovacao: data.trim(),
                  usuariosIndex: index + 1,  // Identifica o usuário no log
                };
    
                // Registra os dados em um arquivo JSON
                cy.readFile('/caminho/exemplo/para/arquivo.json')
    
                  .then((usuariosExistentes = []) => {
                    // Adiciona o novo usuário à lista de usuários
                    usuariosExistentes.push(dadosUsuario);
    
                    // Salva a lista completa de usuários no arquivo JSON
                    cy.writeFile('/caminho/exemplo/para/arquivo.json', usuariosExistentes);
                  })
                  
                  .then(() => {
                    console.log(Renovação de ${dadosUsuario.nome} registrada com sucesso.);
                  });
              });
          });
        });
          cy.reload();
          cy.visit('url.exemplo.com');
      });
    });