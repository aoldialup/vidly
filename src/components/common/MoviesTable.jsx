import React, { Component } from 'react';
import Like from './Like';
import TableBody from './TableBody';
import TableHeader from './tableHeader';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => (
        <Like like={movie.like} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: 'delete',
      content: movie => (
        <button onClick={() => this.props.onDelete(movie)} className='btn btn-danger btn-sm'>Delete</button>
      )
    }
  ];

  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
        <TableBody columns={this.columns} data={movies} />
      </table>
    )
  }
}

export default MoviesTable;