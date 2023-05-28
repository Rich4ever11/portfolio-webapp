import React from "react";

export default function ArtWork() {
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
                <div className="carousel rounded-box">
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1584446922442-7ac6b8c118f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=912&q=80"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1584446922448-efd3351dad71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=828&q=80"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1576504742634-7b20e9a1086d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1204&q=80"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1577081395884-e70fc91645ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1668&q=80"
                      alt="Burger"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1576503918400-0b982e6a98bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=946&q=80"
                      alt="Burger"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
