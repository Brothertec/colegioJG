import React from 'react';
import LinkBorder from '../../LinkBorder';
import LinkWithIcon from '../../LinkWithIcon';
import SectionTitle from '../../SectionTitle';

import imagemAreaAluno from '../../../image/imagem-area-aluno.png';
import fotosMusicalizacao from '../../../image/fotos-musicalizacao.png';

import './area-aluno.css';

export default function AreaAluno() {
  return (
    <section className="area-aluno">
      <div className="container">
        <SectionTitle iconProps={['fas', 'graduation-cap']} title='Área do Aluno' />
        <p className="area-aluno-texto area-aluno-texto-espacado">
          No período de quarentena, nossos alunos contam com o ensino à distância em nosso ambiente virtual.
        </p>
        <div className="area-aluno-espaco-rows">
          <div className="row">
            <div className="col-lg-7">
              <img className='img-fluid area-aluno-img' src={imagemAreaAluno} alt="Imagem de criança" />
            </div>
            <div className="col-lg-5">
              <LinkBorder title="Aulas e Tarefas" iconProps={['fas', 'chalkboard-teacher']}>
                <LinkWithIcon text='Berçário I e II' path='/teste' />
                <LinkWithIcon text='Infantil II (2 anos)' path='/teste' />
                <LinkWithIcon text='Infantil III (3 anos)' path='/teste' />
                <LinkWithIcon text='Infantil IV (4 anos)' path='/teste' />
                <LinkWithIcon text='Infantil V (5 anos)' path='/teste' />
                <LinkWithIcon text='Ensino Fundamental 1º ano (6 anos)' path='/teste' />
                <LinkWithIcon text='Ensino Fundamental 2º ano (7 anos)' path='/teste' />
                <LinkWithIcon text='Ensino Fundamental 3º ano (8 anos)' path='/teste' />
                <LinkWithIcon text='Ensino Fundamental 4º ano (9 anos)' path='/teste' />
                <LinkWithIcon text='Ensino Fundamental 5º ano (10 anos)' path='/teste' />
              </LinkBorder>
            </div>
          </div>
        </div>
        <div className="area-aluno-espaco-rows">
          <div className="row">
            <div className="col-lg-7">
              <img className='img-fluid area-aluno-img area-aluno-img-espaco-adicional' src={fotosMusicalizacao} alt="Imagem de criança" />
            </div>
            <div className="col-lg-5">
              <LinkBorder  title="Musicalização"  iconProps={['fas', 'music']}>
                <p className="area-aluno-texto area-aluno-texto__espacamento-adicional text-left">
                  A musicalização faz parte do dia-a-dia dos alunos do Colégio Jardim Getsêmani. <br/> Durante esse período de quarentena, ela está sendo realizada aqui, no site da escola.
              </p>
                <LinkWithIcon text='Acessar o epaço da musicalização' path='/Musicalizacao' />
              </LinkBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}