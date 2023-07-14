import { useQuery } from '@apollo/client';
import Persons from './components/Persons';
import { ALL_PERSONS } from './queries/queries';
import './App.css';
import { useState } from 'react';
import PersonForm from './components/PersonForm';

function App() {
	const [errorMessage, setErrorMessage] = useState(null);

	const result = useQuery(ALL_PERSONS);

	if (result.loading) {
		return <p>loading...</p>;
	}

	const notify = (message) => {
		setErrorMessage(message);
		setTimeout(() => {
			setErrorMessage(null);
		}, 10000);
	};

	return (
		<div>
			<Notify errorMessage={errorMessage} />
			<Persons persons={result.data.allPersons} />
			<PersonForm setError={notify} />
		</div>
	);
}

const Notify = ({ errorMessage }) => {
	if (!errorMessage) {
		return null;
	}
	return <div style={{ color: 'red' }}>{errorMessage}</div>;
};

export default App;
