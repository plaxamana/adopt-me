const Pet = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h3>{props.breed}</h3>
    </>
  )
}

export default Pet;
