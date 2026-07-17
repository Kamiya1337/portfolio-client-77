import { portfolioData } from '../data/portfolioData';

export default function LearningMap({ setActiveTab }) {
  const { overview } = portfolioData;

  return (
    <div className="animate-fade-in">
      <section className="ticker-strip pink">
        <div>Learning Map 2026 ✦ Future Ready Skills ✦ AI Empowerment ✦ Creative Documentation ✦</div>
      </section>

      <section className="section-grid learning-map-section">
        <header className="learning-map-header">
          <h1 className="mega-title lime-title">
            Learning<br /><span>Map</span>
          </h1>
          <p className="paper-note">All set. Starting our 7-step journey to master digital tools and AI.</p>
        </header>

        <div className="map-board">
          {overview.map((item, index) => {
            const Icon = item.icon;
            const tone = ['dark', 'lime', 'pink', 'wide', 'paper', 'blue', 'full'][index] || 'dark';
            return (
              <article key={item.id} className={`map-card ${tone}`}>
                <span className="map-number">{String(item.id).padStart(2, '0')}</span>
                <Icon size={34} />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                {index === 0 && (
                  <button onClick={() => setActiveTab('assignments')} className="neo-button compact">View track</button>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
