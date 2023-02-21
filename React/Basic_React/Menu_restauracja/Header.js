const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active);
  const number = activeItems.length;
  return (
    <header>
      <h2>Wielkośc zamówienia: {number}</h2>
      <h2>
        Do zapłaty:{" "}
        {number != 0 ? `${number * 10} złotych` : "Zamówienie jest puste"}
      </h2>
    </header>
  );
};
