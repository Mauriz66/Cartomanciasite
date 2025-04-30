// Frequently Asked Questions for various sections
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs = {
  // FAQs for Plano Conexão Cigana
  planoConexao: [
    {
      question: "Como funciona o plano de assinatura?",
      answer: "O plano Conexão Cigana é uma assinatura mensal no valor de R$49,90. Ao assinar, você recebe automaticamente 5 perguntas mensais, desconto de 10% em todos os serviços, atendimento prioritário e acesso ao app exclusivo."
    },
    {
      question: "As perguntas mensais acumulam para o próximo mês?",
      answer: "Não, as 5 perguntas mensais não são cumulativas. Recomendamos que utilize todas dentro do mês vigente para aproveitar ao máximo seu plano."
    },
    {
      question: "Como funciona o app exclusivo para assinantes?",
      answer: "Após assinar o plano, você receberá um link para download do aplicativo e um código de ativação. No app, terá acesso a um calendário interativo com dicas diárias, vídeos semanais com orientações espirituais e um ritual mensal exclusivo."
    },
    {
      question: "Posso cancelar a assinatura quando quiser?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento. O acesso aos benefícios continuará ativo até o final do período já pago."
    }
  ],
  
  // FAQs for Tarot
  tarot: [
    {
      question: "Qual a diferença entre o jogo de 5 e o de 10 cartas?",
      answer: "O jogo de 5 cartas é mais objetivo e focado em uma questão específica, ideal para decisões pontuais. Já o jogo de 10 cartas oferece uma análise mais profunda e abrangente, explorando diferentes aspectos da sua vida ou situação."
    },
    {
      question: "Como me preparar para uma consulta de tarot?",
      answer: "Para aproveitar ao máximo sua consulta, reserve um momento tranquilo onde não será interrompido. Prepare suas perguntas com antecedência, sendo o mais específico possível. Mantenha a mente aberta para receber as orientações."
    },
    {
      question: "Com que frequência posso fazer consultas?",
      answer: "Recomendo um intervalo mínimo de 3 semanas entre consultas sobre o mesmo tema, para dar tempo às energias se manifestarem. Para temas diferentes, não há restrição, mas é importante não se tornar dependente das leituras."
    },
    {
      question: "As consultas online têm a mesma eficácia?",
      answer: "Sim, as consultas online têm a mesma eficácia que as presenciais. A energia não está limitada pelo espaço físico, e a conexão espiritual acontece independentemente da distância."
    }
  ],
  
  // FAQs for Leituras
  leituras: [
    {
      question: "Qual o melhor momento para fazer uma leitura mensal?",
      answer: "O ideal é fazer a leitura mensal nos últimos dias do mês anterior ou nos primeiros dias do mês em questão. Isso permite que você se planeje adequadamente e aproveite melhor as energias do período."
    },
    {
      question: "A leitura de aniversário precisa ser feita exatamente no dia do aniversário?",
      answer: "Não necessariamente. A leitura pode ser feita até 15 dias antes ou após seu aniversário, pois esse é o período em que as energias do novo ciclo começam a se manifestar mais intensamente."
    },
    {
      question: "Posso fazer uma leitura mensal e uma de aniversário no mesmo mês?",
      answer: "Sim, é possível e até recomendável em seu mês de aniversário. A leitura de aniversário trará uma visão do ano inteiro, enquanto a mensal focará em detalhes específicos do mês em questão."
    },
    {
      question: "Como aproveitar melhor as informações da leitura de ciclos?",
      answer: "Anote os principais pontos durante a consulta ou grave (com autorização prévia). Revise periodicamente as orientações ao longo do período analisado e observe como as energias se manifestam em sua vida. Isso aumenta sua consciência sobre os ciclos e melhora sua capacidade de aproveitá-los."
    }
  ],
  
  // FAQs for Terapias
  terapias: [
    {
      question: "Qual terapia é mais indicada para mim: Thetahealing ou Reiki?",
      answer: "O Thetahealing é mais indicado para transformação de crenças limitantes, padrões de comportamento e traumas emocionais profundos. Já o Reiki é ideal para harmonização energética, equilíbrio dos chakras e promoção de bem-estar físico e emocional. Durante a consulta inicial, podemos avaliar juntos qual abordagem será mais benéfica para sua situação específica."
    },
    {
      question: "Quantas sessões são necessárias para obter resultados?",
      answer: "Cada pessoa responde de forma única às terapias energéticas. Algumas pessoas relatam mudanças significativas após uma única sessão, enquanto outras se beneficiam de um tratamento mais contínuo. Geralmente, recomendo um mínimo de 3 sessões para avaliar os resultados iniciais e, a partir daí, definirmos juntos a frequência ideal para seu caso."
    },
    {
      question: "Como são realizadas as sessões de terapia online?",
      answer: "As sessões são realizadas via chamada de vídeo, onde conduzo o processo terapêutico à distância. No caso do Thetahealing, trabalharemos com diálogos e meditações guiadas. Para o Reiki, você ficará em posição confortável enquanto realizo a canalização e envio da energia. A eficácia é a mesma de uma sessão presencial, pois a energia não está limitada pelo espaço físico."
    },
    {
      question: "Posso combinar diferentes terapias com leituras oraculares?",
      answer: "Sim, e essa abordagem integrada costuma trazer resultados muito positivos. As leituras oraculares oferecem orientação e insights sobre sua situação, enquanto as terapias trabalham diretamente na transformação energética. Podemos criar um plano personalizado que combine ambas as abordagens para atender suas necessidades específicas."
    }
  ],
  
  // General FAQs
  gerais: [
    {
      question: "Como são realizados os atendimentos?",
      answer: "Todos os atendimentos são realizados online via WhatsApp (áudio ou texto para leituras) ou chamada de vídeo (para terapias energéticas). Essa modalidade oferece conforto, praticidade e a mesma eficácia dos atendimentos presenciais."
    },
    {
      question: "Qual a forma de pagamento?",
      answer: "Aceitamos PIX, transferência bancária e cartões de crédito (via link de pagamento). O pagamento deve ser realizado após a confirmação do agendamento e antes do início da consulta ou terapia."
    },
    {
      question: "Quanto tempo preciso esperar para agendar uma consulta?",
      answer: "O tempo de espera varia conforme a agenda. Assinantes do Plano Conexão Cigana têm prioridade no agendamento. Em geral, consultas podem ser agendadas em até 3-5 dias úteis, mas recomendamos sempre verificar a disponibilidade atual via WhatsApp."
    },
    {
      question: "É possível fazer perguntas sobre outras pessoas?",
      answer: "Consultas sobre terceiros só são realizadas quando há uma conexão direta com a sua vida e quando a intenção é positiva e construtiva. Não realizamos consultas com objetivo de invadir a privacidade de outros ou com intenções negativas."
    },
    {
      question: "As previsões são garantidas de acontecer?",
      answer: "As leituras oraculares revelam tendências e energias presentes em determinado momento, mas o livre-arbítrio sempre existe. As informações recebidas devem ser entendidas como orientação para suas escolhas, não como um destino imutável."
    },
    {
      question: "Posso gravar minha consulta ou sessão?",
      answer: "Sim, é permitido gravar as consultas para uso pessoal, desde que solicitado e autorizado previamente. Isso pode ser especialmente útil para revisar as orientações recebidas posteriormente."
    }
  ]
};
