import Navlink from "./asset/Navlink";
import MainRoutes from "./asset/MainRoutes";

const App = () => {
	return (
		<div className='space-y-[4vh] px-[5vw] py-[2vh]  bg-gray-100 min-h-screen'>
			<Navlink />
			<MainRoutes />
		</div>
	);
};

export default App;
