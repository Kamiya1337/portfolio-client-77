import { Archive, Database, Globe2, Languages } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProfileTab({ setActiveTab }) {
  const { student } = portfolioData;

  return (
    <div className="animate-fade-in">
      <section className="ticker-strip pink">
        <div>Student Profile ★ English Language & Culture ★ ULIS - VNU ★ Student Profile ★</div>
      </section>

      <section className="section-grid profile-section">
        <div className="profile-headline">
          <p className="sticker small lime">ULIS - VNU Academic</p>
          <h1 className="mega-title">
            {student.name.split(' ').slice(0, 2).join(' ')}<br />
            <span>{student.name.split(' ').slice(2).join(' ')}</span>
          </h1>
          <div className="ticket-row">
            <span>Major: {student.major}</span>
            <span>Batch: {student.id}</span>
          </div>
          <article className="paper-card">
            <h2>Personal philosophy</h2>
            <p>{student.bio}</p>
          </article>
        </div>

        <aside className="tilted-portrait">
          <div className="portrait-frame">
            <img src="/avatar.jpg" alt="Chân dung Lê Xuân Vi Bảo" />
          </div>
          <span className="sticker lime">Catalyst</span>
        </aside>

        <article className="hot-panel">
          <h2>Digital Catalyst</h2>
          <p>{student.bio}</p>
          <div className="input-output">
            <span>Core input<br /><strong>Academic research</strong></span>
            <span>Core output<br /><strong>Responsible AI use</strong></span>
          </div>
        </article>

        <div className="profile-stack">
          {[
            { icon: Languages, title: 'English language', desc: student.skills[0] },
            { icon: Globe2, title: 'Intercultural communication', desc: student.skills[5] },
            { icon: Database, title: 'Digital literacy', desc: student.skills[2] },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="profile-strip">
                <Icon size={24} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="curated-records">
          <h2>Curated Records</h2>
          <div className="records-grid">
            <article className="record-image">
              <img src="/images/Bài 1.png" alt="Minh chứng bài 1" />
              <span>Project ref: 2025-01</span>
            </article>
            <article className="record-cta">
              <Archive size={28} />
              <h3>The archive system</h3>
              <p>A digital repository for learning artifacts and academic progress.</p>
              <button onClick={() => setActiveTab('evidence')} className="neo-button dark">Enter archive</button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
