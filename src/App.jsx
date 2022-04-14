import { useState, useEffect } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

const App = () => {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	useEffect(() => {
		const obtenerLS = () => {
			const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
			setPacientes(pacientesLS);
		};

		obtenerLS();
	}, []);

	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify(pacientes));
	}, [pacientes]);

	const eliminarPaciente = id => {
		const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

		setPacientes(pacientesActualizados);
	};

	return (
		<div className='container mt-5'>
			<Header />

			<div className='md:flex md:space-x-3 mt-12'>
				<Formulario
					paciente={paciente}
					setPaciente={setPaciente}
					setPacientes={setPacientes}
				/>

				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
};

export default App;
