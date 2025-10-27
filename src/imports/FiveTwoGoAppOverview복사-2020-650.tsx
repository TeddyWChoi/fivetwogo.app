import svgPaths from "./svg-mjgb6p6kfs";
import imgPrimitiveImg from "figma:asset/a7d1b9fd5db6ac722338cf21cdd363647fc2affa.png";
import imgPrimitiveImg1 from "figma:asset/1630daba7c272cda2ff2590964c9ec0dbbe8f5eb.png";
import imgPrimitiveImg2 from "figma:asset/179c60a49c3e5e792d810c4080cfade6ef0ff00e.png";
import imgPrimitiveImg3 from "figma:asset/f791318a2eafc0b7091854124e775f09081b758d.png";
import imgPrimitiveImg4 from "figma:asset/b1857ac949026f35b594fd32645a4ac74f3a3aa3.png";
import imgPrimitiveImg5 from "figma:asset/2faa64ea9107dcd1fad1ec1d745fe28bf39f1433.png";
import imgPrimitiveImg6 from "figma:asset/c3926fcd9e3897ea5a6b0f6846ecb2f6b1d1b4f2.png";
import imgPrimitiveImg7 from "figma:asset/dd29d0bbfbd52e46558e4dd2c1b27c3ad9c7ba1a.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[19.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e254240} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6658" />
          <path d="M15.8251 9.99483H4.16451" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6658" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[3.35896e+07px] shrink-0 size-[39.995px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[39.995px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] tracking-[0.0703px] whitespace-pre">착한 가게</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#ffe2e2] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">랭킹 및 주변 가게</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[51.976px] relative shrink-0 w-[96.1px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.907e_-6px] h-[51.976px] items-start relative w-[96.1px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[15.986px] h-[51.976px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[#e73a40] h-[367px] items-start left-0 pb-0 pt-[23.994px] px-[23.994px] rounded-bl-[24px] rounded-br-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#e7000b] top-0 w-[393px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2c2d7500} id="Vector" stroke="var(--stroke-0, #E73A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
          <path d={svgPaths.p24d31900} id="Vector_2" stroke="var(--stroke-0, #E73A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-[198.458px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.994px] relative w-[198.458px]">
        <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">이달의 사회적 기여 Top10 기업</p>
      </div>
    </div>
  );
}

function CsrRanking() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-[297.436px]" data-name="CSRRanking">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.997px] h-[23.994px] items-center relative w-[297.436px]">
        <Icon1 />
        <Heading1 />
      </div>
    </div>
  );
}

function CsrRanking1() {
  return (
    <div className="h-[79.959px] relative shrink-0 w-[297.436px]" data-name="CSRRanking">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[79.959px] relative w-[297.436px]">
        <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[293px]">이 랭킹은 각 기업의 총 기부 횟수와 CSR(사회적 책임) 포인트를 기반으로 산정됩니다. 사회적 책임을 꾸준히 실천하는 기업일수록 더 높은 등급과 신뢰를 얻게 됩니다.</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#fef3f3] h-[183.927px] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[31.987px] h-[183.927px] items-start pb-0 pl-[23.994px] pr-0 pt-[23.994px] relative w-full">
          <CsrRanking />
          <CsrRanking1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[57.76px] size-[15.986px] top-[6.51px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2020_310)" id="Icon">
          <path d={svgPaths.p3bf20880} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
          <path d={svgPaths.p4ec8800} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
        </g>
        <defs>
          <clipPath id="clip0_2020_310">
            <rect fill="white" height="15.9855" width="15.9855" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-white h-[29.015px] left-[2.99px] rounded-[14px] top-[3.49px] w-[169.724px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[1.001px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon2 />
      <p className="absolute font-['Inter:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[20px] left-[87.73px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.52px] tracking-[-0.1504px] whitespace-pre">랭킹</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[49.88px] size-[15.986px] top-[6.51px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2020_303)" id="Icon">
          <path d={svgPaths.p66fa130} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
          <path d={svgPaths.p117d5500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
        </g>
        <defs>
          <clipPath id="clip0_2020_303">
            <rect fill="white" height="15.9855" width="15.9855" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="absolute h-[29.015px] left-[172.71px] rounded-[14px] top-[3.49px] w-[169.724px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[1.001px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon3 />
      <p className="absolute font-['Inter:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[20px] left-[79.85px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.52px] tracking-[-0.1504px] whitespace-pre">내 주변</p>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-[#ececf0] h-[35.991px] relative rounded-[14px] shrink-0 w-[345.424px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.991px] relative w-[345.424px]">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">이번 달 착한 가게 랭킹</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">총 기부 횟수 및 영향력 기준</p>
    </div>
  );
}

function CsrRanking2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.989px] h-[47.972px] items-start left-0 top-0 w-[345.424px]" data-name="CSRRanking">
      <Heading3 />
      <Paragraph1 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] tracking-[0.0703px] whitespace-pre">🥇</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[55.996px] relative rounded-[3.35896e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[55.996px] items-center justify-center relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[28.43px] not-italic text-[#6a7282] text-[12px] text-center top-0 translate-x-[-50%] w-[14px]">#1</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[75.97px] relative shrink-0 w-[55.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.989px] h-[75.97px] items-start relative w-[55.996px]">
        <Container3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[23.994px] left-0 top-0 w-[74.797px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">CJ제일제당</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute h-[21.96px] left-0 rounded-[8px] top-[30px] w-[38.744px]" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-[38.744px]">
        <p className="absolute font-['Inter:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[16px] left-[8.99px] not-italic text-[#4a5565] text-[12px] text-nowrap top-[2.99px] whitespace-pre">기업</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[51.976px] left-0 top-0 w-[74.797px]" data-name="Container">
      <Heading2 />
      <Badge />
    </div>
  );
}

function PrimitiveImg() {
  return (
    <div className="basis-0 grow h-[39.995px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.995px] w-full" />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-[193.47px] overflow-clip rounded-[3.35896e+07px] size-[39.995px] top-0" data-name="Primitive.span">
      <PrimitiveImg />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[51.976px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <PrimitiveSpan />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">총 기부 횟수</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e73a40] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">2,847</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-0 pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.725px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">CSR 포인트</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">14,235</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-[122.72px] pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.741px]" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[57.951px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[121.924px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.997px] h-[121.924px] items-start relative w-full">
        <Container6 />
        <Container9 />
      </div>
    </div>
  );
}

function CsrRanking3() {
  return (
    <div className="h-[121.924px] relative shrink-0 w-[305.445px]" data-name="CSRRanking">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.986px] h-[121.924px] items-start relative w-[305.445px]">
        <Container4 />
        <Container10 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.904px] items-start left-0 pb-0 pl-[19.99px] pr-0 pt-[19.99px] rounded-[14px] shadow-[0px_0px_0px_2px_#ffc9c9,0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[63.96px] w-[345.424px]" data-name="Card">
      <CsrRanking3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] tracking-[0.0703px] whitespace-pre">🥇</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[55.996px] relative rounded-[3.35896e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[55.996px] items-center justify-center relative w-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[28.1px] not-italic text-[#6a7282] text-[12px] text-center top-0 translate-x-[-50%] w-[15px]">#2</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[75.97px] relative shrink-0 w-[55.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.989px] h-[75.97px] items-start relative w-[55.996px]">
        <Container11 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">파리바게뜨</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[21.96px] relative rounded-[8px] shrink-0 w-full" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[16px] left-[8.99px] not-italic text-[#4a5565] text-[12px] text-nowrap top-[2.99px] whitespace-pre">베이커리 체인</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.006px] h-[51.976px] items-start left-0 top-0 w-[83.509px]" data-name="Container">
      <Heading4 />
      <Badge1 />
    </div>
  );
}

function PrimitiveImg1() {
  return (
    <div className="basis-0 grow h-[39.995px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.995px] w-full" />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="absolute content-stretch flex items-start left-[193.47px] overflow-clip rounded-[3.35896e+07px] size-[39.995px] top-0" data-name="Primitive.span">
      <PrimitiveImg1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[51.976px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <PrimitiveSpan1 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">총 기부 횟수</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e73a40] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">2,156</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-0 pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.725px]" data-name="Container">
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">CSR 포인트</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">10,780</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-[122.72px] pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.741px]" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[57.951px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[121.924px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.997px] h-[121.924px] items-start relative w-full">
        <Container14 />
        <Container17 />
      </div>
    </div>
  );
}

function CsrRanking4() {
  return (
    <div className="h-[121.924px] relative shrink-0 w-[305.445px]" data-name="CSRRanking">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.986px] h-[121.924px] items-start relative w-[305.445px]">
        <Container12 />
        <Container18 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.904px] items-start left-0 pb-0 pl-[19.99px] pr-0 pt-[19.99px] rounded-[14px] shadow-[0px_0px_0px_2px_#ffc9c9,0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[237.86px] w-[345.424px]" data-name="Card">
      <CsrRanking4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] tracking-[0.0703px] whitespace-pre">🥇</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[55.996px] relative rounded-[3.35896e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[55.996px] items-center justify-center relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[28.46px] not-italic text-[#6a7282] text-[12px] text-center top-0 translate-x-[-50%] w-[16px]">#3</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[75.97px] relative shrink-0 w-[55.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.989px] h-[75.97px] items-start relative w-[55.996px]">
        <Container19 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[23.994px] left-0 top-0 w-[101.059px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">스타벅스 코리아</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute h-[21.96px] left-0 rounded-[8px] top-[30px] w-[62.769px]" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-[62.769px]">
        <p className="absolute font-['Inter:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[16px] left-[8.99px] not-italic text-[#4a5565] text-[12px] text-nowrap top-[2.99px] whitespace-pre">커피 체인</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[51.976px] left-0 top-0 w-[101.059px]" data-name="Container">
      <Heading5 />
      <Badge2 />
    </div>
  );
}

function PrimitiveImg2() {
  return (
    <div className="basis-0 grow h-[39.995px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.995px] w-full" />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="absolute content-stretch flex items-start left-[193.47px] overflow-clip rounded-[3.35896e+07px] size-[39.995px] top-0" data-name="Primitive.span">
      <PrimitiveImg2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[51.976px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <PrimitiveSpan2 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">총 기부 횟수</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e73a40] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">1,892</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-0 pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.725px]" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">CSR 포인트</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">9,460</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-[122.72px] pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.741px]" data-name="Container">
      <Paragraph15 />
      <Paragraph16 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[57.951px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 grow h-[121.924px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.997px] h-[121.924px] items-start relative w-full">
        <Container22 />
        <Container25 />
      </div>
    </div>
  );
}

function CsrRanking5() {
  return (
    <div className="h-[121.924px] relative shrink-0 w-[305.445px]" data-name="CSRRanking">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.986px] h-[121.924px] items-start relative w-[305.445px]">
        <Container20 />
        <Container26 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.904px] items-start left-0 pb-0 pl-[19.99px] pr-0 pt-[19.99px] rounded-[14px] shadow-[0px_0px_0px_2px_#ffc9c9,0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[411.76px] w-[345.424px]" data-name="Card">
      <CsrRanking5 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] tracking-[0.0703px] whitespace-pre">🥈</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[55.996px] relative rounded-[3.35896e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[55.996px] items-center justify-center relative w-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[28.44px] not-italic text-[#6a7282] text-[12px] text-center top-0 translate-x-[-50%] w-[16px]">#4</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[75.97px] relative shrink-0 w-[55.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.989px] h-[75.97px] items-start relative w-[55.996px]">
        <Container27 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">뚜레쥬르</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="h-[21.96px] relative rounded-[8px] shrink-0 w-full" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[16px] left-[8.99px] not-italic text-[#4a5565] text-[12px] text-nowrap top-[2.99px] whitespace-pre">베이커리 체인</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.006px] h-[51.976px] items-start left-0 top-0 w-[83.509px]" data-name="Container">
      <Heading6 />
      <Badge3 />
    </div>
  );
}

function PrimitiveImg3() {
  return (
    <div className="basis-0 grow h-[39.995px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg3} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.995px] w-full" />
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="absolute content-stretch flex items-start left-[193.47px] overflow-clip rounded-[3.35896e+07px] size-[39.995px] top-0" data-name="Primitive.span">
      <PrimitiveImg3 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[51.976px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <PrimitiveSpan3 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">총 기부 횟수</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e73a40] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">1,543</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-0 pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.725px]" data-name="Container">
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">CSR 포인트</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">7,715</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-[122.72px] pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.741px]" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[57.951px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow h-[121.924px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.997px] h-[121.924px] items-start relative w-full">
        <Container30 />
        <Container33 />
      </div>
    </div>
  );
}

function CsrRanking6() {
  return (
    <div className="h-[121.924px] relative shrink-0 w-[305.445px]" data-name="CSRRanking">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.986px] h-[121.924px] items-start relative w-[305.445px]">
        <Container28 />
        <Container34 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.904px] items-start left-0 pb-0 pl-[19.99px] pr-0 pt-[19.99px] rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[585.66px] w-[345.424px]" data-name="Card">
      <CsrRanking6 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] tracking-[0.0703px] whitespace-pre">🥈</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[55.996px] relative rounded-[3.35896e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[55.996px] items-center justify-center relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[28.01px] not-italic text-[#6a7282] text-[12px] text-center top-0 translate-x-[-50%] w-[15px]">#5</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[75.97px] relative shrink-0 w-[55.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.989px] h-[75.97px] items-start relative w-[55.996px]">
        <Container35 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">카페베네</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="h-[21.96px] relative rounded-[8px] shrink-0 w-full" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[16px] left-[8.99px] not-italic text-[#4a5565] text-[12px] text-nowrap top-[2.99px] whitespace-pre">커피 체인</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.006px] h-[51.976px] items-start left-0 top-0 w-[62.769px]" data-name="Container">
      <Heading7 />
      <Badge4 />
    </div>
  );
}

function PrimitiveImg4() {
  return (
    <div className="basis-0 grow h-[39.995px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg4} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.995px] w-full" />
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="absolute content-stretch flex items-start left-[193.47px] overflow-clip rounded-[3.35896e+07px] size-[39.995px] top-0" data-name="Primitive.span">
      <PrimitiveImg4 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[51.976px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <PrimitiveSpan4 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">총 기부 횟수</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e73a40] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">1,287</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-0 pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.725px]" data-name="Container">
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">CSR 포인트</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">6,435</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-[122.72px] pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.741px]" data-name="Container">
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[57.951px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="basis-0 grow h-[121.924px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.997px] h-[121.924px] items-start relative w-full">
        <Container38 />
        <Container41 />
      </div>
    </div>
  );
}

function CsrRanking7() {
  return (
    <div className="h-[121.924px] relative shrink-0 w-[305.445px]" data-name="CSRRanking">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.986px] h-[121.924px] items-start relative w-[305.445px]">
        <Container36 />
        <Container42 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.904px] items-start left-0 pb-0 pl-[19.99px] pr-0 pt-[19.99px] rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[759.56px] w-[345.424px]" data-name="Card">
      <CsrRanking7 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] tracking-[0.0703px] whitespace-pre">🥈</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[55.996px] relative rounded-[3.35896e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[55.996px] items-center justify-center relative w-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[28.4px] not-italic text-[#6a7282] text-[12px] text-center top-0 translate-x-[-50%] w-[16px]">#6</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[75.97px] relative shrink-0 w-[55.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.989px] h-[75.97px] items-start relative w-[55.996px]">
        <Container43 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[23.994px] left-0 top-0 w-[55.355px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">롯데마트</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute h-[21.96px] left-0 rounded-[8px] top-[30px] w-[38.744px]" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-[38.744px]">
        <p className="absolute font-['Inter:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[16px] left-[8.99px] not-italic text-[#4a5565] text-[12px] text-nowrap top-[2.99px] whitespace-pre">유통</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[51.976px] left-0 top-0 w-[55.355px]" data-name="Container">
      <Heading8 />
      <Badge5 />
    </div>
  );
}

function PrimitiveImg5() {
  return (
    <div className="basis-0 grow h-[39.995px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg5} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.995px] w-full" />
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="absolute content-stretch flex items-start left-[193.47px] overflow-clip rounded-[3.35896e+07px] size-[39.995px] top-0" data-name="Primitive.span">
      <PrimitiveImg5 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[51.976px] relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <PrimitiveSpan5 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">총 기부 횟수</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e73a40] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">1,098</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-0 pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.725px]" data-name="Container">
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">CSR 포인트</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">5,490</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-[122.72px] pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.741px]" data-name="Container">
      <Paragraph30 />
      <Paragraph31 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[57.951px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow h-[121.924px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.997px] h-[121.924px] items-start relative w-full">
        <Container46 />
        <Container49 />
      </div>
    </div>
  );
}

function CsrRanking8() {
  return (
    <div className="h-[121.924px] relative shrink-0 w-[305.445px]" data-name="CSRRanking">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.986px] h-[121.924px] items-start relative w-[305.445px]">
        <Container44 />
        <Container50 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.904px] items-start left-0 pb-0 pl-[19.99px] pr-0 pt-[19.99px] rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[933.46px] w-[345.424px]" data-name="Card">
      <CsrRanking8 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] tracking-[0.0703px] whitespace-pre">🥉</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[55.996px] relative rounded-[3.35896e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[55.996px] items-center justify-center relative w-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[28.3px] not-italic text-[#6a7282] text-[12px] text-center top-0 translate-x-[-50%] w-[15px]">#7</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[75.97px] relative shrink-0 w-[55.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.989px] h-[75.97px] items-start relative w-[55.996px]">
        <Container51 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[23.994px] left-0 top-0 w-[55.355px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">홈플러스</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute h-[21.96px] left-0 rounded-[8px] top-[30px] w-[38.744px]" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-[38.744px]">
        <p className="absolute font-['Inter:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[16px] left-[8.99px] not-italic text-[#4a5565] text-[12px] text-nowrap top-[2.99px] whitespace-pre">유통</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[51.976px] left-0 top-0 w-[55.355px]" data-name="Container">
      <Heading9 />
      <Badge6 />
    </div>
  );
}

function PrimitiveImg6() {
  return (
    <div className="basis-0 grow h-[39.995px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg6} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.995px] w-full" />
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="absolute content-stretch flex items-start left-[193.47px] overflow-clip rounded-[3.35896e+07px] size-[39.995px] top-0" data-name="Primitive.span">
      <PrimitiveImg6 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[51.976px] relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <PrimitiveSpan6 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">총 기부 횟수</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e73a40] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">876</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-0 pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.725px]" data-name="Container">
      <Paragraph33 />
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">CSR 포인트</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">4,380</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-[122.72px] pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.741px]" data-name="Container">
      <Paragraph35 />
      <Paragraph36 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[57.951px] relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="basis-0 grow h-[121.924px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.997px] h-[121.924px] items-start relative w-full">
        <Container54 />
        <Container57 />
      </div>
    </div>
  );
}

function CsrRanking9() {
  return (
    <div className="h-[121.924px] relative shrink-0 w-[305.445px]" data-name="CSRRanking">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.986px] h-[121.924px] items-start relative w-[305.445px]">
        <Container52 />
        <Container58 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.904px] items-start left-0 pb-0 pl-[19.99px] pr-0 pt-[19.99px] rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[1107.36px] w-[345.424px]" data-name="Card">
      <CsrRanking9 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] tracking-[0.0703px] whitespace-pre">🥉</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[55.996px] relative rounded-[3.35896e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[55.996px] items-center justify-center relative w-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[28.38px] not-italic text-[#6a7282] text-[12px] text-center top-0 translate-x-[-50%] w-[16px]">#8</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[75.97px] relative shrink-0 w-[55.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.989px] h-[75.97px] items-start relative w-[55.996px]">
        <Container59 />
        <Paragraph37 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">GS25</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="h-[21.96px] relative rounded-[8px] shrink-0 w-full" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[16px] left-[8.99px] not-italic text-[#4a5565] text-[12px] text-nowrap top-[2.99px] whitespace-pre">편의점</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.006px] h-[51.976px] items-start left-0 top-0 w-[49.114px]" data-name="Container">
      <Heading10 />
      <Badge7 />
    </div>
  );
}

function PrimitiveImg7() {
  return (
    <div className="basis-0 grow h-[39.995px] min-h-px min-w-px relative shrink-0" data-name="Primitive.img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimitiveImg7} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.995px] w-full" />
    </div>
  );
}

function PrimitiveSpan7() {
  return (
    <div className="absolute content-stretch flex items-start left-[193.47px] overflow-clip rounded-[3.35896e+07px] size-[39.995px] top-0" data-name="Primitive.span">
      <PrimitiveImg7 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[51.976px] relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <PrimitiveSpan7 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">총 기부 횟수</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e73a40] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">654</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-0 pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.725px]" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="content-stretch flex h-[15.986px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">CSR 포인트</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#00a63e] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">3,270</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[1.986px] h-[57.951px] items-start left-[122.72px] pb-0 pt-[7.993px] px-[7.993px] rounded-[10px] top-0 w-[110.741px]" data-name="Container">
      <Paragraph40 />
      <Paragraph41 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[57.951px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="basis-0 grow h-[121.924px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.997px] h-[121.924px] items-start relative w-full">
        <Container62 />
        <Container65 />
      </div>
    </div>
  );
}

function CsrRanking10() {
  return (
    <div className="h-[121.924px] relative shrink-0 w-[305.445px]" data-name="CSRRanking">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.986px] h-[121.924px] items-start relative w-[305.445px]">
        <Container60 />
        <Container66 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[161.904px] items-start left-0 pb-0 pl-[19.99px] pr-0 pt-[19.99px] rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[1281.26px] w-[345.424px]" data-name="Card">
      <CsrRanking10 />
    </div>
  );
}

function TabPanel() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[345.424px]" data-name="Tab Panel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[345.424px]">
        <CsrRanking2 />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
        <Card7 />
        <Card8 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[31.987px] h-[1511.14px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabList />
      <TabPanel />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[23.994px] h-[1719.06px] items-start left-0 px-[23.994px] py-0 top-[107.96px] w-[393.412px]" data-name="Container">
      <Card />
      <PrimitiveDiv />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p11eaac00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
          <path d={svgPaths.pd023e00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[10.386px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[10.386px]">
        <p className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap whitespace-pre">홈</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.989px] h-[63.989px] items-center justify-center left-0 top-0 w-[90.36px]" data-name="Button">
      <Icon4 />
      <Text8 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p391b2ef0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[20.756px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[20.756px]">
        <p className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap whitespace-pre">기부</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.989px] h-[63.989px] items-center justify-center left-[90.36px] top-0 w-[90.36px]" data-name="Button">
      <Icon5 />
      <Text9 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_2020_299)" id="Icon">
          <path d={svgPaths.p160ecf80} fill="var(--fill-0, #FFE2E2)" id="Vector" stroke="var(--stroke-0, #E73A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.49936" />
          <path d={svgPaths.p325fe880} fill="var(--fill-0, #FFE2E2)" id="Vector_2" stroke="var(--stroke-0, #E73A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.49936" />
        </g>
        <defs>
          <clipPath id="clip0_2020_299">
            <rect fill="white" height="23.9938" width="23.9938" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[20.756px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[20.756px]">
        <p className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#e73a40] text-[12px] text-nowrap whitespace-pre">지도</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.989px] h-[63.989px] items-center justify-center left-[180.72px] top-0 w-[90.36px]" data-name="Button">
      <Icon6 />
      <Text10 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3c684400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
          <path d={svgPaths.p323e3780} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[20.756px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.986px] items-start relative w-[20.756px]">
        <p className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap whitespace-pre">마이</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.989px] h-[63.989px] items-center justify-center left-[271.08px] top-0 w-[90.36px]" data-name="Button">
      <Icon7 />
      <Text11 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[63.989px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[64.99px] items-start left-0 pb-0 pt-[1.001px] px-[15.985px] top-[1842px] w-[393.412px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[1.001px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container68 />
    </div>
  );
}

function CsrRanking11() {
  return (
    <div className="absolute bg-gradient-to-b from-[#fef2f2] h-[1907.01px] left-0 to-[#ffffff] top-0 w-[393.412px]" data-name="CSRRanking">
      <Container2 />
      <Container67 />
      <Navigation />
    </div>
  );
}

export default function FiveTwoGoAppOverview() {
  return (
    <div className="bg-white relative size-full" data-name="FiveTwoGo App Overview (복사)">
      <CsrRanking11 />
    </div>
  );
}