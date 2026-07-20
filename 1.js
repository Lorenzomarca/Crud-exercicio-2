const prompt = require('prompt-sync')();
 let alunos = [];

function buscarAluno(nome) {
    let nomeProcurado = nome.toLowerCase();
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nomeProcurado) {
            return alunos[i];
        }
    }
    return undefined;
}

function calcularMedia(aluno) {
    if (!aluno.notas || aluno.notas.length === 0) {
        return 0;
    }
    let soma = 0;
    for (let i = 0; i < aluno.notas.length; i++) {
        soma += aluno.notas[i];
    }
    return soma / aluno.notas.length;
}

function situacao(media) {
    if (media >= 6) {
        return "APROVADO";
    } else if (media >= 4) {
        return "RECUPERACAO";
    } else {
        return "REPROVADO";
    }
}

function cadastrarAluno() {
    let nome = prompt("Digite o nome do aluno:");
    if (!nome) return;

    let alunoExistente = buscarAluno(nome);
    if (alunoExistente) {
        console.log("Erro: Este aluno já está cadastrado!");
        return;
    }

    alunos.push({ nome: nome, notas: [] });
    console.log("Aluno \"" + nome + "\" cadastrado com sucesso!");
}

function listarAlunos() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        return;
    }

    let texto = "=== ALUNOS CADASTRADOS ===\n";
    for (let i = 0; i < alunos.length; i++) {
        texto += "- " + alunos[i].nome + "\n";
    }
    console.log(texto);
}

function removerAluno() {
    let nome = prompt("Digite o nome do aluno que deseja remover:");
    if (!nome) return;

    let aluno = buscarAluno(nome);
    if (!aluno) {
        console.log("Aluno não encontrado!");
        return;
    }

    let posicao = alunos.indexOf(aluno);
    alunos.splice(posicao, 1);
    console.log("Aluno \"" + aluno.nome + "\" removido com sucesso!");
}

function lancarNota() {
    let nome = prompt("Lançar nota para qual aluno?");
    if (!nome) return;

    let aluno = buscarAluno(nome);
    if (!aluno) {
        console.log("Aluno não encontrado!");
        return;
    }

    let notaInput = prompt("Digite a nota (0 a 10) para o aluno " + aluno.nome + ":");
    if (notaInput === null) return;
    
    let nota = parseFloat(notaInput);
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Nota inválida! Deve ser um número entre 0 e 10.");
        return;
    }

    aluno.notas.push(nota);
    console.log("Nota " + nota + " lançada para " + aluno.nome + "!");
}

function verBoletim() {
    let nome = prompt("Ver boletim de qual aluno?");
    if (!nome) return;

    let aluno = buscarAluno(nome);
    if (!aluno) {
        console.log("Aluno não encontrado!");
        return;
    }

    let media = calcularMedia(aluno);
    let sit = situacao(media);
    let notasFormatadas = aluno.notas.length > 0 ? aluno.notas.join(", ") : "Sem notas lançadas";

    console.log(
        "=== BOLETIM ===\n" +
        "Nome: " + aluno.nome + "\n" +
        "Notas: [" + notasFormatadas + "]\n" +
        "Média: " + media.toFixed(2) + "\n" +
        "Situação: " + sit
    );
}

function totalDeAlunos() {
    console.log("Total de alunos cadastrados: " + alunos.length);
}

function mediaGeralDaTurma() {
    if (alunos.length === 0) {
        console.log("Não há alunos para calcular a média da turma.");
        return;
    }

    let somaMedias = 0;
    for (let i = 0; i < alunos.length; i++) {
        somaMedias += calcularMedia(alunos[i]);
    }

    let mediaGeral = somaMedias / alunos.length;
    console.log("Média Geral da Turma: " + mediaGeral.toFixed(2));
}

function listarAprovados() {
    let texto = "=== ALUNOS APROVADOS ===\n";
    let encontrou = false;

    for (let i = 0; i < alunos.length; i++) {
        let media = calcularMedia(alunos[i]);
        if (situacao(media) === "APROVADO") {
            texto += "- " + alunos[i].nome + " (Média: " + media.toFixed(2) + ")\n";
            encontrou = true;
        }
    }

    if (!encontrou) {
        console.log("Ainda não há alunos aprovados.");
    } else {
        console.log(texto);
    }
}

function submenuCadastro() {
    let opcao;
    do {
        opcao = parseFloat(prompt(
            "=== MENU CADASTRO ===\n" +
            "1 - Cadastrar aluno\n" +
            "2 - Listar alunos\n" +
            "3 - Remover aluno\n" +
            "0 - Voltar"
        ));

        switch (opcao) {
            case 1: cadastrarAluno(); break;
            case 2: listarAlunos(); break;
            case 3: removerAluno(); break;
            case 0: break;
            default: console.log("Opção inválida!");
        }
    } while (opcao !== 0);
}

function submenuNotas() {
    let opcao;
    do {
        opcao = parseFloat(prompt(
            "=== MENU NOTAS ===\n" +
            "1 - Lançar nota\n" +
            "2 - Ver boletim do aluno\n" +
            "0 - Voltar"
        ));

        switch (opcao) {
            case 1: lancarNota(); break;
            case 2: verBoletim(); break;
            case 0: break;
            default: console.log("Opção inválida!");
        }
    } while (opcao !== 0);
}

function submenuRelatorios() {
    let opcao;
    do {
        opcao = parseFloat(prompt(
            "=== MENU RELATÓRIOS ===\n" +
            "1 - Total de alunos\n" +
            "2 - Média geral da turma\n" +
            "3 - Listar aprovados\n" +
            "0 - Voltar"
        ));

        switch (opcao) {
            case 1: totalDeAlunos(); break;
            case 2: mediaGeralDaTurma(); break;
            case 3: listarAprovados(); break;
            case 0: break;
            default: console.log("Opção inválida!");
        }
    } while (opcao !== 0);
}

function menuPrincipal() {
    let opcao;
    do {
        opcao = parseFloat(prompt(
            "=== MENU PRINCIPAL ===\n" +
            "1 - Cadastro\n" +
            "2 - Notas\n" +
            "3 - Relatórios\n" +
            "0 - Sair"
        ));

        switch (opcao) {
            case 1: submenuCadastro(); break;
            case 2: submenuNotas(); break;
            case 3: submenuRelatorios(); break;
            case 0: 
                console.log("Saindo do sistema... Até logo!"); 
                break;
            default: 
                console.log("Opção inválida!");
        }
    } while (opcao !== 0);
}

menuPrincipal();