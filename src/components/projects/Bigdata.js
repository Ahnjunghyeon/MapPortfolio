import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Bigdata.css";

const Bigdata = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 이미지 배열
  const images = [
    "/images/bigdata/bom1.JPG",
    "/images/bigdata/bom2.JPG",
    "/images/bigdata/bom3.JPG",
    "/images/bigdata/bom4.JPG",
    "/images/bigdata/bom5.JPG",
    "/images/bigdata/bom6.JPG",
    "/images/bigdata/bom7.JPG",
    "/images/bigdata/bombal.JPG",
    "/images/bigdata/bomgold.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="project-detail">
      <div className="bigdatamaintitle">춘천시 빅데이터 경진대회</div>
      <div className="bigdataintroduction">
        {" "}
        <div className="bigdatamaintitlesub">
          대규모 사업유치를 위한 부지선정
        </div>
        <div className="bigdatamaintitlesub">2023.10. ~ 2023.11 </div>
      </div>
      <div className="image-conts">
        <div className="image-container">
          <div className="left-click" onClick={handlePrev}>
            ⮜
          </div>
          <div className="left-click-area" onClick={handlePrev} />
          <img
            src={images[currentIndex]}
            alt="bigdataweb"
            className="bigdataweb-img-width"
          />
          <div className="right-click-area" onClick={handleNext} />
          <div className="right-click" onClick={handleNext}>
            ⮞
          </div>
        </div>
        <div className="skilltitle">💻사용기술</div>
        <div className="bigdataskilletools">
          <img
            src="/images/toolsimage/pythonlogo.png"
            alt="기술1"
            className="tech-image"
          />

          <img
            src="/images/toolsimage/qgislogo.png"
            alt="기술2"
            className="tech-image"
          />
        </div>
        <div className="webexplanation">
          <span>빅데이터 경진대회에서 저희는 </span>
        </div>
        <div className="bigdatawebexplanationsub">
          다양한 주제중에 - "대규모 사업 유치를 위한 부지 선정 및 분석"
          <br />
          주제를 선택했습니다. <br />
          선택한 이유는 빅데이터롤 무언가를 할 때 접근하기 쉽다고
          판단해서였습니다.
        </div>
        <div className="team">
          {" "}
          🧑 팀원 <br />
          <div className="teamlist">
            {" "}
            안중현 : 데이터수집, QGIS - 열지도, 지역분류 Python - 수치분석 및
            초기화,
          </div>
          <div className="teamlist1">
            {" "}
            김영완 : 데이터수집, QGIS - 지역분석, PPT작성{" "}
          </div>
        </div>
        <div className="bigdatawebexplanationsub">
          프로젝트 진행단계는 <br /> 1. 데이터 수집
          <br /> 2. Qgis - 지도출력 / 열지도출력
          <br />
          3. Python - 각 지역 정보 설정 및 초기화 <br />
          4. QGIS + Python - 분석 결과 시각화 및 출력
        </div>
        <div className="bigdatawebexplanationsub">
          저희는 대회 이름인 빅데이터 경진대회인만큼
          <br /> 데이터들을 분석해서 저희의 결과를 보시는 분들이 <br />
          최대한 직관적인 판단을 할 수 있도록 제공하는 것이 목표였습니다.
        </div>
        <div className="bigdatawebexplanationsub">
          💡 결과: 금상 수상
          <br />
          전공과 다른 분야의 대회에 참가하면서 새로운 도전에 대한 자신감을
          얻었습니다. <br />
          또한, 최종 발표를 통해 방송을 송출하는 대회에서 <br />
          직접 발표하는 경험까지 하며 더욱 의미있는 시간이라 생각합니다.
        </div>
      </div>
      <button className="beforepage" onClick={() => navigate(-1)}>
        이전으로 ⤶
      </button>{" "}
      <button className="beforepagebutton" onClick={() => navigate(-1)}>
        이전 페이지로
      </button>{" "}
    </div>
  );
};

export default Bigdata;
