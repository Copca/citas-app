const Error = ({ children }) => {
	return (
		<p className='bg-red-800 text-sm text-white text-center uppercase font-bold p-3 mb-5  animate__animated animate__slideInDown'>
			{children}
		</p>
	);
};

export default Error;
