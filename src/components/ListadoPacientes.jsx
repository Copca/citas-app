import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
	return (
		<div className='md:w-1/2 lg:w-3/5 h-screen overflow-y-auto'>
			{/* pacientes.lenght !== 0 ? si el arreglo tiene algo retorna -> */}
			{pacientes && pacientes.length ? (
				<>
					<h2 className='text-center text-3xl font-black'>Listado Pacientes</h2>

					<p className='text-lg text-center mt-5'>
						Administra tus
						<span className='text-indigo-600 font-bold'>
							{' '}
							Pacientes y Citas
						</span>
					</p>

					{pacientes.map(paciente => (
						<Paciente
							key={paciente.id}
							paciente={paciente}
							setPaciente={setPaciente}
							eliminarPaciente={eliminarPaciente}
						/>
					))}
				</>
			) : (
				<>
					<h2 className='text-center text-3xl font-black'>No hay Pacientes</h2>

					<p className='text-lg text-center mt-5'>
						Comienza agregando pacientes
						<span className='text-indigo-600 font-bold'>
							{' '}
							y aparecerán en este lugar
						</span>
					</p>
				</>
			)}
		</div>
	);
};

export default ListadoPacientes;
