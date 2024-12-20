# Registro-de-Renova-o-do-Plano-
Esta é uma automação que criei para cypress, que consiste em realizar o login com cada usuário e validar quando seu plano será renovado. Foi minha primeira automação escrita e executada, não somente para prática mas também foi colocada em uso.

Alguns dos comentários escritos no código auxiliam na utilização dele. 

no primeiro "cy.fixture" você adicionará o arquivo json com os dados necessários para realizar o login e senha deste usuário. 

"cy.visit" digite a url que o cypress deverá visitar para realizar este procedimento.

para registrar os dados de renovação, adicione o caminho para o arquivo desejado em "cy.readFile".

e salvará uma lista completa dos usuários em "cy.writeFile".
