import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined"; //services
export default function ServicesSection() {
  return (
    <section id="services">
      <div className="container-wrapper">
        <button className="heading">
          <DesignServicesOutlinedIcon />
          Services
        </button>
        <h3>My Specializations:</h3>
        <ul className="service-list">
          <li>
            <div className="service-tile">
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                Full Stack Web development
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                I can build a website's both frontend and backend as required
                from scratch.
              </p>
              <p style={{ marginTop: "0.5rem" }}>3 projects</p>
            </div>
          </li>
          <li>
            <div className="service-tile">
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                Flutter app development
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Can build a mobile app using Flutter framework for cross system
                applications.
              </p>
              <p style={{ marginTop: "0.5rem" }}>3 projects</p>
            </div>
          </li>
          <li>
            <div className="service-tile">
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                Java development
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Java being my primary programming language, I can build an
                enterprise/ B2B applications using Java.
              </p>
              <p style={{ marginTop: "0.5rem" }}>1 projects</p>
            </div>
          </li>
          <li>
            <div className="service-tile">
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                UI/UX designing.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Can also design a beautiful and minimal software graphics
                interface for the client.
              </p>
              <p style={{ marginTop: "0.5rem" }}>7 projects</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
