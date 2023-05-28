import React, { useState } from "react";
import classes from "../../data/classes.json";

export default function About() {
  const [currPage, setCurrPage] = useState(1);
  const classList = classes["classes"];
  const pageIterator = 3;
  const pageCount = Math.ceil(classList.length / pageIterator);

  function getNextPage() {
    //goes to the next page of the file
    if (currPage < pageCount) {
      const newNextPage = currPage + 1;
      setCurrPage(newNextPage);
    }
  }

  function getPrevPage() {
    //goes to the previous page of the file
    if (currPage > 1) {
      const newPrevPage = currPage - 1;
      setCurrPage(newPrevPage);
    }
  }

  return (
    <>
      <h1 className="lg:text-7xl text-4xl font-bold text-white font-mono">
        About Me
      </h1>
      <p className="card-title py-6 md:text-lg text-sm font-thin">
        I am currently engaged in the pursuit of a master's degree in Computer
        Science at the highly regarded University of Maryland, Baltimore County
        (UMBC). It gives me great pride to highlight that I have also earned my
        undergraduate degree from UMBC, achieving a notable 3.67 GPA upon
        graduation. Allow me to provide you with an overview of the extensive
        range of courses I have effectively completed thus far
      </p>
      <div className="flex flex-col justify-center">
        <div className="overflow-x-auto md:max-w-max max-w-xs font-mono">
          <table className="table">
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Course Level</th>
              </tr>
            </thead>
            <tbody>
              {classList
                .slice((currPage - 1) * pageIterator, currPage * pageIterator)
                .map((classObject, index) => {
                  return (
                    <tr className="">
                      <td>{classObject.courseId}</td>
                      <td>{classObject.courseName}</td>
                      <td>{classObject.courseLevel}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center">
          <div className="btn-group">
            <button className="btn" onClick={getPrevPage}>
              «
            </button>
            <button className="btn">
              Page {currPage}/{pageCount}
            </button>
            <button className="btn" onClick={getNextPage}>
              »
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
