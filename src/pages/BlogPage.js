import React, { useState } from 'react';

const BlogPage = () => {
  const [expandedPost, setExpandedPost] = useState(null);
  const blogPosts = [
    // copy your blog posts data from App.js
    { id: 1, title: 'Why Bulk SMS is the Most Effective Marketing Channel', excerpt: 'Discover why businesses are choosing bulk SMS...', content: 'In today\'s fast-paced digital world...', category: 'Marketing Tips', date: 'August 9, 2026', author: 'Bulkysms Team', readTime: '5 min read' },
    { id: 2, title: 'WhatsApp Business vs. SMS: Which is Better for Your Business?', excerpt: 'Compare WhatsApp Business and traditional SMS...', content: 'Both WhatsApp Business and SMS have unique strengths...', category: 'WhatsApp Business', date: 'August 8, 2026', author: 'Bulkysms Team', readTime: '7 min read' },
    { id: 3, title: 'How to Boost Sales by 40% with SMS Marketing', excerpt: 'Learn proven strategies to increase your sales...', content: 'SMS marketing has proven to be one of the most effective sales channels...', category: 'Sales Strategies', date: 'August 7, 2026', author: 'Bulkysms Team', readTime: '6 min read' },
    { id: 4, title: 'OTP Delivery: Why Businesses Need Secure Authentication', excerpt: 'Learn why One-Time Password (OTP) delivery via SMS is essential...', content: 'Cyber threats are on the rise...', category: 'Security', date: 'August 6, 2026', author: 'Bulkysms Team', readTime: '4 min read' }
  ];

  const togglePost = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <section className="blog-section" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label">Blog</span>
          <h2 className="section-title">Latest <span className="gold">Blog Posts</span></h2>
          <p className="section-sub mx-auto">Expert tips, guides, and insights to help you grow your business.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
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
                  {expandedPost === post.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-newsletter">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest SMS marketing tips and updates delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;