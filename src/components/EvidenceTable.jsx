import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, FileText, Maximize2, Search, X, XCircle } from 'lucide-react';

export default function EvidenceTable() {
  const { projects } = portfolioData;
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  return (
    <div className="animate-fade-in">
      {previewData.isOpen && (
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
              {previewData.type === 'pdf' ? <iframe src={previewData.url} title="PDF Preview" /> : <img src={previewData.url} alt="Minh chứng" />}
            </div>
          </div>
        </div>
      )}

      <section className="ticker-strip lime">
        <div>Authenticated Archive ☆ Academic Milestones 2026 ☆ Evidence Repository ☆ Verified Links ☆</div>
      </section>

      <section className="section-grid evidence-section">
        <header className="evidence-header">
          <div>
            <h1 className="mega-title">Evidence<br /><span>Repository</span></h1>
            <p>A curated archive of reports for each learning milestone.</p>
          </div>
          <div className="artifact-count">
            <span>Total artifacts</span>
            <strong>{projects.length}</strong>
          </div>
        </header>

        <div className="archive-toolbar">
          <Search size={18} />
          <span>Query archive...</span>
          <strong>Filter: all</strong>
        </div>

        <div className="archive-list">
          {projects.map((project) => (
            <article key={project.id} className="archive-row">
              <div className="archive-id">
                <span>ID# Archive-{String(project.id).padStart(3, '0')}</span>
                <strong>{project.chapter}</strong>
                <StatusBadge project={project} />
              </div>
              <div className="archive-main">
                <span className="sticker small">{project.status}</span>
                <h2>{project.title}</h2>
                <p>{project.shortDesc}</p>
              </div>
              <div className="archive-links">
                <EvidenceLink icon={FileText} value={project.report} label="Xem báo cáo" type="pdf" onClick={openPreview} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function EvidenceLink({ icon: Icon, value, label, type, onClick }) {
  if (value === 'Sẽ cập nhật sau' || !value) return <span className="pending-badge">Đang chờ</span>;
  if (value === 'Không yêu cầu') return <span className="pending-badge">---</span>;

  return (
    <a href={value} target="_blank" rel="noreferrer" onClick={(event) => onClick(event, value, type)}>
      <Icon size={15} />
      {label}
      <Maximize2 size={13} />
    </a>
  );
}

function StatusBadge({ project }) {
  const done = project.report && project.report !== 'Sẽ cập nhật sau' && project.report !== 'Không yêu cầu';
  return (
    <span className={`archive-status ${done ? 'done' : 'missing'}`}>
      {done ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
      {done ? 'Đã nộp' : 'Thiếu MC'}
    </span>
  );
}
