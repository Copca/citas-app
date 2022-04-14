import { useState, useEffect } from 'react';

import { generarId } from '../helpers/generarId';

import Error from './Error';

const Formulario = ({ paciente, setPaciente, setPacientes }) => {
	const [datosPaciente, setDatosPaciente] = useState({
		id: '',
		mascota: '',
		propietario: '',
		email: '',
		fecha: '',
		sintomas: ''
	});
	const [error, setError] = useState(false);

	useEffect(() => {
		// LLenamos el formulario con los datos del paciente a editar
		if (Object.keys(paciente).length > 0) {
			setDatosPaciente(paciente);
		}
	}, [paciente]);

	const { mascota, propietario, email, fecha, sintomas } = datosPaciente;

	const handleInputChange = e => {
		setDatosPaciente({
			...datosPaciente,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		// Validación del formulario
		if ([mascota, propietario, email, fecha, sintomas].includes('')) {
			setError(true);

			return;
		}

		setError(false);

		// Revisar si estamos en edición o en nuevo paciente
		if (paciente.id) {
			// Editando registro
			setPacientes(pacientesState =>
				pacientesState.map(pacienteState =>
					pacienteState.id === paciente.id ? datosPaciente : pacienteState
				)
			);
		} else {
			// Nuevo registro
			datosPaciente.id = generarId();

			// State pacientes del componente principal
			setPacientes(p => [...p, datosPaciente]);
		}

		// Reseteamos el paciente seleccionado para edición
		setPaciente({});

		// Resetamos el Form
		setDatosPaciente({
			id: '',
			mascota: '',
			propietario: '',
			email: '',
			fecha: '',
			sintomas: ''
		});
	};

	return (
		<div className='md:w-1/2 lg:w-2/5'>
			<h2 className='font-black text-3xl text-center'>Formulario</h2>

			<p className='text-lg text-center mt-5'>
				Añade pacientes y
				<span className='text-indigo-600 font-bold'> Adminstralos</span>
			</p>

			<form
				onSubmit={handleSubmit}
				className='bg-white shadow-md rounded-lg py-10 px-5 my-10 '
			>
				{error && <Error>Todos los campos son obligatorios</Error>}

				<div className='mb-5'>
					<label
						htmlFor='mascota'
						className='block text-gray-700 font-bold uppercase'
					>
						Nombre Mascota
					</label>
					<input
						type='text'
						id='mascota'
						name='mascota'
						className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
						placeholder='Nombre de la mascota'
						value={mascota}
						onChange={handleInputChange}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='propietario'
						className='block text-gray-700 font-bold uppercase'
					>
						Nombre Propietario
					</label>
					<input
						type='text'
						id='propietario'
						name='propietario'
						className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
						placeholder='Nombre del propietario'
						value={propietario}
						onChange={handleInputChange}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='email'
						className='block text-gray-700 font-bold uppercase'
					>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
						placeholder='Email contacto'
						value={email}
						onChange={handleInputChange}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='fecha'
						className='block text-gray-700 font-bold uppercase'
					>
						Alta
					</label>
					<input
						type='date'
						id='fecha'
						name='fecha'
						className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
						value={fecha}
						onChange={handleInputChange}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='sintomas'
						className='block text-gray-700 font-bold uppercase'
					>
						Sintomas
					</label>
					<textarea
						id='sintomas'
						name='sintomas'
						className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
						placeholder='Describe los sintomas'
						value={sintomas}
						onChange={handleInputChange}
					/>
				</div>

				<input
					type='submit'
					className='bg-indigo-600 w-full p-3 text-white font-bold rounded hover:bg-indigo-700 cursor-pointer transition ease-in-out duration-200'
					value={paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'}
				/>
			</form>
		</div>
	);
};

export default Formulario;
