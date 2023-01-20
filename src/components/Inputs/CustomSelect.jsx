// Import React, useEffect, useState, useRef
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/CustomSelect.module.css";
// Import Arrow from SVG.jsx
import { arrowDown } from "../Svgs";

// Genearate a select template that requires a list of options and a function to handle the change
const CustomSelect = ({ selected = null, list, key = null, onChange }) => {
  const wrapper = useRef(null);
  const [active, setActive] = useState(false);
  const [currentList, setCurrentList] = useState(list);
  const [currentSelected, setCurrentSelected] = useState(selected);

  const onClick = (item) => {
    setCurrentSelected(item);
    if (onChange) onChange(item);

    setActive(false);
  };

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (currentSelected)
      setCurrentList(
        list.filter((item) => {
          let compareKey = key ?? "value";
          return item[compareKey] !== currentSelected[compareKey];
        })
      );
  }, [currentSelected]);

  useEffect(() => {
    setCurrentSelected(selected);
  }, [selected]);

  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!wrapper.current.contains(target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);

  return (
    <div
      className={`${styles.select} ${active ? styles.active : ""}`}
      ref={wrapper}
    >
      <div className={styles["select__selected"]} onClick={toggleActive}>
        <div className={styles["select__selected-inner"]}>
          <span className={styles.fullUnit}>
            {currentSelected ? currentSelected.value : "-----"}
          </span>
          <span className={styles.unitAbb}>
            {currentSelected ? currentSelected.unit : "-----"}
          </span>
        </div>
        {arrowDown}
      </div>

      {active ? (
        <ul className={`${styles["select__options"]} ${styles["active"]}`}>
          {currentList.map((item, index) => (
            <li key={index} onClick={() => onClick(item)}>
              <span className={styles.fullUnit}> {item.value}</span>
              <span className={styles.unitAbb}>{item.unit}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default CustomSelect;
