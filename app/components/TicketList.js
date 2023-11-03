async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets");

  return res.json();
}

async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div>{ticket.priority} priority</div>
        </div>
      ))}
      {tickets.length === 0 && <p>There are no open tickets</p>}
    </>
  );
}

export default TicketList;
