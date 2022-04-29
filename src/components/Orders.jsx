import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";

export default function Order() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  if (orders.length === 0) {
  return (
  <aside>
    <div className="empty">
      <div className="title">You don't have any orders</div>
      <div className="subtitle">Click + to add an order</div>
    </div>
  </aside>
  )
}
return (
  <aside>
    <div className="body">
      {orders.map(order => {
        const { id } = order;
        const prototype = prototypes.find(p => p.id === id);
        return (
        <div className="item" key={id}>
            <div className="img">
              <vidoe src={prototype.thumbnail} />
            </div>
          </div>)
      })}
    </div>
  </aside>
  )
}