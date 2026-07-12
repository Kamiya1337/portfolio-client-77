import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, RefreshCw, SquareCheck, Target } from 'lucide-react';

export default function RubricTable() {
  const { projects, rubric } = portfolioData;
  const totalMilestones = projects.length * 2;
  const completedMilestones = projects.reduce((acc, project) => {
    const reportDone = project.report !== 'Sẽ cập nhật sau' && project.report !== '' && project.report !== 'Không yêu cầu';
    const imgDone = project.evidenceImg !== 'Sẽ cập nhật sau' && project.evidenceImg !== '' && project.evidenceImg !== 'Không yêu cầu';
    return acc + (reportDone ? 1 : 0) + (imgDone ? 1 : 0);
  }, 0);
  const progressPercent = Math.round(50 + (completedMilestones / totalMilestones) * 50);

  return (
    <div className="animate-fade-in">
      <section className="ticker-strip pink">
        <div>Assessment Matrix ⛓ Verified Readiness ⛓ Rubric Review ⛓ Portfolio Score ⛓</div>
      </section>

      <section className="section-grid rubric-section">
        <header className="rubric-hero">
          <div>
            <p className="sticker small lime">Q4 Evaluation</p>
            <h1 className="mega-title">Assessment<br />Matrix</h1>
            <p>Hệ thống đồng bộ dữ liệu tự động theo thời gian thực dựa trên tệp minh chứng thực tế của bạn.</p>
          </div>
          <aside className="score-card">
            <span>Readiness score</span>
            <strong>{progressPercent}%</strong>
            <p><RefreshCw size={16} /> {completedMilestones} trên {totalMilestones} mục dữ liệu</p>
          </aside>
        </header>

        <div className="rubric-card-grid">
          {rubric.slice(0, 3).map((item, index) => (
            <article key={item.criteria} className="rubric-card">
              <span className="rubric-tab">{String(index + 1).padStart(2, '0')} / Criteria</span>
              <h2>{item.criteria}</h2>
              <p>{item.excellent}</p>
              <div className="rubric-observation">Status: {item.status}</div>
            </article>
          ))}
        </div>

        <div className="rubric-table-wrap">
          <table className="matrix-table">
            <thead>
              <tr>
                <th>Tiêu chí chấm điểm</th>
                <th>Yêu cầu tiêu chuẩn Xuất sắc (8.1 - 10)</th>
                <th>Hiện trạng tiêu chí</th>
                <th>Hành động cần thực hiện</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Target size={16} /> Thiết kế và cấu trúc Portfolio</td>
                <td>Giao diện chuyên nghiệp, cấu trúc rõ ràng, điều hướng mượt mà, chuẩn UI/UX học thuật.</td>
                <td><StatusPill done label="Hoàn thành Layout" /></td>
                <td className="done-text">Đã xong</td>
              </tr>
              {projects.map((project) => {
                const isReportDone = project.report !== 'Sẽ cập nhật sau' && project.report !== '' && project.report !== 'Không yêu cầu';
                const isImgDone = project.evidenceImg !== 'Sẽ cập nhật sau' && project.evidenceImg !== '' && project.evidenceImg !== 'Không yêu cầu';
                const isFullyDone = isReportDone && isImgDone;

                return (
                  <tr key={project.id}>
                    <td><Target size={16} /> {project.title.split(':')[0]}: Minh chứng thực hiện</td>
                    <td>Đầy đủ file văn bản báo cáo chi tiết nội dung học tập và hình ảnh screenshot thực tế.</td>
                    <td><StatusPill done={isFullyDone} label={isFullyDone ? 'Đạt chuẩn Xuất sắc' : 'Thiếu minh chứng'} /></td>
                    <td className={isFullyDone ? 'done-text' : 'action-text'}>
                      {isFullyDone ? 'Đã đồng bộ' : `Cần bổ sung: ${!isReportDone ? 'File báo cáo PDF' : ''} ${!isReportDone && !isImgDone ? '&' : ''} ${!isImgDone ? 'Ảnh screenshot' : ''}`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StatusPill({ done, label }) {
  return (
    <span className={`status-pill ${done ? 'done' : 'todo'}`}>
      {done ? <CheckCircle2 size={14} /> : <SquareCheck size={14} />}
      {label}
    </span>
  );
}
