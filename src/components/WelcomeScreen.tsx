import svgPaths from '../imports/svg-py8k0vuqly';
import imgOnboardingPicture from 'figma:asset/749367f3ce6dad591c7e6355c277c497a23d60bc.png';
import imgOnboardingPicture1 from 'figma:asset/c639f6574037a06d6adade1f3cd30c90b170b128.png';
import logoImage from 'figma:asset/1c8f62aa84be488dab54c639f313c355a72b3b98.png';

interface WelcomeScreenProps {
    onGetStarted: () => void;
}

function CallToActionButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="bg-[#e73a40] box-border content-stretch flex gap-[10px] items-center justify-center px-[74px] py-[16px] relative rounded-[14px] shrink-0 w-full max-w-[332px] hover:bg-[#d12f35] transition-colors cursor-pointer"
            data-name="CALL TO ACTION BUTTON"
        >
            <p className="font-['Poppins:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[17px] text-nowrap tracking-[-0.0697px] whitespace-pre">
                Get Started
            </p>
        </button>
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
        <div className="absolute h-[44px] left-0 overflow-clip top-0 w-full max-w-[375px]" data-name="Status Bar">
            <RightSide />
            <LeftSide />
        </div>
    );
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden" data-name="FiveTwoGo App">
            <div className="relative w-full max-w-[375px] min-h-screen mx-auto overflow-y-auto bg-[#202020]">
                {/* Mobile Layout */}
                <div className="md:hidden">
                    {/* Background Image */}
                    <div
                        className="absolute h-[709px] left-1/2 top-[-214px] lg:!top-0 -translate-x-1/2 w-full max-w-[433px]"
                        data-name="ONBOARDING PICTURE"
                    >
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                            <img
                                alt=""
                                className="absolute max-w-none object-cover lg:object-top object-center size-full"
                                src={imgOnboardingPicture1}
                            />
                            <div className="absolute bg-gradient-to-b from-[54.443%] from-[rgba(0,0,0,0)] inset-0 to-[#202020]" />
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="absolute left-1/2 top-[399px] -translate-x-1/2 z-10">
                        <img src={logoImage} alt="FiveTwoGo Logo" className="w-[60px] h-[60px] rounded-[8px]" />
                    </div>

                    {/* FiveTwoGo Text */}
                    <p className="absolute capitalize font-['Poppins:Black',_sans-serif] leading-[0.835] left-[calc(50%-0.141px)] not-italic text-[#e73a40] text-[56.12px] text-center text-nowrap top-[479px] translate-x-[-50%] whitespace-pre z-10">
                        FiveTwoGo
                    </p>

                    {/* Content */}
                    <div className="absolute content-stretch flex flex-col gap-[22px] h-[240px] items-center left-1/2 -translate-x-1/2 top-[535px] w-full px-4 z-10">
                        <div className="font-['Poppins:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[22px] text-center tracking-[-0.0902px] w-full max-w-[332px]">
                            <p className="mb-0">Track your donation</p>
                            <p>in real time</p>
                        </div>
                        <CallToActionButton onClick={onGetStarted} />
                        <p className="font-['Poppins:Medium',_sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[0px] text-[13px] text-center tracking-[-0.0533px] w-full">
                            Already a member?
                            <span className="font-['Poppins:Bold',_sans-serif]"> </span>
                            <span className="font-['Poppins:Bold',_sans-serif] text-[#e73a40]">Sign in</span>
                        </p>
                    </div>

                    {/* Home Indicator */}
                    <div
                        className="absolute bg-[#fcfcfc] bottom-[9px] h-[3px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]"
                        data-name="Home Indicator"
                    />
                </div>

                <StatusBar />
            </div>
        </div>
    );
}
