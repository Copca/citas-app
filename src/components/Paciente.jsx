import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
	const { id, mascota, propietario, email, fecha, sintomas } = paciente;

	const handleClickEliminar = () => {
		const respuesta = confirm('¿Deseas eliminar este paciente?');

		if (respuesta) {
			eliminarPaciente(id);
		}
	};

	return (
		<div className='bg-white shadow-md rounded-lg py-10 px-5 my-10 animate__animated animate__fadeIn'>
			<p className='text-gray-700 uppercase font-bold mb-3'>
				Nombre: <span className='font-normal normal-case'>{mascota}</span>
			</p>

			<p className='text-gray-700 uppercase font-bold mb-3'>
				Propietario:{' '}
				<span className='font-normal normal-case'>{propietario}</span>
			</p>

			<p className='text-gray-700 uppercase font-bold mb-3'>
				Email: <span className='font-normal normal-case'>{email}</span>
			</p>

			<p className='text-gray-700 uppercase font-bold mb-3'>
				Fecha Alta: <span className='font-normal normal-case'>{fecha}</span>
			</p>

			<p className='text-gray-700 uppercase font-bold mb-3'>
				Sintomas: <span className='font-normal normal-case'>{sintomas}</span>
			</p>

			<div className='flex justify-around mt-10'>
				<button
					type='button'
					className='btn bg-indigo-600 hover:bg-indigo-700 flex items-center'
					onClick={() => setPaciente(paciente)}
				>
					<FaEdit className='mr-2' />
					Editar
				</button>

				<button
					type='button'
					className='btn bg-red-600 hover:bg-red-700 flex items-center'
					onClick={handleClickEliminar}
				>
					<FaTrashAlt className='mr-2' />
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default Paciente;
