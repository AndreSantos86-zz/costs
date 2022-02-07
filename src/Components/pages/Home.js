import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import Linkbutton from './Layout/Linkbutton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus rpojetos agora mesmo!</p>
            <Linkbutton to = "/newproject" text="Criar Projeto"></Linkbutton>
            <img src={savings} alt="Costs" />     
        </section>
    )
}
export default Home