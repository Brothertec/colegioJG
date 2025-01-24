import React from 'react';


import IMGBerçario from '../../../image/card-berçario.png';
import IMGMaternal from '../../../image/card-maternal.png';
import IMGPreescola from '../../../image/card-preescola.png';
import IMGFundamental from '../../../image/card-ensinofundamental.png';


import './area-aluno.css';

export default function AreaAluno() {
  return (
    <section className="area-aluno">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src={IMGBerçario} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title area-aluno-titulo-card ">Berçário: (4 meses a 2 anos)</h5>
                <p class="card-text area-aluno-titulo-card">Objetivo:</p><p className='card-text area-aluno-texto'> Desenvolver habilidades sociais; estimular criatividade; fortalecer
                  vínculos afetivos; preparar para a alfabetização; promover autonomia.</p>
                <p class="card-text area-aluno-titulo-card">Recursos Materiais:</p><p className='card-text area-aluno-texto'> Brinquedos educativos, Materiais artísticos, Livros infantis,
                  Equipamentos de segurança, Tecnologia educacional, envolvendo sempre a
                  ludicidade como mecanismo de desenvolvimento e interação do aluno com seus
                  pares. Além disso, conta com uma equipe de Educadores; Cuidadores;
                  Nutricionista e Coordenador pedagógico.</p>
                <p class="card-text area-aluno-titulo-card">Integra ainda:</p><p className='card-text area-aluno-texto'>
                  1-Relatórios periódicos.</p>
                <p className='card-text area-aluno-texto'>2-Reuniões com os pais.</p>
              </div>
              <div class="card-footer posição-footer-modal-matricula">
                <a type="button" class="btn btn-primary btn-modal-matricula " href="https://forms.gle/cxwK9LxmUSZWF2yy5">Pré Matrícula</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={IMGMaternal} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title area-aluno-titulo-card ">Maternal: (2 anos a 4 anos)</h5>
                <p class="card-text area-aluno-titulo-card">Objetivo:</p><p className='card-text area-aluno-texto'> desenvolver habilidades sociais e emocionais, estimular criatividade e
curiosidade, fortalecer vínculos familiares aliada a uma educação de qualidade
e personalizada com ambiente seguro e acolhedor. Além disso nessa fase a
criança se prepara para a Pré-escola.</p>
                <p class="card-text area-aluno-titulo-card">Recursos Materiais:</p><p className='card-text area-aluno-texto'> Materiais artísticos, Livros paradidáticos, Tecnologia
educacional, Brinquedos educativos, ambiente familiar, envolvendo Atividades
extracurriculares para fortalecer o desenvolvimento físico, cognitivo e social.
Além disso, conta com uma equipe de Educadores; Cuidadores; Nutricionista e
Coordenador pedagógico.</p>
                <p class="card-text area-aluno-titulo-card">Integra ainda:</p><p className='card-text area-aluno-texto'>
                  1-Avaliações contínuas.</p>
                <p className='card-text area-aluno-texto'>2-Reuniões pedagógicas.</p>
                <p className='card-text area-aluno-texto'>3-Relatórios individuais.</p>
              </div>
              <div class="card-footer posição-footer-modal-matricula">
                <a type="button" class="btn btn-primary btn-modal-matricula " href="https://forms.gle/cxwK9LxmUSZWF2yy5">Pré Matrícula</a>
              </div>
            </div>
          </div>
          
          <div class="col">
            <div class="card">
              <img src={IMGPreescola} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title area-aluno-titulo-card ">Pré-escola: (4 a 6 anos)</h5>
                <p class="card-text area-aluno-titulo-card">Objetivo:</p><p className='card-text area-aluno-texto'> Os objetivos da pré-escola são promover o desenvolvimento integral
das crianças, considerando os aspectos físicos, psicológicos, sociais e
intelectuais. Ademais, inclui fomentar a criatividade, curiosidade e amor ao
aprendizado, desenvolver a expressão e a comunicação através de diferentes
tipos de linguagem, promover atividades que estimulem a expressão verbal e a
escuta e preparar crianças para o ensino fundamental.</p>
                <p class="card-text area-aluno-titulo-card">Recursos Materiais:</p><p className='card-text area-aluno-texto'> Materiais artísticos, Livros didáticos e paradidáticos,
Tecnologia educacional, ambiente multidisciplinar, atividades lúdicas, jogos que
fortaleçam o intelecto (xadrez). Para isso, conta com uma equipe de;
Professores; Cuidadores; Nutricionista e Coordenador pedagógico.</p>
               
              </div>
              <div class="card-footer posição-footer-modal-matricula">
                <a type="button" class="btn btn-primary btn-modal-matricula " href="https://forms.gle/cxwK9LxmUSZWF2yy5">Pré Matrícula</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={IMGFundamental} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title area-aluno-titulo-card ">Ensino fundamental: anos iniciais (1o ao 5o ano)</h5>
                <p class="card-text area-aluno-titulo-card">Objetivo:</p><p className='card-text area-aluno-texto'>Formar cidadãos, desenvolvendo a capacidade de aprender, domínio
da leitura, escrita e cálculo, compreender o ambiente natural e social, o sistema
político, a tecnologia, as artes e os valores, fornecendo um Desenvolvimento
integral (físico, emocional, cognitivo e social).</p>
                <p class="card-text area-aluno-titulo-card">Recursos Materiais:</p><p className='card-text area-aluno-texto'> biblioteca, livros didáticos e paradidáticos, projetos de
leitura, atividades esportivas, Tecnologia educacional, avaliações periódicas,
ambiente familiar, atividades extracurriculares, aulas interativas. Atrelado a uma
equipe pedagógica multidisciplinar que conta com: Professores qualificados,
Coordenação Pedagógica, Nutricionista e Orientador Disciplinar.</p>
                
              </div>
              <div class="card-footer posição-footer-modal-matricula">
                <a type="button" class="btn btn-primary btn-modal-matricula " href="https://forms.gle/cxwK9LxmUSZWF2yy5">Pré Matrícula</a>
              </div>
            </div>
          </div>
        </div>
    </section >
  );
}