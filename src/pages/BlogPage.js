import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const BlogPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <section className="blog-section" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label">{t.blog.label}</span>
          <h2 className="section-title">
            {t.blog.title}
            <span className="gold">{t.blog.titleGold}</span>
          </h2>
          <p className="section-sub mx-auto">{t.blog.subtitle}</p>
        </div>
        <div className="blog-grid">
          {t.blog.posts.map((post) => (
            <div className={`blog-card ${expandedPost === post.id ? 'expanded' : ''}`} key={post.id}>
              <div className="blog-card-header">
                <div className="blog-meta">
                  <span className="blog-category-tag">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
              </div>
              <div className="blog-card-body">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                {expandedPost === post.id && (
                  <div className="blog-full-content">
                    <p>{post.content}</p>
                  </div>
                )}
              </div>
              <div className="blog-card-footer">
                <div className="blog-author">
                  <span className="author-name">{post.author}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <button className="read-more-btn" onClick={() => togglePost(post.id)}>
                  {expandedPost === post.id
                    ? (language === 'en' ? 'Read Less' : 'Soma Kidogo')
                    : (language === 'en' ? 'Read More' : 'Soma Zaidi')}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-newsletter">
          <div className="newsletter-content">
            <h3>{t.blog.newsletter.title}</h3>
            <p>{t.blog.newsletter.desc}</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder={t.blog.newsletter.placeholder} required />
              <button type="submit" className="btn-primary">{t.blog.newsletter.button}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;