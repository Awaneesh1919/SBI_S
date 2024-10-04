import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './style.css';
import { Container } from 'react-bootstrap';

const blogs = [
  {
    date: '19 Sep 2024',
    title: 'IPO Note – Brainbees Solutions Ltd. (Firstcry)',
    content: 'Brainbees Solutions Ltd (FirstCry) is a one stop omnichannel platform for all needs of babies and mothers',
    imgSrc: 'https://www.sbisecurities.in/fileserver/assets/images/news/blog/Brainbees Solutions Ltd.-Firstcry-IPO Note-tn.png',
    link: 'blog/brainbees-solutions-ltd-firstcry-ipo-note',
  },
  {
    date: '18 Sep 2024',
    title: 'IPO Note – Saraswati Saree Depot Ltd.',
    content: 'Saraswati Saree Depot Ltd brings strong supplier relations and sourcing capabilities to the business model',
    imgSrc: 'https://www.sbisecurities.in/fileserver/assets/images/news/blog/Saraswati Saree Depot Ltd. - IPO Note-tn.png',
    link: 'blog/saraswati-saree-depot-ltd-ipo-note',
  },
  {
    date: '18 Sep 2024',
    title: 'IPO NOTE – Unicommerce Esolutions Ltd.',
    content: 'Unicommerce eSolutions Ltd is one of India’s leading SAAS solutions provider for the ecommerce ecosystem',
    imgSrc: 'https://www.sbisecurities.in/fileserver/assets/images/news/blog/Unicommerce Esolutions Ltd. - IPO Note-tn.png',
    link: 'blog/unicommerce-esolutions-ltd-ipo-note',
  },
  {
    date: '18 Sep 2024',
    title: 'IPO Note – Ola Electric Mobility Ltd.',
    content: 'Ola Electric Mobility Ltd IPO is a play on the fast growing electrical vehicles segment in India',
    imgSrc: 'https://www.sbisecurities.in/fileserver/assets/images/news/blog/Ola Electric Mobility Ltd. - IPO Note-tn.png',
    link: 'blog/ola-electric-mobility-ltd-ipo-note',
  },
  {
    date: '26 Sep 2024',
    title: 'The Ultimate Guide to Reading Equity Research Reports',
    content: 'Learn to decode key sections, analyse financials, and make informed investment decisions.',
    imgSrc: 'https://www.sbisecurities.in/fileserver/assets/images/news/blog/How to read equity research reports-tn.webp',
    link: 'blog/how-to-read-equity-research-reports',
  },
  {
    date: '23 Sep 2024',
    title: "An Investor's Guide to Reading Annual Reports",
    content: 'Understand what annual reports are, their key sections & how to effectively analyse them to make informed investment decisions.',
    imgSrc: 'https://www.sbisecurities.in/fileserver/assets/images/news/blog/Investors guide to read annual reports-tn.webp',
    link: 'blog/investors-guide-to-reading-annual-reports',
  },
];

const BlogSection = () => {
  const redirectBlog = (link) => {
    // Implement the redirect logic here
    // window.location.href = link;
  };

  return (
    <Container className="pt-5">
    <div className="col-md-12 pb-5">
      <h2 className="text-center">Blogs</h2>
      <div className="row pt-5">
        <div className="col-lg-12">
          <OwlCarousel className="blogs-carousel" items={4} loop nav dots>
            {blogs.map((blog, index) => (
              <div key={index} className="item" onClick={() => redirectBlog(blog.link)}>
                <div className="b-box">
                  <div className="blog-box">
                    <p className="p3 blog-date mb-0">{blog.date}</p>
                    <h3 className="text-highlight" style={{ cursor: 'pointer' }}>{blog.title}</h3>
                    <p className="content">{blog.content}</p>
                  </div>
                  <div>
                    <img
                      src={blog.imgSrc}
                      alt={blog.title}
                      onClick={() => redirectBlog(blog.link)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default BlogSection;
