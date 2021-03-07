// TODO: Change to deterministic algorith
const idGenerator = () => (
  Number(String(Math.random()).slice(2))
    + Date.now()
    + Math.round(performance.now())
).toString(36);

export default idGenerator;
