
        const turmas = {
            "1TDS1": [
                "ALEJANDRA TAIMAN BARROS", "AMANDA GOMES MECHI", "ANA BEATRIZ DE SOUZA DE OLIVEIRA",
                "ANA CAROLINA GARCIA FREITAS", "ANA JULIA PINHEIRO DEMATTEI", "ANDRÉ LUCCA SANTOS",
                "ANNA BEATRIZ LEME ALVES", "ANNA BEATRIZ RIBEIRO VALENTIM", "BEATRIZ LIMA",
                "BERNARDO GABRIEL DE MORAES MARQUES", "BRUNA NASCIMENTO SAVELLI", "CAIO GABRIEL LACERDA SILVA",
                "CARLOS EDUARDO FERRAZ AUGUSTO", "ENZO ALVES TURCOVIC", "EVELYN GONÇALVES DE OLIVEIRA",
                "FLAVIA REGINA ALEXANDRE MENDES", "GIOVANNA ALBA GOMES", "GIOVANNA CARON DE BARROS",
                "ISABELLA BORIN DE MORAES ROSA", "JOÃO VITOR PORTO SALES", "JÚLIA ANDRADE GUARNIERI",
                "JULIA SIMÕES NEVES", "KEVIN EZIQUIEL LIMA", "LAURA FERREIRA VIOLLA",
                "LEONARDO PEDRO DE OLIVEIRA", "LUANA DOMENEGHETTI", "LUCAS ZANI DA COSTA LUZ",
                "LUIZ GABRIEL LOPES CARVALHO", "LUIZ HENRIQUE RICCI AURELIANO", "LUIZA NICOLUCI SCHETTINI",
                "MARIA EDUARDA DA SILVA PARMA"
            ]
            // Adicionar mais turmas como necessário
        };

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // swap
            }
        }

        function createGroups(alunos) {
            shuffle(alunos);
            const grupos = [];
            for (let i = 0; i < 5; i++) { // Create 5 groups of 5 students each
                grupos.push(alunos.slice(i * 5, (i + 1) * 5));
            }
            grupos.push(alunos.slice(25)); // The last group gets the remaining 6 students
            return grupos;
        }

        function generateGroups() {
            const selectedTurma = document.getElementById('turmaSelect').value;
            const grupoContainer = document.getElementById('grupoContainer');
            grupoContainer.innerHTML = ''; // Clear previous groups
            const grupos = createGroups([...turmas[selectedTurma]]);
            grupos.forEach((grupo, index) => {
                const div = document.createElement('div');
                div.classList.add('grupo');
                div.innerHTML = `<strong>Grupo ${index + 1}</strong><ul>` + grupo.map(nome => `<li>${nome}</li>`).join('') + '</ul>';
                grupoContainer.appendChild(div);
            });
        }
    