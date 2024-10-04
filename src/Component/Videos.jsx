import React from 'react';
import { Container } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import './style.css';

const VideoCarousel = () => {
  const videos = [
    {
      title: "Invest to your FULL POTENTIAL with the SBI Securities App!",
      imgSrc: "https://www.sbisecurities.in/fileserver/assets/images/demo/4. Invest to your FULL POTENTIAL with the SBI Securities App.jpg",
      videoSrc: "https://www.sbisecurities.in/fileserver/marketing/videos/4. Invest to your FULL POTENTIAL with the SBI Securities App!.mp4"
    },
    {
      title: "Begin your Investment journey with India’s trusted Nivesh SAATHI",
      imgSrc: "https://www.sbisecurities.in/fileserver/assets/images/demo/5. Begin your Investment journey with India s trusted Nivesh SAATHI.jpg",
      videoSrc: "https://www.sbisecurities.in/fileserver/marketing/videos/5. Begin your Investment journey with India s trusted Nivesh SAATHI.mp4"
    },
    {
      title: "Unleash the Power of E-Margin",
      imgSrc: "https://www.sbisecurities.in/fileserver/assets/images/demo/6. Unleash the Power of E-Margin.jpg",
      videoSrc: "https://www.sbisecurities.in/fileserver/marketing/videos/6. Unleash the Power of E-Margin.mp4"
    },
    // Add more videos as needed
  ];

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };

  return (
    <Container className="pt-5">
    <div className="video-carousel">
      <h2 className="text-center">Videos</h2>
      <OwlCarousel className="owl-theme" {...options}>
        {videos.map((video, index) => (
          <div className="item" key={index}>
            <div className="award-box">
              <figure className="image-box">
                <img src={video.imgSrc} alt={video.title} />
              </figure>
              <div className="video-btn">
                <a href={video.videoSrc} target="_blank" rel="noopener noreferrer" className="popup-video">
                  <i className="fas fa-play"></i>
                </a>
              </div>
              <div className="lower-content">
                <p className="content">
                  <a target="_blank" rel="noopener noreferrer">{video.title}</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
    </Container>
  );
};

export default VideoCarousel;
