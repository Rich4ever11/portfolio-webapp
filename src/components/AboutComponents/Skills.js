// import skills from "../../data/skills.json";

export default function Certificates() {
  // const programming_languages = skills["programming_languages"];

  return (
    <>
      {/* <div className="divider my-10 py-10">
        <h1 className="lg:text-7xl text-4xl font-bold text-white font-mono pt-4">
          SKILLS
        </h1>
      </div> */}

      {/* <div className="w-auto">
        <div className="overflow-x-auto">
          <div className="divider my-10 py-10">
            <h1 className="lg:text-4xl text-2xl font-bold text-white font-mono pt-4">
              CODING LANGUAGES
            </h1>
          </div>
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Language</th>
                <th>Proficiency</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {programming_languages.map((language, index) => (
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="ring-sky-200 ring-offset-base-100 rounded-full ring ring-offset-2 h-12 w-12 ">
                          <img
                            src={language.logo_path}
                            alt="Programming Tailwind CSS Avatar"
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-mono ">{language.name}</h3>
                    </div>
                  </td>
                  <td>
                    <h3 className="text-md font-mono ">{language.proficeny}</h3>
                  </td>
                  <td>
                    {" "}
                    <div className="p-1">
                      <progress
                        className="progress progress-info w-56"
                        value={language.progress}
                        max="100"
                      ></progress>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
}
