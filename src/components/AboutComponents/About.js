import ClassCard from "../ClassesCard/ClassCard";
import classes from "../../data/classes.json";
import accomplishments from "../../data/accomplishments.json";

export default function About() {
  const gradClasses = classes["classes"].filter(
    (course) => course.courseLevel === "Graduate" && course.school === "UMBC"
  );
  const undergradClasses = classes["classes"].filter(
    (course) =>
      course.courseLevel === "Undergraduate" && course.school === "UMBC"
  );

  const undergradWWUClasses = classes["classes"].filter(
    (course) =>
      course.courseLevel === "Undergraduate" && course.school === "WWU"
  );

  const UMBCAccomplishments = accomplishments["accomplishments"]["UMBC"];
  const WWUAccomplishments = accomplishments["accomplishments"]["WWU"];

  return (
    <>
      <div className="divider my-10 py-10">
        <h1
          className="lg:text-7xl text-4xl font-thin text-sky-100 italic font-mono underline"
          style={{ textShadow: "8px 8px 8px black" }}
        >
          EDUCATION
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="card bg-black text-neutral-content w-auto">
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="ring-warning ring-offset-base-100 w-48 rounded-full ring ring-offset-2">
                <img src={"./static/logo/umbclogo.png"} alt="" />
              </div>
            </div>
            <div>
              {UMBCAccomplishments.map((accomplishment, index) => (
                <div
                  className="badge badge-warning badge-outline font-mono m-1 p-4"
                  key={index}
                >
                  {accomplishment}
                </div>
              ))}
            </div>
            <h2
              className="lg:text-4xl text-2xl font-thin text-sky-100 font-mono pt-4 italic "
              style={{ textShadow: "4px 4px 4px #00293e" }}
            >
              Masters of Science in Computer Science
            </h2>
            <h3 className="lg:text-2xl text-xl font-thin text-sky-200  font-mono pt-4 italic">
              Baltimore, MD
            </h3>
            <p className="font-mono italic">
              Aug. 2023 – Dec. 2024 (Completed)
            </p>
            <div>
              <ClassCard classList={gradClasses} />
            </div>
            <div className="divider"></div>
            <h2
              className="lg:text-4xl text-2xl font-thin text-sky-100  font-mono pt-4 italic"
              style={{ textShadow: "4px 4px 4px #00293e" }}
            >
              Bachelor of Science in Computer Science (Cybersecurity Track)
            </h2>
            <h3 className="lg:text-2xl text-xl font-thin text-sky-200  font-mono pt-4 italic">
              Baltimore, MD
            </h3>
            <p className="font-mono font-thin italic">
              Aug. 2020 – May 2023 (Completed)
            </p>
            <div>
              <ClassCard classList={undergradClasses} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="divider"></div>
        <div className="card bg-black text-neutral-content w-auto">
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="ring-green-600 ring-offset-base-100 w-48 rounded-full ring ring-offset-2">
                <img src={"./static/logo/wwulogo.png"} alt="" />
              </div>
            </div>
            <div>
              {WWUAccomplishments.map((accomplishment, index) => (
                <div
                  className="badge badge-success badge-outline font-mono m-1 p-6"
                  key={index}
                >
                  {accomplishment}
                </div>
              ))}
            </div>
            <h2
              className="lg:text-4xl text-2xl font-thin text-sky-100 font-mono pt-4 italic"
              style={{ textShadow: "4px 4px 4px #00293e" }}
            >
              Bachelor of Science in Cybersecurity Studies & Management
              Information Systems
            </h2>
            <h3 className="lg:text-2xl text-xl font-thin text-sky-200  font-mono pt-4 italic">
              Fulton, MO
            </h3>
            <p className="font-mono font-thin italic">
              Aug. 2019 – Apr. 2020 (Transferred)
            </p>
            <div>
              <ClassCard classList={undergradWWUClasses} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
