import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../../utils/usePersistedState';

import { ContainerPoliticas, Title, Paragrafh, List, SubTitle, TextLi } from './styles';

import GlobalStyle from '../../styles/global';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

function Termos() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContainerPoliticas>
        <Title>1. Termos</Title>

        <Paragrafh>
          Ao acessar ao site Plataforma de curso, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
        </Paragrafh>

        <Title>2. Uso de Licença</Title>

        <ol>
          <TextLi><List>modificar ou copiar os materiais; </List></TextLi>
          <TextLi><List>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </List></TextLi>
          <TextLi><List>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Plataforma de curso; </List></TextLi>
          <TextLi><List>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou </List></TextLi>
          <TextLi><List>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</List></TextLi>
        </ol>

        <Paragrafh>
          Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Plataforma de curso a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
        </Paragrafh>

        <Title>3. Isenção de responsabilidade</Title>

        <ol>
          <TextLi><List>Os materiais no site da Plataforma de curso são fornecidos 'como estão'. Plataforma de curso não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</List></TextLi>
          <TextLi><List>Além disso, o Plataforma de curso não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</List></TextLi>
        </ol>

        <Title>4. Limitações</Title>

        <Paragrafh>
          Em nenhum caso o Plataforma de curso ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Plataforma de curso, mesmo que Plataforma de curso ou um representante autorizado da Plataforma de curso tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
        </Paragrafh>

        <Title>5. Precisão dos materiais</Title>

        <Paragrafh>
          Os materiais exibidos no site da Plataforma de curso podem incluir erros técnicos, tipográficos ou fotográficos. Plataforma de curso não garante que qualquer material em seu site seja preciso, completo ou atual. Plataforma de curso pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Plataforma de curso não se compromete a atualizar os materiais.
        </Paragrafh>

        <Title>6. Links </Title>

        <Paragrafh>
          O Plataforma de curso não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Plataforma de curso do site. O uso de qualquer site vinculado é por conta e risco do usuário.
        </Paragrafh>

        <SubTitle>Modificações</SubTitle>

        <Paragrafh>
          O Plataforma de curso pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
        </Paragrafh>

        <SubTitle>Lei aplicável</SubTitle>

        <Paragrafh>
          Estes termos e condições são regidos e interpretados de acordo com as leis do Plataforma de curso e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
        </Paragrafh>

      </ContainerPoliticas>
    </ThemeProvider>
  );
}

export default Termos;
