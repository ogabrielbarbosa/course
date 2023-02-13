import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../../utils/usePersistedState';

import { ContainerPoliticas, Title, Paragrafh, List, SubTitle, LastParagrafh } from './styles';

import GlobalStyle from '../../styles/global';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

function Politica() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContainerPoliticas>
        <Title>Política Privacidade</Title>

        <Paragrafh>
          A sua privacidade é importante para nós. É política do Plataforma de curso respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Plataforma de curso, e outros sites que possuímos e operamos.
        </Paragrafh>

        <Paragrafh>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </Paragrafh>

        <Paragrafh>
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </Paragrafh>

        <Paragrafh>
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </Paragrafh>

        <Paragrafh>
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </Paragrafh>

        <Paragrafh>
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
        </Paragrafh>

        <Paragrafh>
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
        </Paragrafh>

        <li><List>O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.</List></li>
        <li><List>Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</List></li>
        <li><List>Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</List></li>
        <li><List>Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.</List></li>

        <SubTitle>Compromisso do Usuário</SubTitle>

        <Paragrafh>
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Plataforma de curso oferece no site e com caráter enunciativo, mas não limitativo:
        </Paragrafh>

        <li><List>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</List></li>
        <li><List>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, betano ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</List></li>
        <li><List>  Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Plataforma de curso, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</List></li>

        <SubTitle>Mais informações</SubTitle>

        <Paragrafh>
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
        </Paragrafh>

        <LastParagrafh>Esta política é efetiva a partir de 10 January 2023 16:52</LastParagrafh>

      </ContainerPoliticas>
    </ThemeProvider>
  );
}

export default Politica;
