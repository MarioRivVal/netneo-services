import AsideBox from "../layouts/AsideBox";

export default function PortfolioBox() {
  return (
    <section className="section u--bg-light-blue">
      <div className="container">
        <AsideBox
          directory="generals"
          scope="curriculum"
          reverse={true}
          box={true}
          buttons={{
            display: "both",
            darkBtnTo: "https://netneoportfolio.netlify.app/",
            lightBtnTo: "/docs/CV_Mario_Rivera_esp_digital.pdf",
          }}
        />
      </div>
    </section>
  );
}
