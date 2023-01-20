import React, { useState, useEffect } from "react";
import { compareAsc, format, getYear } from "date-fns";
import HeartFitStatsBlock from "./HeartFitStatsBlock";
import HeartFitScoreHistory from "./HeartFitScoreHistory";

import { H1 } from "../../../components/Typography";
import { setItem, getItem, deleteItem, clearls } from "../../../localStore";
import EditDataPopup from "./EditDataPopup";

import { YearsListAsFilter } from "../../../components/Inputs";
export default function HeartFitHistory() {
  const [deletePopupToggle, setDeletePopupToggle] = useState(false);
  const [addDataPopupToggle, setAddDataPopupToggle] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [deleteEntry, setDeleteEntry] = useState(null);
  const [tab, setTab] = useState("progress");
  const [historyYear, setHistoryYear] = useState(0);

  useEffect(() => {
    const currentYear = getYear(new Date());
    setHistoryYear(currentYear);
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

    console.log("oldTests" + JSON.stringify(oldTests));
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
    <div className="max-w-none mt-0 w-full px-0 lg:mb-8 ">
      <div className="m-auto max-w-[1080px]">
        <div className="overflow-hidden bg-primary text-center sm:bg-transparent">
          <H1 no={5}>heart-fit (vo2 history) </H1>
        </div>

        <div>
          {/* line graph for the heat fit data history */}
          <HeartFitStatsBlock
            tab={tab}
            historyData={historyData ? historyData : []}
            setAddDataPopupToggle={setAddDataPopupToggle}
            setTab={setTab}
          />

          <div className="relative mt-[60px] px-5 sm:px-0">
            {/* years section for filteration based upon year */}
            <YearsListAsFilter
              setHistoryYear={setHistoryYear}
              historyYear={historyYear}
            ></YearsListAsFilter>

            {/* the history data for each visit*/}
            <div className="mt-0 sm:-mt-[40px]">
              {historyData.map((singleHistory, index) =>
                getYear(new Date(singleHistory.timeStamp)) == historyYear ? (
                  <HeartFitScoreHistory
                    key={index}
                    index={index}
                    hfHistory={singleHistory}
                    setDeletePopupToggleFunc={setDeletePopupToggleFunc}
                    loadHistoryData={loadHistoryData}
                    tab={tab}
                  />
                ) : null
              )}
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
    <div className="fixed top-0 left-0 bottom-0 right-0 z-[1] flex items-center justify-center">
      <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black opacity-[0.65]"></div>
      <div className="max-w-5xl relative z-10 mx-4 w-full bg-secondary py-12 px-8 md:py-16 md:px-20">
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
              <span className="font-montserrat text-xl font-bold leading-6 text-black ">
                {props.deleteEntry.hfHistory
                  ? format(
                      new Date(props.deleteEntry.hfHistory.timeStamp),
                      "MMMM, dd yyyy"
                    )
                  : ""}
              </span>

              <div className="flex flex-row flex-wrap ">
                <div className="mt-5 flex w-full flex-row flex-nowrap items-center max-sm:pr-1 md:flex-col md:items-start lg:flex-row">
                  <p
                    className={`sm:border-b-solid relative mr-[20px] border-b-0 pr-0 font-montserrat text-xl leading-[29px] text-black before:absolute before:right-0 before:top-1/2 before:h-[60px] before:w-[1px] before:-translate-y-1/2 before:bg-black before:content-none md:mr-[35px] md:mb-[10px] md:border-b-[1px] lg:border-b-0 lg:pr-[35px] lg:text-2xl lg:before:content-[""]`}
                  >
                    Heart-Fit Score
                  </p>
                  <p className="font-montserrat text-4xl font-bold leading-[49px] text-primary sm:font-normal">
                    {props.score}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                className="mt-10 mr-4 rounded-[40px] border-[1px] bg-black py-3 px-6 text-center font-montserrat text-base font-bold leading-[24px] text-secondary md:px-12 md:text-xl"
                onClick={props.deleteEntryFunc}
              >
                Delete
              </button>

              <button
                className="mt-10 rounded-[40px] border-[1px] py-3 px-6 text-center font-montserrat text-base font-bold leading-[24px] text-black md:px-12 md:text-xl"
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
