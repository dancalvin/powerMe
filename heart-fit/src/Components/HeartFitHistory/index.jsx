import React, { useState, useEffect } from "react";
import { compareAsc, format, getYear } from "date-fns";
import isToday from "date-fns/isToday";
import differenceInDays from "date-fns/differenceInDays";
import HeartFitStatsBlock from "./HeartFitStatsBlock";
import HeartFitScoreHistory from "./HeartFitScoreHistory";
import CustomSelect from "../Index/CustomSelect";
import CustomSelectTime from "../Index/CustomSelectTime";
import { RangeSliderModul } from "../Index/RangeSlider/RangeSliderModul";
import RangeSlider from "../Index/RangeSlider/RangeSlider";
import { filter } from "../Base/SVG";
import BasicDatePicker from "../CommonComponents/index";
import { setItem, getItem, deleteItem, clearls } from "../../localStore";
import EditDataPopup from "./EditDataPopup";

export default function HeartFitHistory() {
  const [deletePopupToggle, setDeletePopupToggle] = useState(false);
  const [deletePopupGoalToggle, setDeletePopupGoalToggle] = useState(false);
  const [addDataPopupToggle, setAddDataPopupToggle] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [deleteEntry, setDeleteEntry] = useState(null);
  const [tab, setTab] = useState("progress");
  const [historyYear, setHistoryYear] = useState(0);
  const [hitoryYearsList, setHitoryYearsList] = useState([]);

  useEffect(() => {
    const currentYear = getYear(new Date());
    const ylist = [];
    for (let i = 0; i < 5; i++) {
      ylist.push(currentYear - i);
    }
    setHistoryYear(hitoryYearsList[0]);
    setHitoryYearsList(ylist);
    loadHistoryData();
  }, []);

  const setDeletePopupToggleFunc = (entry) => {
    setDeleteEntry(entry);
    setDeletePopupToggle(!deletePopupToggle);
  };

  const deleteEntryFunc = () => {
    const oldTests = historyData;
    const deleteEntryIndex = deleteEntry.index;
    if (deleteEntryIndex > -1 && deleteEntryIndex < oldTests.length) {
      oldTests.splice(deleteEntryIndex, 1);

      if (oldTests.length == 0) {
        deleteItem("heartFitForms");
      } else {
        setItem("heartFitForms", oldTests);
      }
      setDeletePopupToggle(false);
      loadHistoryData();
    }
  };

  const loadHistoryData = () => {
    const oldTests = getItem("heartFitForms");
    if (oldTests) {
      const copyOldTests = [].concat(oldTests);
      copyOldTests.sort(function (a, b) {
        var keyA = new Date(a.timeStamp),
          keyB = new Date(b.timeStamp);
        // Compare the 2 dates
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
      setHistoryData(copyOldTests);
    }
  };

  return (
    <div className="container w-full max-w-none  ">
      <div className="m-auto max-w-[1080px]">
        <h1 className="h1 hist fifth">
          Heart-Fit <span>(VO2)</span> History
        </h1>
        <div className="sm:mt-6 md:mt-12">
          <HeartFitStatsBlock
            tab={tab}
            historyData={historyData ? historyData : []}
            setAddDataPopupToggle={setAddDataPopupToggle}
            setTab={setTab}
          />
          <div className="history">
            <div className="history__filter">
              <div className="form his">
                <div className="input__radio">
                  {hitoryYearsList.map((year, index) => (
                    <div
                      className="input__radio-item"
                      key={index}
                      onClick={() => setHistoryYear(year)}
                    >
                      <input type="radio" name="radio" />
                      <label htmlFor=""></label>
                      <span>{year}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="history__filter-icon">{filter}</div>
            </div>
            <div className="history__items">
              {tab === "progress"
                ? historyData.map((singleHistory, index) => (
                    <HeartFitScoreHistory
                      key={index}
                      index={index}
                      hfHistory={singleHistory}
                      setDeletePopupToggleFunc={setDeletePopupToggleFunc}
                      loadHistoryData={loadHistoryData}
                    />
                  ))
                : null}

              {/*tab === "goals"
                ? historyData.map((singleHistory, index) => (
                    <HeartFitScoreHistory
                      key={index}
                      index={index}
                      hfHistory={singleHistory}
                      setDeletePopupToggleFunc={setDeletePopupToggleFunc}
                      loadHistoryData={loadHistoryData}
                    />
                  ))
                : null
                  */}
            </div>
          </div>
        </div>
      </div>
      {deletePopupToggle ? (
        <DeletePopup
          type="assestment"
          score=" 37.3"
          deleteEntryFunc={deleteEntryFunc}
          deleteEntry={deleteEntry}
          close={() => setDeletePopupToggle(false)}
        />
      ) : null}
      {/*deletePopupGoalToggle ? (
        <DeletePopup
          type="goal"
          score=" 35.3"
          deleteEntryFunc={deleteEntryFunc}
          deleteEntry={deleteEntry}
          close={() => setDeletePopupGoalToggle(false)}
        />
      ) : null*/}

      {addDataPopupToggle ? (
        <EditDataPopup
          close={() => setAddDataPopupToggle(false)}
          loadHistoryData={loadHistoryData}
        />
      ) : null}
    </div>
  );
}

function DeletePopup(props) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center">
      <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black opacity-[0.65]"></div>
      <div className="relative z-10 mx-4 w-full max-w-5xl bg-secondary py-12 px-8 md:py-16 md:px-20">
        <div
          className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] md:right-8 md:top-8"
          onClick={props.close}
        >
          <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            <path
              d="M10.8267 12.9723L7.20797 9.35357L3.67244 12.8891L0.989592 10.2063L4.52513 6.67072L0.927201 3.0728L3.46447 0.535534L7.06239 4.13346L10.5979 0.597925L13.2808 3.28077L9.74524 6.8163L13.364 10.435L10.8267 12.9723Z"
              fill="black"
            />
          </svg>
        </div>

        <div>
          <div>
            <p className="text-lg md:text-2xl">
              {props.type === "goal" &&
                "Are you sure you would like to delete this goal?"}
              {props.type === "assestment" &&
                "Are you sure you would like to delete this assessment?"}
            </p>
          </div>
          <div className="mt-6">
            <div className="border-[1px] border-l-primary py-5 px-6 md:border-l-[15px] md:px-20">
              <h3 className="h3 bold">
                {props.deleteEntry.hfHistory
                  ? format(
                      new Date(props.deleteEntry.hfHistory.timeStamp),
                      "MMMM, dd yyyy"
                    )
                  : ""}
              </h3>
              <div className="popup__delete">
                <h3 className="h3 big">Your Heart-Fit Score</h3>
                <h2 className="h2 big">{props.score}</h2>
              </div>
            </div>

            <div>
              <button
                className="mt-10 mr-4 rounded-3xl border-[1px] bg-black py-3 px-6 text-center font-montserrat text-base font-bold leading-[24px] text-secondary md:px-12 md:text-xl"
                onClick={props.deleteEntryFunc}
              >
                Delete
              </button>

              <button
                className="mt-10 rounded-3xl border-[1px] py-3 px-6 text-center font-montserrat text-base font-bold leading-[24px] text-black md:px-12 md:text-xl"
                onClick={props.close}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
