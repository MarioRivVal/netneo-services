import AsideBox from "../layouts/AsideBox";

export default function PortfolioBox() {
  return (
    <>
      <AsideBox
        directory="home"
        scope="curriculum"
        reverse={true}
        box={true}
        buttons={{
          display: "both",
          darkBtnTo: "https://netneoportfolio.netlify.app/",
          lightBtnTo: "/docs/CV_Mario_Rivera_esp_digital.pdf",
        }}
      />
    </>
  );
}
