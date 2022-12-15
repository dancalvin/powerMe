import React, { useState, useEffect } from "react";
import { compareAsc, format } from "date-fns";
import { toast } from "react-toastify";
import VitalityStatsBlock from "./VitalityStatsBlock";
import VitalityScoreHistory from "./VitalityScoreHistory";

import { getVitalityScore, getMetaAge } from "../../utils";
import { setItem, getItem, deleteItem, clearls } from "../../localStore";

export default function VitalityHistory(props) {
  const [deletePopupToggle, setDeletePopupToggle] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [deleteEntry, setDeleteEntry] = useState(null);

  useEffect(() => {
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
      setItem("forms", oldTests);
      setDeletePopupToggle(false);
      loadHistoryData();
    }
  };

  const loadHistoryData = () => {
    const oldTests = getItem("forms");
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
  };

  return (
    <div className="container mt-0 w-full max-w-none sm:mb-8 sm:px-6 ">
      <div className="m-auto max-w-[1080px]">
        <div className="bg-primary sm:bg-transparent">
          <h1 className="mb-[60px] max-sm:mb-0 max-sm:!py-8 max-sm:text-white">
            Vitality History
          </h1>
        </div>
        <div>
          <VitalityStatsBlock
            historyData={historyData}
            loadHistoryData={loadHistoryData}
          />
          <div className="max-sm:px-[16px]">
            {historyData.map((singleHistory, index) => (
              <VitalityScoreHistory
                key={index}
                index={index}
                form={singleHistory.form}
                timeStamp={singleHistory.timeStamp}
                vsHistory={singleHistory}
                setDeletePopupToggleFunc={setDeletePopupToggleFunc}
                loadHistoryData={loadHistoryData}
              />
            ))}
          </div>
        </div>
      </div>
      {deletePopupToggle ? (
        <DeletePopup
          close={() => setDeletePopupToggle(false)}
          deleteEntryFunc={deleteEntryFunc}
          deleteEntry={deleteEntry}
        />
      ) : null}
    </div>
  );
}

function DeletePopup(props) {
  const [vsHistory, setVsHistory] = useState(false);
  const [scoreStyle, setScoreStyle] = useState("");
  const [metabolicAge, setMetabolicAge] = useState(0);

  useEffect(() => {
    const vScore = getVitalityScore({
      ...props.deleteEntry.form,
      ["score"]: 0,
    });
    const metaAgeData = getMetaAge({ ...props.deleteEntry.form });
    setScoreStyle(vScore);
    setMetabolicAge(metaAgeData);
    setVsHistory(props.vsHistory);
  }, [props]);

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center">
      <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black opacity-[0.65]"></div>
      <div className="relative z-10 mx-4 w-full max-w-5xl bg-secondary py-10 px-10 md:py-16 md:px-20">
        <div
          className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] md:right-8 md:top-8"
          onClick={props.close}
        >
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8267 12.9723L7.20797 9.35357L3.67244 12.8891L0.989592 10.2063L4.52513 6.67072L0.927201 3.0728L3.46447 0.535534L7.06239 4.13346L10.5979 0.597925L13.2808 3.28077L9.74524 6.8163L13.364 10.435L10.8267 12.9723Z"
              fill="black"
            />
          </svg>
        </div>

        <div>
          <div>
            <p className="text-lg md:text-2xl">
              Are you sure you would like to delete this goal?
            </p>
          </div>
          <div className="mt-6">
            <div className="border-[1px] border-l-[10px] border-l-primary py-5 px-6 md:border-l-[15px] md:px-20">
              <div>
                <span className="font-montserrat text-xl font-bold leading-6 text-black ">
                  {format(
                    new Date(props.deleteEntry.timeStamp),
                    "MMMM, dd yyyy"
                  )}
                </span>
              </div>

              <div className="flex flex-col flex-wrap sm:flex-row ">
                <div className="mt-4 border-b-[1px] sm:w-1/2 sm:border-b-0 sm:border-r-[1px]">
                  <p className="font-montserrat text-base leading-[20px]">
                    Your Metabolic Age
                  </p>
                  <p className="font-montserrat text-4xl leading-[49px] text-primary">
                    {metabolicAge}
                  </p>
                </div>

                <div className="mt-4 flex flex-col sm:w-1/2 sm:items-center ">
                  <div>
                    <p className="font-montserrat text-base leading-[20px]">
                      Your Vitality Score
                    </p>
                    <p className="font-montserrat text-4xl leading-[49px] text-third">
                      {scoreStyle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                className="mt-10 mr-4 rounded-3xl border-[1px] bg-black py-3 px-6 text-center font-montserrat text-base font-bold leading-[24px] text-secondary md:px-12 md:text-xl"
                onClick={() => props.deleteEntryFunc()}
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
