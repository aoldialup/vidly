import TableBody from './TableBody';
import TableHeader from './tableHeader';

const Table = ({ columns, sortColumn, onSort, data }) => {
  // Pass in arguments like this so they already come destructured
  //const { columns, sortColumn, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
}

export default Table;