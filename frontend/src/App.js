import { useQuery } from '@apollo/client';
import Persons from './components/Persons';
import { ALL_PERSONS } from './queries/queries';
import './App.css';

function App() {
	const result = useQuery(ALL_PERSONS);

	if (result.loading) {
		return <p>loading...</p>;
	}

	return (
		<div>
			<Persons persons={result.data.allPersons} />
		</div>
	);
}

export default App;
