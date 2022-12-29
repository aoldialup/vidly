import React from 'react';
import Like from '../Like';

const MoviesTable = (props) => {
  // Object destructuring at the beginning of every functional component
  const { movies, onDelete, onLike, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort('title')}>Title</th>
          <th onClick={() => onSort('genre.name')}>Genre</th>
          <th onClick={() => onSort('numberInStock')}>Stock</th>
          <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like
                like={movie.like}
                onClick={() => onLike(movie)}
              />
            </td>
            <button
              onClick={() => onDelete(movie)}
              className='btn btn-danger btn-sm'>Delete
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MoviesTable;