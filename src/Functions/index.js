import data from "./../ExampleData";

let configurationData = { ...data };

let observers = [];

function emitChange() {
  observers.forEach(o => o && o(configurationData));
}

export function observe(o) {
  observers.push(o);
  emitChange();
  return () => {
    observers = observers.filter(t => t !== o);
  };
}

export const dropComponent = (item, rowId) => {
  const { id } = item;
  const componentToMove = { ...configurationData.components[id] };
  componentToMove.key = new Date().getTime();
  const rowToEdit = configurationData.rows.find(row => row.id === rowId);
  rowToEdit.components.push(componentToMove);
  configurationData = { ...configurationData };
  emitChange();
};
