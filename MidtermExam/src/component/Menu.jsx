
const menuItems = [
  { name: 'Cà phê sữa', price: '25k' },
  { name: 'Cà phê Expresso', price: '35k' },
  { name: 'Cà phê muối', price: '25k' },
  { name: 'Cà phê Mocha', price: '35k' },
  { name: 'Cà phê sữa dừa', price: '25k' },
  { name: 'Cà phê Capuchino', price: '35k' },
  { name: 'Cà phê sữa Sài Gòn', price: '25k' },
  { name: 'Cà phê Latte', price: '35k' },
  { name: 'Cà phê đen', price: '20k' },
  { name: 'Cà phê IceCream Latte', price: '40k' },
];

function Menu() {
  return (
    <div class ="background-menu">
      <div className="menu-wrap">
        <div className="menu-bg" />
          <h1 className="menu-title">Menu</h1>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <span className="item-name">{item.name}</span>
              <span className="item-dots" />
              <span className="item-price">{item.price}</span>
            </div>
          ))}
        </div>
        <button className="menu-btn">Xem thêm Menu</button>
      </div>
    </div>
  );
}

export default Menu;
