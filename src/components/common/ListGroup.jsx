import React from 'react';

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;
  return (
    <ul key='genre-selector' className='list-group'>
      {items.map(item => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          style={{ cursor: 'pointer' }}
          className={item === selectedItem ? 'list-group-item active' : 'list-group-item'}>{item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: "_id" 
}

export default ListGroup;