function setItem(key, value) {
  if (key == null || key == "" || key == typeof undefined) {
    return;
  }

  if (value == null || value == "" || value == typeof undefined) {
    return;
  }

  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
}

function getItem(key) {
  const jsonValue = localStorage.getItem(key);
  const value = JSON.parse(jsonValue);
  return value;
}

function deleteItem(key) {
  localStorage.removeItem(key);
}

function clearls(key) {
  localStorage.clear();
}

export { getItem, setItem, deleteItem, clearls };
