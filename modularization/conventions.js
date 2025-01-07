// Convenções e boas práticas em JavaScript

// 1. Declarações de Variáveis
// Use const sempre que possível. Utilize let para variáveis mutáveis.
const pi = 3.14;
let count = 0;

// 2. Nomeação de Variáveis e Funções
// Use camelCase para variáveis e funções.
let userName = "John";
function calculateArea(radius) {
    return pi * radius * radius;
}

// 3. Comentários
// Comentários claros e concisos para explicar o código.
// Comentários de linha:
// Esta função calcula a área de um círculo.

// Comentários de bloco:
/* 
   Esta função é usada para calcular a área de uma forma geométrica específica. 
   Aceita o raio como entrada.
*/

// 4. Espaçamento e Identação
// Use 2 ou 4 espaços para identação (mantenha consistente).
if (count > 0) {
  console.log("Contagem positiva.");
} else {
  console.log("Nenhuma contagem ou contagem negativa.");
}

// 5. Uso de Templates Literais
// Utilize templates literais para strings que precisam de interpolação.
const greeting = `Hello, ${userName}!`;

// 6. Estrutura de Pastas e Arquivos
// - Utilize nomes descritivos e claros para pastas e arquivos.
// - Nomes de pastas devem ser escritos em kebab-case (letras minúsculas separadas por hífens).
//   Exemplo: "components", "user-profile", "utils".
// - Arquivos JavaScript devem seguir o padrão camelCase ou kebab-case, com extensão .js ou .mjs.
//   Exemplo: "userController.js", "fetch-data.mjs".

// 7. Evite Variáveis Globais
// Utilize escopos locais sempre que possível para evitar colisões de nomes.
(function() {
    let localVar = "This is local";
    console.log(localVar);
})();

// 8. Manipulação de Arrays
// Use métodos de array como map, filter e reduce para maior legibilidade.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// 9. Manipulação de Objetos
// Utilize spread/rest operators para copiar ou atualizar objetos.
const user = { name: "John", age: 30 };
const updatedUser = { ...user, age: 31 };
console.log(updatedUser);

// 10. Estruturas de Controle
// Sempre utilize chaves em blocos de controle, mesmo se houver apenas uma linha.
if (userName) {
  console.log(`Welcome, ${userName}`);
}

// 11. Tratamento de Erros
// Utilize try/catch para capturar erros previsíveis.
try {
  const result = calculateArea(-1);
  console.log(result);
} catch (error) {
  console.error("Erro ao calcular a área:", error);
}

// 12. Async/Await para Promessas
// Prefira async/await a then/catch para melhor legibilidade.
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

// 13. Modularidade
// Organize seu código em módulos para melhor manutenção.
// Exemplo de exportação:
// export function add(a, b) {
//   return a + b;
// }

// Exemplo de importação:
// import { add } from './math.js';

// 14. Convenções de Commit
// Utilize mensagens de commit claras e no formato padrão (ex.: Conventional Commits).
// Exemplo: "feat: adiciona funcionalidade de login" ou "fix: corrige erro na autenticação".
