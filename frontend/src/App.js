import { gql, useQuery } from '@apollo/client';
import Persons from './components/Persons';

import './App.css';

const ALL_PERSONS = gql`
	query {
		allPersons {
			name
			phone
			id
		}
	}
`;

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
