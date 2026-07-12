import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowLeft, ChevronRight, FileText, Image as ImageIcon, X } from 'lucide-react';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });
  const { projects } = portfolioData;

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  if (selectedProject) {
    return (
      <div className="animate-fade-in">
        <PreviewModal previewData={previewData} closePreview={closePreview} />
        <section className="ticker-strip pink">
          <div>Assignment Detail ★ Report Preview ★ Evidence Archive ★</div>
        </section>

        <section className="section-grid detail-section">
          <button onClick={() => setSelectedProject(null)} className="back-button">
            <ArrowLeft size={18} /> Quay lại danh sách
          </button>

          <article className="detail-panel">
            <header>
              <p className="sticker small">{selectedProject.chapter}</p>
              <h1>{selectedProject.title}</h1>
              <p>{selectedProject.shortDesc}</p>
            </header>

            <div className="detail-grid">
              <section className="paper-card">
                <h2>Mục tiêu nhiệm vụ</h2>
                <p>{selectedProject.target}</p>
              </section>
              <section className="paper-card dark">
                <h2>Kỹ năng áp dụng</h2>
                <div className="skill-rack">
                  {selectedProject.skills?.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </section>
            </div>

            <section className="process-block">
              <h2>Quá trình thực hiện</h2>
              <p>{selectedProject.process}</p>
            </section>

            <section className="artifact-grid">
              <ArtifactCard
                icon={FileText}
                label="Báo cáo (PDF/Word)"
                value={selectedProject.report}
                action="Xem Báo cáo"
                onClick={(event) => openPreview(event, selectedProject.report, 'pdf')}
              />
              <ArtifactCard
                icon={ImageIcon}
                label="Ảnh chụp màn hình"
                value={selectedProject.evidenceImg}
                action="Xem Hình ảnh"
                onClick={(event) => openPreview(event, selectedProject.evidenceImg, 'img')}
              />
            </section>
          </article>
        </section>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <section className="ticker-strip pink">
        <div>Assignments 2026 ★ Applied Learning ★ Documented With Care ★ Creative Documentation ★</div>
      </section>

      <section className="section-grid assignments-section">
        <header className="page-header">
          <h1 className="mega-title">Applied learning,<br /><span>documented</span> with care.</h1>
          <p className="sticker small blue">Batch 001 - 01</p>
        </header>

        <div className="assignment-grid">
          {projects.map((project, index) => (
            <article key={project.id} className={`assignment-card tone-${index % 3}`}>
              <span className="status-sticker">{project.status}</span>
              <p className="mono-label">#{String(project.id).padStart(3, '0')}</p>
              <h2>{project.title.split(':')[0]}</h2>
              <p>{project.shortDesc}</p>
              <div className="quote-mini">"{project.target}"</div>
              <img src={project.evidenceImg} alt={`Minh chứng ${project.title}`} />
              <button onClick={() => setSelectedProject(project)} className="neo-button full">
                Xem chi tiết báo cáo <ChevronRight size={18} />
              </button>
            </article>
          ))}
        </div>

        <aside className="learning-log">
          <h2>Learning log meta-data</h2>
          <dl>
            <div><dt>Date range</dt><dd>2025 - 2026</dd></div>
            <div><dt>Total modules</dt><dd>{projects.length}</dd></div>
            <div><dt>Skillset focus</dt><dd>Digital literacy & AI</dd></div>
            <div><dt>Mentorship</dt><dd>Self-driven</dd></div>
          </dl>
        </aside>
      </section>
    </div>
  );
}

function PreviewModal({ previewData, closePreview }) {
  if (!previewData.isOpen) return null;

  return (
    <div className="preview-backdrop print:hidden">
      <div className="preview-window">
        <div className="preview-header">
          <h3>{previewData.type === 'pdf' ? 'Trình xem PDF (Báo cáo)' : 'Trình xem Hình ảnh (Screenshot)'}</h3>
          <div>
            <a href={previewData.url} target="_blank" rel="noreferrer">Mở thẻ mới</a>
            <button onClick={closePreview} aria-label="Đóng trình xem"><X size={20} /></button>
          </div>
        </div>
        <div className="preview-body">
          {previewData.type === 'pdf' ? (
            <iframe src={previewData.url} title="PDF Preview" />
          ) : (
            <img src={previewData.url} alt="Minh chứng" />
          )}
        </div>
      </div>
    </div>
  );
}

function ArtifactCard({ icon: Icon, label, value, action, onClick, external = false }) {
  const unavailable = value === 'Sẽ cập nhật sau' || !value || value === 'Không yêu cầu';

  return (
    <article className="artifact-card">
      <Icon size={32} />
      <h3>{label}</h3>
      {unavailable ? (
        <span className="pending-badge">{value === 'Không yêu cầu' ? 'Không yêu cầu' : 'Sẽ cập nhật sau'}</span>
      ) : (
        <a
          href={value}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          onClick={onClick}
          className="neo-button compact"
        >
          {action}
        </a>
      )}
    </article>
  );
}
