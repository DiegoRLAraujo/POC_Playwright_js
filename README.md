# POC_Playwright_js
 POC - Proof of Concept - Automação de testes - Playwright - JS


Esta POC está em sua estrutura simples, e tem a finalidade de apenas apresentar uma automação de testes utilizando o Framework Microsoft Playwright escrito em JavaScript

Objetivos : {
        https://demoqa.com
    1 *Acesso e Interação com a Home*;
    2 *Interação com o menu <'widgets'>*;
    3 *Preenchimento e envio do formulário*;
    4 *Interação com API CRUD utilizando a documentação Swagger*.
}

Orientações a manter boas práticas : {
    *Respeite Page Objects (estrutura - organizada);
    *Clean Code (comentários apenas com o essêncial);
    *Sigas os padrões de Orientação a Objetos (OOP - Object-Oriented Programming);
    *Identações claras, organizadas, alinhadas;
    *Realize CodeReview (Análise estática);
    *Realize testes de Unidades (Unitário / Componentes /Integração entre componentes).
}

Repositórios : {
    *A Branch Main sempre será a principal e somente sofrerá alterações, após Code Review antes da PullReques;
    *A Branch develop, por default, sofre as alterações diretas;
    *Caso necessário, cria-se uma nova Branch.
}

dependências : {
    *Playwright
    *Node.JS
    *npm
    *github
}

Referências : {
    https://www.w3.org
    https://www.w3.org/TR/webdriver1/
    https://www.playwright.dev/
    https://github.com/microsoft/playwright
}

Definições de Títulos do teste : {
    *Utilizar convenções padronizadas. Sugestão.: (snake_case);
    *O título deve ser escrito em português;
    *Cada teste deve ter um título que seja descritivo e que seja possível identificar objetivamente o que está sendo testado;
    *Caso esteja tratando (testando) qualquer item de um gerenciador de projetos como por exemplo.: Jira;
        1. Deve-se adotar padrões únicos com o título+ID de cada item da funcionalida presente no gerenciador de projeto, trantando assim da mesma funcionalidade.
}

=================================================================================================================
|                                                                                                               |
|                                            Acadêmico - Boa leitura:                                           |
|                                                                                                               |
=================================================================================================================

        Não existe tecnologia perfeita, existe a tecnologia que melhor atende a determinadas necessidades.

1. Porque automatizar os testes?
    *A automação tem o intuito de diminuir erros e falhas humanas em tarefas extensas e repetitivas, causadas por exaustão, e outras variáveis de condições humanas.

2. Provê:
    *Eficiência exata nas execuções dos testes anteriores = Executará os mesmos fluxos que foram programados;
    *Concede tempo hábil ao profissional;
    *Dispõe condições ao profissional de.: 
        1-Análises;
        2-Investigações de casos;
        3-Planejamento para as próximas funcionalidades;
    *Feedback mais rápido sobre a qualidade da aplicação.;
    *Promoção de Shift-left, incentivando os desenvolvedores a entregarem códigos de alta qualidade;
    *Amplia as características de qualidade não funcionais (Performance, confiabilidade);
    *Reduz a necessidade de testes manuais regressivos (Repetitivos);
    *Minimiza riscos nos testes manuais regressivos;
    *Atribui mais foco nas tarefas e atividades, prevenindo Erros, falhas e Bugs.

3. O que automatizar?
    *Todos os testes em seus tipos e níveis são passíveis, entretanto, deve-se priorizar as considerações dos testes críticos e sensíveis a falhas humanas, sendo principalmente o CORE da aplicação;
    *Tarefas e testes repetitivos, extensos, exaustivos.


        =================================================================================================================
        |                                                                                                               |
        |                    Tópicos considerados para ponderação entre as ferramentas de automação:                    |
        |                                                                                                               |
        =================================================================================================================

1.	É paga ou Free/Open Source;

2.	Como é mantida? – Qual empresa mantém e dá suporte;

3.	Como é a comunidade de desenvolvedores? – Muitas vezes a documentação não obtém todas as informações do dia a dia;

4.	Linguagem. Qual linguagem suporta?

5.	Integração. Integra bem ou não com demais ferramentas?

6.	Cobertura de tipos de testes;
    a.	Funcionais;
    b.	Usabilidade;
    c.	Exploratório;

7.	Cobertura de níveis de testes:
    a.	Unidade:
        i.	Análise estática (análise de sintaxe);
        ii.	Unitários;
        iii.Componentes;
        iv.	Integração entre componentes;

    b.	Integração entre sistemas – Frontend / Backend:
        i.	API – Arquitetura;
            1.Rest?;
            2.Soap?;
        ii.	BFF – Backend For FrontEnd:
            1. Micros-serviços consumidos diretamente pelo FrontEnd.
                a.Realizando determinadas requisições para o Backend, obtendo assim, informações que precisa apresentar na interface.
        iii. API Micros-serviços – São Micro Serviços que o Frontend não consome diretamente, porém, necessita de suas existências. Estes micros serviços são puramente tratados e engenhados na camada Backend – Backend. Ou seja, API puramente de micros serviços que é executada e consumida apenas de um banco de dados com outros Servers que não são apresentados na Interface do Usuário.

    c.	Sistema:
        i.	Não Funcionais:
            1.	Performance:
                a.	Carga;
                b.	Estresse;
                c.	Desempenho;
                d. Resistência.
        ii.	Ui – User interface / Interface do usuário:
            1.	Funcionais:
                a.	Validações técnicas de cada funcionalidade dos componentes visíveis projetados.
                    i.	“Se determinado componente está realizando, ou não, a funcionalidade que foi projetado”.
                b.	Atendendo os critérios de sistema técnicos e critérios de aceite.
                    i.	Visão técnica (Profissional técnico /Q.A – Profissional Ubíquo entre desenvolvedor e Produto).

    d.	Aceitação:
        i.	Validações das realizações de cada funcionalidade projetada dos componentes visíveis.
        ii.	Atendendo os critérios de aceite (requisitos de regras de negócio).
            1.	Visão de produto (Profissional técnico da área de Produto / Profissional que detém maior conhecimento de regras de negócio).
            2.	Preferencialmente, o teste de aceite deve ser realizado pelos usuários previstos. – P.O / P.M. / Steakholders
        iii.	As principais formas de teste de aceite são:
            1.	Teste de Aceite do Usuário (UAT);
            2.	Teste de Aceite Operacional;
            3.	Teste de Aceite Contratual e Normativo;
            4.	Teste Beta;
            5.	Teste Alfa.

    e.	Para evitar a sobreposição de atividades de testes, os níveis de testes são diferenciados pelos atributos:
        i.	    Objeto de teste;
        ii.	   Objetivos do teste;
        iii.   Base de teste;
        iv.	   Defeitos e falhas;
        v.	    Abordagem e responsabilidades;
        vi.	   Visão de usuário;
        vii.   Visão de Produto;
        viii.  Visão de desenvolvimento;

8.	Cobertura de Plataformas
    a.	Ui
        i.	Browser’s
            1.	Google
            2.	Fire Fox
            3.	Safari
        ii.	Web desktop
        iii. Web responsivo (simulador – iOS / Androind)

    b.	APP Mobil – Aplicativo Mobile - Simuladores / Emuladores
        1.	iOS
        2.	Android

    c.	Definir modelos de cada sistema operacional Mobile (iOS / Android), pois interfere em.:
        i.	Dimensões (Pequeno / Grande)
        ii.	Desempenho
            1.	Velocidade performática
            2.	Comportamento, se trava muito ou não, se há apresenta BUG’s por motivo de limitações de Hardwares do dispositivo device.




            =================================================================================================================
            |                                                                                                               |
            |                                            Nota de Observação                                                 |
            |                                                                                                               |
            =================================================================================================================
    
	Pentest’s, não foram considerados, pois, requer de um profissional especializado no assunto em técnicas de alta performance em erros, falhas, fragilidades, vulnerabilidades, ataques, invasões e penetrações de sistemas por camadas, carga, estresse e demais táticas maliciosas.
Entretanto, é um nível de teste (Segurança), muito importante a ser avaliado.

	#A análise de segurança neste tocante, está avaliada em níveis básicos e medianos comumente aceitáveis ao mercado, como por exemplo.:
1.	Engenharia social:
    a.	Verificações de avisos do sistema. Exemplo.:
    i.	Por vezes Sistemas bancários apresentam informativos em Pop-ups, ou qualquer meio de comunicação, sobre avisos de procedimentos que estão fora de suas diretrizes. Procedimentos fora de diretrizes são como por exemplo.:
        1.	Ligações pedindo dados sensíveis de documentos, cartões, dados bancários, e até mesmo Login e senha em supostas verificações de conta;
        2.	Entre outras formas de fraudes estelionatárias.

2.	Avaliação técnica de práticas adotadas para validações de autenticações:
    a.	Quais tipos, de práticas estão sendo abordadas pela companhia para autenticação de segurança?

3.	Validação de estrutura de e-mail.
    a.	Estrutura – Usuário (Quantidade e tipos de Caracteres)
    b.	Conectivo
    c.	Domínio
    d.	Aceita-se concatenações, para variações de e-mails sem ter que mudar o endereçamento?
    i.	Prática comum para e-mails de domínio Google.
        1.	Permite fornecer inúmeros e-mails, entretanto, recebendo-os todos em apenas uma única caixa de endereço de e-mail.

4.	Validação de repetição de e-mail em cadastros com demais dados diferentes;
    a.	Tenta-se realizar mais de um cadastro, usando sempre o mesmo e-mail (inalterado), mudando os demais dados de cadastro como, nome, telefone, etc.

5.	Validação de cadastro repetido – Repetir todos os dados idênticos;

6.	Validações entre Usuário e senha (Combinações):
    b.	Verificação de alguma das informações estão erradas (OU usuário, OU senha, podendo ser apenas um único caractere diferente, ou o imput por completo). Resultado negativo = Sistema não pode fornecer as permissões de acesso.
    a.	Verificação de ambas informações (Usuário e senha) estão corretas. Resultado positivo = Obtém as permissões necessárias de acesso;

7.	Nível de validações de senhas - Inputs de.:
    a.	Quantidade mínima e máxima geral de caracteres;
    b.	Tipo de caracteres aceitáveis;
    c.	Alfabeto (letras);
    d.	Números;
    e.	Caracteres especiais;
    f.	Quantidade Mínima e máxima de cada caractere que está sendo aceito.

8.	Validações de Token’s:
    a.	Legíveis por humanos:
    b.	Criptografados – Legíveis apenas por máquinas.

9.	Validações de Beares Tokens.

10.	Tentativas de acesso ao sistema em questão.:
    a.	Atendendo a todos os critérios válidos e aceitos citados acima;
    b.	Input de dados não válidos, aceitos e não aceitos citados acima. Exemplo.:
    i.	Caracteres especiais, podem ser aceitos apenas.:
        1.	!@#
    ii.	E todos os demais caracteres especiais encontrados em todas as fontes, não poderão ser aceitos.

11.	Tentativas de acesso ao sistema em questão, em branco – Ou seja.:
    a.	O usuário não realizou nenhum tipo de cadastro e tenta o acesso;
    b.	O usuário realizou o cadastro, más, ao acessar o sistema não informa nenhum tipo de dado;
    c.	Resultado de ambos a cima.: Sistema não pode permitir o acesso ao sistema.

12.	Análise e validações de Protocolos de segurança WEB, Exemplo.:
    a.	HTTP;
    b.	HTTPS;

13.	Análise de comunicações fechadas (VPN);

14.	Segurança em pagamentos (On-line):
    a.	Atender as diretrizes padronizadas de segurança de pagamentos: Payment Card Industry Data Security Standard – (PCI DSS).

    *Estes níveis e análise de segurança deste tópico acima, são cobertos dentro de uma série de suítes de testes planejados que “presumivelmente” podem ser automatizados.
        a.  Sujeitos a análise de:
        b.  Riscos;
        c.  Prioridades
        d.  Capacite (Tempo, dificuldade e esforço) para o desenvolvimento da automação solicitada.



        =================================================================================================================
        |                                                                                                               |
        |                               Possíveis riscos do uso da automação de testes                                  |
        |                                                                                                               |
        =================================================================================================================
   	

1.	Possíveis riscos do uso da automação de testes.:

    a.	A simples aquisição de uma ferramenta não garante o sucesso. Cada nova ferramenta exigirá esforço para obter benefícios reais e duradouros (p. ex., para a introdução, manutenção e treinamento da ferramenta). Há também alguns riscos que precisam ser analisados e atenuados.

    b.	Expectativas irreais sobre os benefícios de uma ferramenta (incluindo funcionalidade e facilidade de uso);

    c.	Estimativas imprecisas de tempo, custos e esforço necessários para introduzir uma ferramenta, manter scripts de teste e alterar o processo de teste manual existente;

    d.	Usar uma ferramenta de teste quando o teste manual é mais apropriado;

    e.	Confiar demais em uma ferramenta, por exemplo, ignorando a necessidade do pensamento crítico humano;

    f.	A dependência do fornecedor da ferramenta, que pode fechar as portas, aposentar a ferramenta, vender a ferramenta para outro fornecedor ou fornecer um suporte deficiente (p. ex., respostas a consultas, atualizações e correções de defeitos);

    g.	Usar um software de código aberto que pode ser abandonado, o que significa que não há mais atualizações disponíveis, ou que seus componentes internos podem exigir atualizações bastante frequentes como um desenvolvimento adicional;

    h.	A ferramenta de automação não é compatível com a plataforma de desenvolvimento;

    i.	Escolha de uma ferramenta inadequada que não cumpra os requisitos normativos e/ou as normas de segurança.

    j.	O DevOps tem seus riscos e desafios, que incluem:
    i.	O pipeline de entrega de DevOps deve ser definido e estabelecido;
    ii.	As ferramentas de CI/CD devem ser introduzidas e mantidas;
    iii.	A automação de testes requer recursos adicionais e pode ser difícil de estabelecer e manter. Embora o DevOps venha com um alto nível de testes automatizados, os testes manuais - especialmente da perspectiva do usuário - ainda serão necessários.
    k.	

2.	Apresentar para equipe.
    a.	Coletar questionamentos da equipe para evidenciar elementos que possivelmente não foi engenhado, e procurar soluções para as lacunas.




