import PropTypes from 'prop-types';
import { Transaction, TableHead, TableRow, TableBody } from '../TransactionHistory/TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <Transaction>
            <TableHead>
                <TableRow>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map(({ id, type, amount, currency }) => (
                    <TableRow key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </TableRow>
                ))}
            </TableBody>
        </Transaction>
    );
};

TransactionHistory.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};

export default TransactionHistory;