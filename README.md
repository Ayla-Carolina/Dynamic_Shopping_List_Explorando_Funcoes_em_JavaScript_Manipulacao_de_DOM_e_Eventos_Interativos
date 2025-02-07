# Dynamic Shopping List: Explorando Funções em JavaScript, Manipulação de DOM e Eventos Interativos

## 📍Descrição dos Projetos
Modelo de projeto **dinâmico e interativo**, aplicando conceitos fundamentais de **JavaScripts** com foco no aprendizado de conceitos essenciais como **manipulação de DOM**, **eventos interativos**, **modularização de código** e **uso de objetos nativos**. A aplicação permite ao usuário adicionar itens à lista de compras e visualizar os detalhes, incluindo data, hora e interatividade com um **checkbox** para marcar itens como concluídos.


### 🚀 Funcionalidades
- **Verificação de Lista Vazia**: A lista verifica automaticamente se está vazia ou não.
- **Campo de Digitação**: O usuário pode digitar qualquer item e clicando em "salvar item", o item é adicionado à lista.
- **Exibição Interativa**:
  - Cada item na lista exibe o título, a data e a hora de quando foi adicionado.
  - Um **checkbox** interativo altera o estilo do título do item quando marcado.

  
### 👉 Conceitos Abordados

#### 1. **Manipulação de DOM**
Aprendemos a **criar e modificar elementos** HTML dinamicamente com JavaScript. Usando o método `createElement`, conseguimos gerar elementos `li` e inseri-los no DOM de forma programática.

#### 2. **Funções JavaScript e Modularização**
Organizamos o código em **funções reutilizáveis** e **modulares**. O código foi dividido em diferentes arquivos para facilitar a leitura e manutenção. Utilizamos os recursos de **`export`** e **`import`** para modularizar funções entre arquivos.

#### 3. **Eventos e Interatividade com o Usuário**
Implementamos a funcionalidade de adicionar itens à lista com a ajuda do **`addEventListener`**. A interação do usuário com os campos de entrada e botões aciona eventos para **criar novos itens** na lista.

#### 4. **Manipulação de Objetos: `Date`**
Utilizamos o **objeto `Date`** para gerar **data e hora dinâmicas**, que são mostradas junto aos itens da lista. Usamos os métodos `toLocaleDateString` e `toLocaleTimeString` para formatar de forma legível os dados.

#### 5. **Modularização de Código com `export` e `import`**
Através da técnica de **modularização** de código, os diferentes componentes e funções do projeto foram separados em arquivos distintos. Isso foi feito utilizando **`export`** e **`import`**, com destaque para a utilização de **`default`** e funções anônimas para facilitar a reutilização do código.

---

##### ✅ Como Usar: 
1. **Clone o Repositório**:
   Para baixar o projeto em sua máquina local, use o comando:
   ```bash
   git clone https://github.com/seu-usuario/meu-projeto.git [exemplo]
2. **Abra o Projeto**:
   Abra a pasta do projeto no seu editor de código (particularmente uso o VSCode)

3. **Execute o Projeto**:
   Abra o arquivo "index.html" no navegador para visualizar o projeto.

### ✨ Visualização do Projeto e suas funcionalidades:
A etapa visual neste projeto não foi o foco. Com uma simples página, o foco estava nas funcionalidades necessárias, como o campos de inserção, botões e bloco para visualização das informações manipuladas. 

![Screenshot 2025-01-28 171932](https://github.com/user-attachments/assets/c7097967-5e52-4532-a8f9-275a547bfc1b)
![Screenshot 2025-01-28 171958](https://github.com/user-attachments/assets/44859e16-bdbd-4db6-a53b-f854f144aa57)
![Screenshot 2025-01-28 172006](https://github.com/user-attachments/assets/e0ccfe8c-3e0e-4001-86cd-a8b1fbe4a416)

#### Projeto 2: 
Seguindo a mesma ideia do projeto 1. Este contém uma interface mais 'bonita' e alguns estilos a mais, como detalhes na listagem e uma funcionalidade que verifica se a palavra ou frase escrita já está inserida na lista. 
![Screenshot 2025-02-07 010147](https://github.com/user-attachments/assets/e7d85cba-b09f-45be-af8f-59848ddbbc09)




