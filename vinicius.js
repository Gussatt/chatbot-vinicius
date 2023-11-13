const readline = require('readline');


// Inicializa o indexador de questões
var questionIndex = 1;

// Define a set of predefined questions and corresponding responses
var predefinedQuestions = {
  '1': 'Vamos começar por seu nome, digite-o por extenso!',
  '2': `Tudo bem ${nome}, agora informe o seu número de celular com o DDD!`,
  '3': '',
  'exit': 'Saindo da criação de currículo! Obrigado e até mais!'
};


// Function to display questions and get user input
function askQuestion(questionKey) {
  const question = predefinedQuestions[questionKey];
  if (question) {
    console.log(`Vinícius: ${question}`);
  } else {
    console.log(`Vinícius: Eu não sei o que perguntar.`);
  }
}

// Função handler para lidar com as respostas do usuário
function handleUserResponse(response) {
  console.log(`Usuário: ${response}`);
  if (questionIndex === 1) {
    var nome = response.split(/(\s+)/);
    nome = nome[0];
  }
}

// Função Main para rodar o código
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function askNextQuestion() {
    askQuestion(questionIndex.toString());
    rl.question('Sua resposta: ', (response) => {
      handleUserResponse(response);

      // Ir para próxima questão ou sair
      if (response.toLowerCase() === 'sair') {
        console.log('Vinícius: Saindo da criação de currículo! Obrigado e até mais!');
        rl.close();
      } else {
        questionIndex++;
        askNextQuestion();
      }
    });
  }

  console.log('Vinícius: Olá! Tudo bem? Sou o Vinícius, o assistente criador de currículos! Vamos começar a criação do seu currículo!');
  askNextQuestion();
}

// Começa o chatbot
main();