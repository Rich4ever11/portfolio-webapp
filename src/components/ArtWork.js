import React from "react";
import artwork from "../data/artwork.json";

export default function ArtWork() {
  const artList = artwork["art"];

  return (
    <div id="artwork">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("./static/herobg.avif")`,
        }}
      >
        <div className="flex flex-col justify-center">
          <div className="mockup-phone border-primary">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 bg-black">
                <div className="carousel carousel-vertical ">
                  {artList.map((art, index) => {
                    return (
                      <div className="carousel-item" key={index}>
                        <img src={art} alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
