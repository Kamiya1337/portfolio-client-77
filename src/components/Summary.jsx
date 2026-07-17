import { Globe2, PenTool, Quote, ShieldCheck, Sparkles } from 'lucide-react';

export default function Summary() {
  return (
    <div className="animate-fade-in">
      <section className="ticker-strip pink">
        <div>Tổng kết & Suy ngẫm ☆ Reflection 2026 ☆ Academic Integrity ☆ Future Growth ☆</div>
      </section>

      <section className="section-grid reflection-section">
        <header className="reflection-hero">
          <h1 className="mega-title">Tổng kết<br /><span>& Suy ngẫm</span></h1>
          <aside className="quote-ticket large">
            <Quote size={34} />
            <p>"Giáo dục không phải là việc chuẩn bị cho cuộc sống; giáo dục chính là cuộc sống."</p>
            <span>Archive #2026-REF — John Dewey</span>
          </aside>
        </header>

        <div className="reflection-divider">
          <span>Kiến thức & Kỹ năng đã đạt được</span>
        </div>

        <article className="reflection-paper wide">
          <h2>Kiến thức & Kỹ năng đã đạt được</h2>
          <p>
            Sau khi hoàn thành 6 bài tập trong học phần, em đã tích lũy được nhiều kiến thức về công nghệ vô cùng giá trị. Em không chỉ hiểu về máy tính, cách tra cứu mạng và đánh giá thông tin, mà còn học được cách dùng AI sao cho hợp lý và an toàn trong học tập.
            <br /><br />
            Em cũng đã cải thiện được kỹ năng tìm kiếm, biết viết prompt để “giao tiếp” với AI, thành thạo các công cụ làm việc nhóm và tự tin hơn khi thiết kế, trình bày bài tập. Đặc biệt, em cũng hiểu tầm quan trọng của việc bảo vệ thông tin cá nhân và tôn trọng bản quyền trên mạng.
            <br /><br />
            Đây chắc chắn là những kỹ năng nền tảng giúp em có thể học tập tốt, hiệu quả hơn và chuẩn bị hành trang vững chắc cho sự nghiệp tương lai.
          </p>
        </article>

        <div className="reflection-grid">
          <article className="reflection-paper">
            <PenTool size={28} />
            <h2>Khó khăn gặp phải</h2>
            <p>
              Trong quá trình thực hiện Portfolio và hoàn thành 6 bài tập của học phần, em đã gặp không ít khó khăn. Khó khăn đầu tiên là việc làm quen với nhiều công cụ và nền tảng số mới. Trước đây em chưa có nhiều kinh nghiệm sử dụng các công cụ xây dựng website, quản lý tài liệu trực tuyến hay các ứng dụng hỗ trợ học tập, vì vậy em phải dành nhiều thời gian để tìm hiểu cách sử dụng và khắc phục các lỗi phát sinh trong quá trình thực hiện. Bên cạnh đó, việc tìm kiếm và đánh giá nguồn thông tin đáng tin cậy cũng là một thách thức đối với em. Trên Internet có rất nhiều nguồn thông tin khác nhau, đôi khi có những nội dung không chính xác hoặc thiếu tính học thuật. Em phải học cách sử dụng các phương pháp tìm kiếm nâng cao, đối chiếu nhiều nguồn tài liệu và kiểm tra độ tin cậy trước khi sử dụng vào bài làm. 
                            <br /><br />
              Một khó khăn khác là việc sử dụng trí tuệ nhân tạo (AI) một cách hiệu quả. Ban đầu, em thường đưa ra những yêu cầu chưa rõ ràng nên kết quả nhận được chưa đáp ứng đúng mong muốn. Sau nhiều lần thử nghiệm và điều chỉnh Prompt, em mới dần hiểu cách đặt câu hỏi cụ thể và chi tiết hơn để khai thác tốt khả năng của AI. Đồng thời, em cũng phải học cách kiểm chứng lại thông tin do AI cung cấp để tránh những sai sót có thể xảy ra. Ngoài ra, việc quản lý thời gian để hoàn thành nhiều bài tập cùng lúc cũng là một thử thách lớn. Em phải cân bằng giữa các môn học khác, hoạt động cá nhân và tiến độ thực hiện Portfolio. Có những thời điểm em gặp áp lực vì phải chỉnh sửa nội dung nhiều lần để đảm bảo sản phẩm cuối cùng đạt chất lượng tốt nhất. Mặc dù gặp nhiều khó khăn, nhưng chính những thử thách đó đã giúp em học được cách tự nghiên cứu, kiên trì giải quyết vấn đề và chủ động hơn trong học tập.
              <br /><br />
              Nhờ vậy, em không chỉ hoàn thành các yêu cầu của học phần mà còn phát triển thêm nhiều kỹ năng cần thiết cho quá trình học tập và công việc trong tương lai.

              Trong quá trình thực hiện Portfolio và hoàn thành 6 bài tập của học phần, em đã gặp khá nhiều khó khăn, chủ yếu đến từ việc phải thực hiện những đầu việc mình chưa từng làm trước kia. Khó khăn đầu tiên là việc làm quen với nhiều công cụ và nền tảng số mới. 
                            <br /><br />
Trước đây em chưa có nhiều kinh nghiệm sử dụng các công cụ xây dựng website, quản lý tài liệu trực tuyến hay các ứng dụng hỗ trợ học tập, vì vậy em phải dành nhiều thời gian để tìm hiểu cách sử dụng và khắc phục các lỗi phát sinh trong quá trình thực hiện. Bên cạnh đó, việc tìm kiếm và đánh giá nguồn thông tin đáng tin cậy cũng khá phức tạp, đòi hỏi nhiều thời gian đọc và tìm hiểu kĩ lưỡng. Trên Internet có rất nhiều nguồn thông tin khác nhau, đôi khi có những nội dung không chính xác hoặc thiếu tính học thuật, thiếu các bằng chứng thực chứng minh. Em phải học cách sử dụng các phương pháp tìm kiếm nâng cao, đối chiếu nhiều nguồn tài liệu và kiểm tra độ tin cậy trước khi sử dụng vào bài làm. 
              <br /><br />
Một khó khăn khác là việc sử dụng trí tuệ nhân tạo (AI) một cách hiệu quả. Ban đầu, em thường đưa ra những yêu cầu chưa rõ ràng nên kết quả nhận được chưa đáp ứng đúng mong muốn, và phải thử đi thử lại nhiều lần. Sau nhiều lần điều chỉnh Prompt, em mới dần hiểu cách đặt câu hỏi cụ thể và chi tiết hơn để khai thác tốt khả năng của AI. Đồng thời, em cũng phải học cách kiểm chứng lại thông tin do AI cung cấp để tránh những sai sót có thể xảy ra, do đôi khi các thông tin chưa được cập nhật lại, hoặc hiện tượng hallucination. 
              <br /><br />
Ngoài ra, việc quản lý thời gian để hoàn thành nhiều bài tập cùng lúc cũng là một điều không dễ dàng. Em phải cân bằng giữa các môn học khác, hoạt động cá nhân và tiến độ thực hiện Portfolio cũng như các bài tập, bài kiểm tra theo tuần. Có những thời điểm em gặp áp lực lớn về thời gian vì phải chỉnh sửa nội dung để đảm bảo sản phẩm cuối cùng đạt chất lượng tốt nhất mà vẫn đúng thời hạn đưa ra. Mặc dù gặp nhiều khó khăn, nhưng chính những thử thách đó đã giúp em học được cách tự nghiên cứu, kiên trì giải quyết vấn đề và chủ động hơn trong học tập.
              <br /><br />
Thông qua quá trình học tập môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo, em đã học được nhiều kiến thức bổ ích về công nghệ, các ứng dụng hỗ trợ học tập và trên hết, là kỹ năng sử dụng AI hiệu quả để phục vụ cho mục đích học tập và nghiên cứu. Không những vậy, em cũng đã có cơ hội phát triển thêm nhiều kỹ năng cần thiết, như quản lý thời gian, kiến thức cơ bản về bố cục, màu sắc (khi thực hiện làm Portfolio) cho quá trình học tập và công việc trong tương lai.
            </p>
          </article>

          <article className="reflection-paper blue">
            <Globe2 size={28} />
            <h2>Kế hoạch hoàn thiện</h2>
            <p>
              Sau khi hoàn thành Portfolio và các bài tập của học phần, em nhận thấy mình vẫn còn nhiều kỹ năng cần tiếp tục phát triển và nhiều kiến thức cần bổ sung, trau dồi thêm. Trong thời gian tới, em đặt mục tiêu có thể nâng cao khả năng sử dụng các công cụ công nghệ số phục vụ học tập và công việc. Em sẽ chủ động tìm hiểu thêm về các phần mềm hỗ trợ học tập, quản lý công việc và thiết kế nội dung để nâng cao hiệu quả làm việc trong môi trường số.
              <br /><br />

Đối với kỹ năng tìm kiếm và đánh giá thông tin, em sẽ duy trì thói quen sử dụng các nguồn tài liệu học thuật uy tín, đồng thời rèn luyện khả năng phân tích và kiểm chứng thông tin trước khi sử dụng để nâng cao chất lượng học tập và tránh tiếp nhận những thông tin thiếu chính xác. Về việc sử dụng trí tuệ nhân tạo, em dự định tiếp tục học cách xây dựng Prompt hiệu quả hơn để khai thác tối đa lợi ích của AI trong học tập và nghiên cứu. Tuy nhiên, em sẽ luôn tuân thủ các nguyên tắc về liêm chính học thuật, sử dụng AI như một công cụ hỗ trợ thay vì thay thế hoàn toàn tư duy và sự sáng tạo của bản thân. Là sinh viên ngành Ngôn ngữ Anh, em cũng sẽ ứng dụng những kỹ năng đã học vào việc tra cứu tài liệu song ngữ, sử dụng các công cụ hỗ trợ dịch thuật và nâng cao khả năng làm việc trực tuyến. Em cũng sẽ tích cực rèn luyện kỹ năng giao tiếp, hợp tác và quản lý thời gian để chuẩn bị tốt hơn cho môi trường học tập và làm việc chuyên nghiệp trong tương lai. Thông qua kế hoạch này, em mong muốn không ngừng hoàn thiện năng lực số, nâng cao khả năng tự học và thích nghi với những thay đổi của công nghệ, từ đó tạo nền tảng vững chắc cho quá trình học tập cũng như định hướng nghề nghiệp sau này.

            </p>
          </article>
        </div>

        <article className="integrity-card">
          <ShieldCheck size={34} />
          <h2>Cam kết Liêm chính Học thuật</h2>
          <p>
            Em cam kết toàn bộ nội dung và báo cáo trong hồ sơ này đều phản ánh đúng năng lực cũng như quá trình nỗ lực thực tế của bản thân. Em chỉ sử dụng AI như một công cụ hỗ trợ (gợi ý bố cục, sửa lỗi code hoặc tìm kiếm thông tin), tuyệt đối không để công nghệ thay thế tư duy và khả năng thực của bản thân. Mọi số liệu, sản phẩm và tiến độ hoàn thành ở đây đều là thật, hoàn toàn không có sự gian lận hay làm giả minh chứng. Em xin chân thành cảm ơn thầy cô đã dành thời gian xem xét và đánh giá bài làm!
          </p>
          <div><span>#verified</span><span>#original</span><Sparkles size={18} /></div>
        </article>
      </section>
    </div>
  );
}