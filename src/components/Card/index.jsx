import './styles.css';
import Capa from './assets/capa.png'
import Code from './assets/code.svg'
import Share from './assets/share.svg'
import Chat from './assets/chat.svg'
import Icone from './assets/icone.png'

export default function Card() {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={Capa} alt="imagem do Post" />
      </div>
      <div className='card__conteudo'>
        <div className="conteudo__texto">
          <h3>Titulo dp post</h3>
          <p>Resumo do post</p>
        </div>

        <div className='conteudo__rodape'>
          <ul>
            <li>
              <img src={Code} alt="códigos" />
              100
            </li>
            <li>
              <img src={Share} alt="compartilhamentos" />
              12
            </li>
            <li>
              <img src={Chat} alt="comentários" />
              10
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={Icone} alt="imagem do usuário" />
            @fjunior
          </div>
        </div>
      </div>
    </article>
  )
}