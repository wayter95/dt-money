import { Container } from "./styles";
import { Summary } from "../summary";
import { TransactionTable } from "../transactions-table";

export function Dashboard () {
	return (
		<Container>
			<Summary/>
			<TransactionTable/>
		</Container>
	)
}