# 🏫 Sistema de Gerenciamento Escolar (CRUD)

Um sistema simples e interativo em JavaScript para gerenciar alunos, notas e relatórios de desempenho escolar via terminal ou console do navegador utilizando prompts.

---

## 🚀 Funcionalidades

O sistema está dividido em três grandes módulos acessíveis pelo Menu Principal:

### 1. Menu Cadastro
*   **Cadastrar Aluno:** Permite adicionar novos alunos ao sistema (valida se o aluno já existe para evitar duplicidades).
*   **Listar Alunos:** Exibe a lista com o nome de todos os alunos cadastrados.
*   **Remover Aluno:** Exclui um aluno do sistema com base no nome informado.

### 2. Menu Notas
*   **Lançar Nota:** Permite adicionar notas (com validação de valores entre 0 e 10) para um aluno específico.
*   **Ver Boletim:** Exibe o histórico de notas, a média calculada e a situação do aluno:
    *   `APROVADO`: Média igual ou maior que 6.0.
    *   `RECUPERAÇÃO`: Média entre 4.0 e 5.9.
    *   `REPROVADO`: Média abaixo de 4.0.

### 3. Menu Relatórios
*   **Total de Alunos:** Exibe a quantidade de estudantes cadastrados.
*   **Média Geral da Turma:** Calcula e exibe a média combinada de todos os alunos que possuem notas.
*   **Listar Aprovados:** Filtra e exibe apenas os alunos que atingiram os critérios de aprovação.

---

## 🛠️ Tecnologias Utilizadas

*   **Linguagem:** JavaScript (ES6+)
*   **Interface:** `prompt()` e `alert()` nativos do navegador

---

## 📦 Como Executar o Projeto

Como o projeto utiliza apenas JavaScript puro executado no lado do cliente, você pode rodá-lo facilmente de duas maneiras:

### Opção 1: Pelo Console do Navegador (Mais Rápido)
1. Abra qualquer navegador (Chrome, Edge, Firefox, etc.).
2. Pressione `F12` (ou clique com o botão direito e selecione **Inspecionar**) e vá até a aba **Console**.
3. Copie todo o código do script JavaScript.
4. Cole no console e pressione `Enter`.

### Opção 2: Criando um arquivo HTML
1. Crie um arquivo chamado `index.html` na sua máquina.
2. Cole a estrutura básica e inclua o seu código dentro da tag `<script>`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Gerenciamento Escolar</title>
</head>
<body>
    <h1>Sistema Escolar Ativo!</h1>
    <p>Use os menus na tela para interagir.</p>

    <script>
        // COLE O SEU CÓDIGO JAVASCRIPT AQUI
    </script>
</body>
</html>
