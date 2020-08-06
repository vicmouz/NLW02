import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
interface TeacherItemProps {

}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/42352280?s=460&u=9542d069a8cc9106254a831347a42003cba56821&v=4" alt="Victor Mouzinho" />
            <div>
              <strong>Victor Mouzinho</strong>
              <span>Química</span>
            </div>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim massa, rhoncus ac tempus ut, commodo eget ante. Proin gravida sodales ante vel cursus. 
            <br/> <br/>
            Cras eget pellentesque enim, ut tincidunt massa. Sed ultricies sed mi at dapibus. Curabitur nisl tortor, ultricies ac velit id, mattis viverra sapien. Duis pulvinar odio nec sapien molestie euismod. Praesent ut ligula varius, luctus lectus non, pellentesque ligula. Quisque lobortis blandit efficitur. Morbi egestas odio eget odio vestibulum, ac lacinia tellus tempor. Pellentesque et aliquet lacus. Phasellus eget metus ac ligula finibus rutrum. Nam pretium gravida sapien id malesuada. Maecenas viverra malesuada turpis a eleifend. Integer feugiat ex vitae efficitur euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam eget rhoncus velit.
          </p>
          <footer>
            <p>Preço/hora
            <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
  )
}

export default TeacherItem;

