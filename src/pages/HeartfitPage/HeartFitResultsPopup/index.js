import { closeIcon } from "../../../components/Svgs";
import HeartFitScore from "../HeartFitScore";
export function HeartFitResultsPopup({ form, close, tab }) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 m-7 max-[540px]:m-0 ">
      <div
        className="fixed top-0 left-0 bottom-0 right-0 -z-[1] flex items-center justify-center bg-black opacity-[0.65]"
        onClick={close}
      ></div>

      <div className="relative mx-auto flex h-full max-w-[1280px] items-center justify-center overflow-auto bg-secondary py-10 px-20 max-[540px]:px-5">
        <div
          className="absolute top-5 right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px]"
          onClick={close}
        >
          {closeIcon}
        </div>
        <HeartFitScore form={form} tab={tab} />
      </div>
    </div>
  );
}
