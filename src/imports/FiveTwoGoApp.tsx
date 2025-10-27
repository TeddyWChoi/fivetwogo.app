import svgPaths from "./svg-py8k0vuqly";
import imgOnboardingPicture from "figma:asset/749367f3ce6dad591c7e6355c277c497a23d60bc.png";
import imgOnboardingPicture1 from "figma:asset/c639f6574037a06d6adade1f3cd30c90b170b128.png";

function CallToActionButton() {
  return (
    <div className="bg-[#e73a40] box-border content-stretch flex gap-[10px] items-center justify-center px-[74px] py-[16px] relative rounded-[14px] shrink-0 w-[332px]" data-name="CALL TO ACTION BUTTON">
      <p className="font-['Poppins:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[17px] text-nowrap tracking-[-0.0697px] whitespace-pre">Get Started</p>
    </div>
  );
}

function Frame33537() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] h-[240px] items-start left-[21px] top-[535px]">
      <div className="font-['Poppins:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[22px] text-center tracking-[-0.0902px] w-[332px]">
        <p className="mb-0">Track your donation</p>
        <p>in real time</p>
      </div>
      <CallToActionButton />
      <p className="font-['Poppins:Medium',_sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[0px] text-[13px] text-center tracking-[-0.0533px] w-full">
        Already a member?<span className="font-['Poppins:Bold',_sans-serif]"> </span>
        <span className="font-['Poppins:Bold',_sans-serif] text-[#fb724c]">Sign in</span>
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[51.76%_46.21%_46.49%_46.2%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 15">
        <g id="Group">
          <path d={svgPaths.p4c7e900} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p210f8e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group47868() {
  return (
    <div className="absolute contents left-1/2 top-[399px] translate-x-[-50%]">
      <div className="absolute bg-[#e73a40] left-[calc(33.333%+41px)] rounded-[4.526px] size-[43px] top-[399px]" />
      <div className="absolute inset-[49.97%_46.26%_48.64%_46.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 12">
          <path d={svgPaths.p8f06a80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group />
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p21e39200} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3aa28980} fill="var(--fill-0, white)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p5ab6380} fill="var(--fill-0, white)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p1c908800} fill="var(--fill-0, white)" id="Wifi" />
          <path d={svgPaths.pcce4d00} fill="var(--fill-0, white)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[12px] top-[12px] w-[52px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p2b8d6300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23f4f800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2c24a7c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p823e200} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[12px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[375px]" data-name="Status Bar">
      <RightSide />
      <LeftSide />
    </div>
  );
}

export default function FiveTwoGoApp() {
  return (
    <div className="bg-[#202020] overflow-clip relative rounded-[40px] size-full" data-name="FiveTwoGo App">
      <div className="absolute h-[709px] left-[-29px] top-[-214px] w-[433px]" data-name="ONBOARDING PICTURE">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgOnboardingPicture} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgOnboardingPicture1} />
          <div className="absolute bg-gradient-to-b from-[54.443%] from-[rgba(0,0,0,0)] inset-0 to-[#202020]" />
        </div>
      </div>
      <p className="absolute capitalize font-['Poppins:Black',_sans-serif] leading-[0.835] left-[calc(50%-0.141px)] not-italic text-[#e73a40] text-[56.12px] text-center text-nowrap top-[455px] translate-x-[-50%] whitespace-pre">FiveTwoGo</p>
      <div className="absolute bg-[#fcfcfc] bottom-[9px] h-[3px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
      <Frame33537 />
      <Group47868 />
      <StatusBar />
    </div>
  );
}