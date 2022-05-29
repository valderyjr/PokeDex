import style from './PokeDex.module.scss';
import {useUsuario} from '../../../contexts/User'
import {usePokedex} from '../../../contexts/Pokedex'
import CardTreinador from '../../../components/CardTreinador'

const PokeDex = () => {
	const {personagem} = useUsuario()
	
	return (
		<>
		<div className={style.principal}>
		<h3>{personagem.nome}, assim seria sua trajetória no mundo Pokemón</h3>
		<div className={style.personagem}>
			<CardTreinador treinador={personagem} final={true}/>
		</div>
		Vasco
		</div>
		</>
	)
}

export default PokeDex