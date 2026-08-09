import React from 'react';

const TestimonialsPage = () => {
  const testimonials = [
    { stars: 5, text: '"Reliable delivery and excellent support. Bulkysms has been a game-changer for our customer communication."', name: 'Steven Matiku', role: 'ECOWATER International' },
    { stars: 5, text: '"Great value for money. The platform is intuitive and the delivery rates are outstanding."', name: 'David Demetry', role: 'BUSBORA Tanzania' },
    { stars: 5, text: '"The support team is responsive and the platform consistently delivers our messages on time."', name: 'Philipo Lubuva', role: 'Tanganyika Law Society' }
  ];

  return (
    <section className="testimonials" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our <span className="gold">Clients</span> Say</h2>
          <p className="section-sub mx-auto">Real feedback from businesses that trust Bulkysms.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <div className="text">{t.text}</div>
              <div className="author">
                <div className="initial">{t.name.charAt(0)}</div>
                <div><div className="name">{t.name}</div><div className="role">{t.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;