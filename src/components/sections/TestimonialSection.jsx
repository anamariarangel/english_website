import React, { useState, useEffect } from 'react';
import CTAButton from '../comon/CTAButton';
import { fetchGoogleReviews } from '../../utils/GoogleReviews';
import { fallbackTestimonials } from '../../data/content';
import '../../assets/styles/testimonials.scss'

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    async function loadReviews() {
      setLoading(true);
      setError(null);
      try {
        // Use the existing utility function
        const data = await fetchGoogleReviews();

        if (data.status === 'OK' && data.result) {
          const { name, rating, user_ratings_total, reviews } = data.result;
          setPlaceData({ name, rating, totalReviews: user_ratings_total });

          if (reviews && reviews.length) {
            const processedReviews = reviews.map((review, index) => ({
              id: index + 1,
              name: review.author_name,
              text: review.text,
              rating: review.rating,
              date: new Date(review.time * 1000).toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
              }),
              relativeTime: review.relative_time_description,
              profilePhoto: review.profile_photo_url,
              achievement: getAchievementFromReview(review.text),
            }));
            setTestimonials(processedReviews);
          } else {
            setTestimonials(fallbackTestimonials);
          }
        } else {
          throw new Error(data.error_message || 'Erro ao buscar dados do Google Places');
        }
      } catch (err) {
        console.error('Erro ao buscar avaliações:', err);
        setError(err.message);
        setTestimonials(fallbackTestimonials);
        setPlaceData({
          name: 'Aulas de Inglês Online - Isadora Alves',
          rating: 5.0,
          totalReviews: 11,
        });
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  const getAchievementFromReview = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('entrevista')) return 'Entrevistas de emprego';
    if (lowerText.includes('conversar') || lowerText.includes('comunicação')) return 'Comunicação fluente';
    if (lowerText.includes('vocabulário')) return 'Vocabulário expandido';
    if (lowerText.includes('progresso') || lowerText.includes('melhora')) return 'Progresso rápido';
    if (lowerText.includes('segur')) return 'Confiança no idioma';
    if (lowerText.includes('dinâmic') || lowerText.includes('interativ')) return 'Aprendizado dinâmico';
    return 'Transformação no inglês';
  };

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`testimonials__star ${i < rating ? 'testimonials__star--filled' : ''}`}
      >
        ★
      </span>
    ));

  if (loading) {
    return (
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="testimonials__loading">
            <div className="testimonials__spinner" />
            <p>Carregando depoimentos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <header className="testimonials__header">
          <h2 className="testimonials__title">Depoimentos Reais</h2>
          <p className="testimonials__subtitle">
            Veja o que meus alunos falam sobre sua transformação no inglês
          </p>

          {placeData && (
            <div className="testimonials__stats">
              <div className="testimonials__stat">
                <span className="testimonials__stat-number">{placeData.rating.toFixed(1)}</span>
                <div className="testimonials__stat-stars">
                  {renderStars(Math.round(placeData.rating))}
                </div>
                <span className="testimonials__stat-label">Avaliação Google</span>
              </div>
              <div className="testimonials__stat">
                <span className="testimonials__stat-number">{placeData.totalReviews}+</span>
                <span className="testimonials__stat-label">Avaliações</span>
              </div>
            </div>
          )}

          {error && (
            <div className="testimonials__error" role="alert">
              <p>⚠️ Dados carregados do cache local</p>
            </div>
          )}
        </header>

        {testimonials.length > 0 && (
          <>
            <div className="testimonials__carousel" role="region" aria-label="Depoimentos dos alunos">
              <button
                className="testimonials__nav testimonials__nav--prev"
                onClick={prevTestimonial}
                aria-label="Depoimento anterior"
              >
                ‹
              </button>

              <div className="testimonials__content">
                <article className="testimonials__card">
                  <blockquote className="testimonials__quote">
                    <span className="testimonials__quote-mark">"</span>
                    <p className="testimonials__text">{testimonials[currentTestimonial].text}</p>
                    <span className="testimonials__quote-mark testimonials__quote-mark--end">"</span>
                  </blockquote>

                  <div className="testimonials__rating">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  <footer className="testimonials__author">
                    {testimonials[currentTestimonial].profilePhoto && (
                      <img
                        src={testimonials[currentTestimonial].profilePhoto}
                        alt={`Foto de perfil de ${testimonials[currentTestimonial].name}`}
                        className="testimonials__author-photo"
                      />
                    )}
                    <div className="testimonials__author-info">
                      <h4 className="testimonials__author-name">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="testimonials__author-achievement">
                        {testimonials[currentTestimonial].achievement}
                      </p>
                      <time className="testimonials__date" dateTime={new Date(testimonials[currentTestimonial].date).toISOString()}>
                        {testimonials[currentTestimonial].relativeTime || testimonials[currentTestimonial].date}
                      </time>
                    </div>
                  </footer>
                </article>
              </div>

              <button
                className="testimonials__nav testimonials__nav--next"
                onClick={nextTestimonial}
                aria-label="Próximo depoimento"
              >
                ›
              </button>
            </div>

            <nav className="testimonials__indicators" aria-label="Navegação dos depoimentos">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials__indicator ${
                    index === currentTestimonial ? 'testimonials__indicator--active' : ''
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </nav>
          </>
        )}

        <div className="testimonials__cta">
          <p className="testimonials__cta-text">
            Pronto para ser o próximo a transformar seu inglês?
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;