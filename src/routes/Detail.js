import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

function Detail({ toDos }) {
  const id = parseInt(useParams().id);
  const toDo2 = toDos.find((toDo) => {
    console.log(toDo.id, id);
    return toDo.id === id;
  });
  console.log(toDos);
  console.log(toDo2);

  return (
    <>
      <h1>{toDo2?.text}</h1>
      <h3>created At: {toDo2?.id}</h3>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
