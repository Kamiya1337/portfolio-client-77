import { portfolioData } from '../data/portfolioData';
import { Archive, BookOpenText, Library, Layers, Quote } from 'lucide-react';

export default function HomeTab({ setActiveTab }) {
  const { student, overview } = portfolioData;

  return (
    <div className="animate-fade-in">
      <section className="ticker-strip pink">
        <div>Digital Technology & AI Learning Portfolio ★ English Language & Culture ★ Creative Portfolio 2026 ★ ULIS - VNU ★</div>
      </section>

      <section className="section-grid hero-grid">
        <div className="hero-copy">
          <p className="sticker small">Báo cáo cuối kỳ</p>
          <h1 className="mega-title">
            Digital Technology &<br />
            <span>AI Learning Portfolio</span>
          </h1>
          <p className="hero-subtitle">Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</p>

          <div className="speech-card">
            <p>{student.bio}</p>
            <div className="skill-rack">
              {student.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="action-row">
            <button onClick={() => setActiveTab('assignments')} className="neo-button primary">
              <Layers size={18} /> Xem bài tập
            </button>
            <button onClick={() => setActiveTab('evidence')} className="neo-button secondary">
              <Library size={18} /> Minh chứng
            </button>
          </div>
        </div>

        <aside className="profile-poster">
          <Quote className="quote-mark" size={70} />
          <p className="mono-label text-[#ffb0cb]">Student Profile</p>
          <div className="portrait-frame">
            <img src="/avatar.jpg" alt="Chân dung Lê Xuân Vi Bảo" />
            <span>{student.name}</span>
          </div>
          <div className="profile-meta">
            <strong>{student.id} · ULIS - VNU</strong>
            <p>{student.major}</p>
            <small>{student.university}</small>
          </div>
        </aside>
      </section>

      <section className="section-grid module-explorer">
        <div className="section-band">
          <h2>Module Explorer</h2>
          <p>[ systems: active ] [ data_type: portfolio ]</p>
        </div>

        <div className="stat-grid">
          {[
            { label: 'Bài học', value: '07', desc: 'Chủ đề lý thuyết' },
            { label: 'Sản phẩm', value: '06', desc: 'Bài tập thực hành' },
            { label: 'Kỹ năng số', value: '06+', desc: 'Nhóm năng lực lõi' },
            { label: 'Mức điểm kỳ vọng', value: '10', desc: 'Xuất sắc' },
          ].map((stat) => (
            <article key={stat.label} className="metric-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.desc}</p>
            </article>
          ))}
        </div>

        <div className="learning-overview">
          <div className="section-heading">
            <BookOpenText size={28} />
            <h2>Tổng quan Năng lực Học phần</h2>
          </div>
          <div className="module-grid">
            {overview.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.id} className="module-card">
                  <span className="module-index">{String(item.id).padStart(2, '0')}</span>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="metadata-row">
          <div className="quote-ticket">
            <Archive size={28} />
            <p>"Strategy becomes credible when it is documented, reviewed, and reflected upon."</p>
          </div>
          <div className="project-meta">
            <h3>Project Metadata</h3>
            <dl>
              <div>
                <dt>Student</dt>
                <dd>{student.name}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>In progress</dd>
              </div>
              <div>
                <dt>Faculty</dt>
                <dd>ULIS - VNU</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
