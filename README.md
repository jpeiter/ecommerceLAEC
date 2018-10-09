# Tipo de Atividade:
Desenvolver uma interface web em HTML5 e CSS3 de um e-commerce.

**Cronograma de entrega:**


| Data          | Conteúdo                                      |
|---------------|-----------------------------------------------|
| 18/10         | Página inicial                                |
| 25/10         | Página interna                                |
| 01/11         | Página de formulários                         |
| 08/11         | Página de formulários válidos com JS e JQuery |
| 22/11         | Página de frete                               |
| 22/11 a 05/12 | Apresentações                                 |


Especificações do trabalho:

# **DESIGN DO SITE:**

 - Estruturar o conteúdo da página com HTML.
 - A estilização de todo o site deve ser realizada por meio do CSS, Bootstrap, Material Design for Bootstrap. Criar um CSS próprio para estilizar elementos necessários. Para isso, utilize CSS externo.


## **1 ) HOMEPAGE**

**Cabeçalho:**
Deve ser fixo no topo da página.
No cabeçalho desenvolver: 
- Logotipo e slogan posicionado no canto superior esquerdo.
- Opções para o usuário entrar ou se cadastrar.
- Campo de busca.
- Opção (ícone) do carrinho de compras.
- Outras informações.



**a ) Menu:** 
- Crie um menu interativo com submenus para categorizar os tipos de produtos. 
- Estilize o menu com Bootstrap e CSS.
- Os links de página do produto e formulários devem responder à requisição do usuário.


**b) Produtos:**
- Agrupar os conteúdos dos produtos com informações de título, valor, quantidades de parcelas, valor e opção para comprar. Estilize elementos como títulos, valores, parcelas, etc.


**c) Outras Informações:**
- Além dos produtos exiba outras informações que achar necessário conforme tema escolhido .


**d) Rodapé:** 
- Crie um menu para exibir informações sobre: institucional, dúvidas e cartão da sua página.
- Exiba imagens (dos cartões e boletos) com formas de pagamento.
- Exiba informações da loja: CNPJ, Inscrição estadual, endereço e e-mail de atendimento ao cliente.
- Estilize os elementos do rodapé.


## **2 ) PÁGINA DO PRODUTO**

**a )** Exibir a imagem do produto maior do lado esquerdo e com as miniaturas abaixo da imagem maior. Ao clicar na imagem miniatura exibi-la no espaço onde apresenta a imagem maior.

**b )** Exiba do lado direito as informações do produto como título, código, valor normal e com desconto, formas de pagamento.

**c )** Crie um botão “Ver parcelas” e ao clicar exiba uma janela modal com as opções de parcelamento.

**d )** Crie um formulário com um campo para calcular o frete.

**e )** Crie o botão para efetuar a compra do produto.

**f )** Logo abaixo da imagem crie um grid com abas para exibir as especificações normais e as técnicas do produto.

**g )** Crie um botão “Comprar” e ao clicar nele exibir as informações conforme descritas na tela de frete.


## **3 ) FORMULÁRIOS – regras gerais**

**a )** Utilizar os novos atributos HTML5 para criar o formulário (exceto os que não funcionam em todos os navegadores)

**b )** Validar os campos utilizando JQuery. TODOS os formulários devem ser validados em Javascript e/ou JQuery. Exemplos: campos obrigatórios, data, número, CPF, CNPJ, e-mail, etc.

**c )** Mostrar mensagem caso o usuário não preencher os campos do formulário adequadamente.

**d )** Inserir máscara nos campos como, telefone, CPF, CNPJ, entre outros.

**e )** Estilizar os elementos do formulário.

**f )** Salve os dados do formulário em um arquivo JSON.

### **3.1 ) FORMULÁRIO CADASTRE-SE**

 Exibir campos e botões para quem já é cadastrado logar-se e campos e botões para quem não é cadastrado poder criar o cadastro.

### **3.2 ) FORMULÁRIO MEU CADASTRO**
Exibir opções de: Pessoa Física ou Jurídica . Dividir em seções de :
- **Dados pessoais:** apelido, nome completo, CPF, data nascimento, gênero (combobox), telefones, e-mail, senha, confirmar senha e outros campos que julgar necessários.
- **Endereço:** Rua, número, bairro, cidade, estado, CEP e outros.


## **4 ) TELA DE PRODUTO E FRETE**

**a )** Ao clicar no botão “Comprar” exibir a tela sugerida na Figura 1.
![**Figura 1 – Tela de compra do produto**](https://scontent.ffbe1-1.fna.fbcdn.net/v/t1.15752-0/p280x280/43483685_337845210301502_546780642797420544_n.png?_nc_cat=101&oh=b6379c9ff3e8a3b24cfde1de8f830a57&oe=5C1A5D41)
**Figura 1 - Tela de compra do produto**

**b )** Implementar o item da quantidade para que quando o valor for alterado atualize o valor total do pedido.
**c )** Ao clicar no botão “Concluir Compra” exibir tela sugerida da Figura 2.
![**Figura 2 – Tela de frete**](https://scontent.ffbe1-1.fna.fbcdn.net/v/t1.15752-0/p280x280/43458443_331411897436011_7568533597406101504_n.png?_nc_cat=108&oh=339454ac7b73095b7f30a0815b372f0f&oe=5C4F998D)
**Figura 2 – Tela de frete**

**d )** Ao selecionar a opção “Compre e retire” deve aparecer o botão “Escolher ponto de retirada”
![](https://scontent.ffbe1-1.fna.fbcdn.net/v/t1.15752-9/43184466_1983937795000464_7767566543726051328_n.png?_nc_cat=108&oh=953f1d38d0d4cf48c8f36e80588376af&oe=5C47EDDD)
**e )** Ao selecionar a opção expressa fazer o somatório do valor do frete com o valor do produto e apresentar na tela conforme apresentado no resumo da compra, conforme apresentado na Figura 3.

#### **Resumo da compra:**
![**Figura 3 – Tela de resumo da compra**](https://scontent.ffbe1-1.fna.fbcdn.net/v/t1.15752-0/p280x280/43401229_2272764279404540_240937731046244352_n.png?_nc_cat=100&oh=5cac99f1bb1a5ffea7224d7aa57b97ae&oe=5C4BB0F8)
**Figura 3 – Tela de resumo da compra**
