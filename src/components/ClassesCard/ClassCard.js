import React from "react";
import { useState } from "react";

export default function ProjectCard({ classList }) {
  const [currPage, setCurrPage] = useState(1);
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
      <div className="divider">
        <h1 className="lg:text-3xl text-2xl font-bold text-white font-mono pt-4">
          Relevant Course Work
        </h1>
      </div>

      <div className="flex flex-col justify-center py-4">
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
                    <tr key={index}>
                      <td>{classObject.courseId}</td>
                      <td>{classObject.courseName}</td>
                      <td>{classObject.courseLevel}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {pageCount > 1 && (
          <div className="flex justify-center">
            <div className="join ">
              <button className="join-item btn bg-black" onClick={getPrevPage}>
                «
              </button>
              <button className="join-item btn bg-black">
                Page {currPage}/{pageCount}
              </button>
              <button className="join-item btn bg-black" onClick={getNextPage}>
                »
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
