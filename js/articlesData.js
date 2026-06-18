const articles = [
  {
    id: '1',
    title: 'A Introdução ao Desenvolvimento Moderno',
    summary: 'Um guia prático sobre as principais ferramentas e conceitos para construir aplicações web incríveis nos dias de hoje.',
    content: `
      <h2>O Cenário Atual</h2>
      <p>O desenvolvimento web mudou drasticamente. Ferramentas que usávamos há 5 anos hoje parecem obsoletas. Mas o que realmente importa é entender os fundamentos: HTML semântico, CSS moderno e JavaScript funcional.</p>
      
      <h2>CSS Evoluiu</h2>
      <p>Com Flexbox e Grid, o layout na web deixou de ser um pesadelo. Além disso, as Custom Properties (variáveis CSS) nos dão poder para criar temas dinâmicos sem a necessidade imediata de pré-processadores pesados em projetos menores.</p>
      
      <h2>Conclusão</h2>
      <p>O desenvolvimento moderno não é apenas sobre as ferramentas, mas sobre criar experiências melhores para o usuário com código limpo e performático.</p>
    `,
    date: '2023-10-15',
    readTime: '4 min',
    tags: ['Web Dev', 'CSS', 'JavaScript']
  },
  {
    id: '2',
    title: 'Como Melhorar a Acessibilidade do seu Site',
    summary: 'Aprenda técnicas simples e efetivas para garantir que o seu conteúdo seja acessível a todos os usuários.',
    content: `
      <h2>O que é Acessibilidade (A11y)?</h2>
      <p>Acessibilidade não é apenas uma "boa prática", é um direito. Tornar seu site acessível significa que pessoas com deficiências visuais, motoras, auditivas ou cognitivas poderão utilizá-lo sem barreiras.</p>
      
      <h2>Dicas Rápidas</h2>
      <ul>
        <li>Use atributos <code>alt</code> em imagens.</li>
        <li>Garanta um bom contraste de cores.</li>
        <li>Navegação por teclado é fundamental. Teste usar seu site usando apenas a tecla Tab.</li>
        <li>Use HTML semântico (tags de cabeçalho estruturadas corretamente).</li>
      </ul>
      
      <h2>Ferramentas</h2>
      <p>Lighthouse, Axe e leitores de tela nativos como o VoiceOver ou NVDA podem ser grandes aliados durante o desenvolvimento.</p>
    `,
    date: '2023-11-20',
    readTime: '6 min',
    tags: ['Acessibilidade', 'HTML', 'UX']
  },
  {
    id: '3',
    title: 'Gerenciamento de Estado no Front-end',
    summary: 'Uma visão geral das diferentes abordagens para lidar com o estado em aplicações JavaScript modernas.',
    content: `
      <h2>O Desafio do Estado</h2>
      <p>Conforme as aplicações web se tornaram mais complexas, o gerenciamento de estado virou um dos principais desafios. Para onde vai o dado? Como ele flui?</p>
      
      <h2>Vanilla JS vs Frameworks</h2>
      <p>Em Vanilla JS, podemos usar padrões simples como o Observer, ou até mesmo Custom Events. Já em ecossistemas de frameworks, temos Context APIs, Redux, Zustand, Pinia, etc.</p>
      
      <h2>A Escolha Certa</h2>
      <p>A resposta curta: depende. Para projetos simples, não super-engenhariar a solução. Comece com o estado local e escale para ferramentas globais apenas quando sentir dor no compartilhamento de dados.</p>
    `,
    date: '2024-01-10',
    readTime: '8 min',
    tags: ['JavaScript', 'Arquitetura']
  }
];

export default articles;
