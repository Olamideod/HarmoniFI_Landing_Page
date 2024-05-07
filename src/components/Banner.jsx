import React from 'react';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url('https://i.ibb.co/vPQLZGw/landing-page-cover.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'opacity 0.8s ease', // Adding transition for opacity
  };

  return (
    <section className='banner' style={bannerStyle}>
        <div className="banner-content">
            <h1> <br /></h1>
            <p></p>
            <button>GET HarmoniFi FREE</button>
        </div>
    </section>
  );
}

export default Banner;
