import { BookOpen, Home, Map, Menu, MessageSquare, User, X } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const navItems = [
    { id: 'overview', icon: Home, label: 'Overview' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'learning', icon: Map, label: 'Learning Map' },
    { id: 'assignments', icon: BookOpen, label: 'Assignments' },
    { id: 'reflection', icon: MessageSquare, label: 'Reflection' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">Bỏ qua điều hướng</a>
      <header className="sticky top-0 z-50 border-b-4 border-[#f3edf0] bg-[#121212] print:hidden">
        <nav className="flex min-h-[72px] items-center justify-between gap-4 px-4 py-3 md:px-8">
          <button
            onClick={() => setActiveTab('overview')}
            className="brand-lockup"
            aria-label="Về trang tổng quan"
          >
            <span>Digital</span>
            <strong>PORTFOLIO</strong>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`nav-chip ${isActive ? 'is-active' : ''}`}
                >
                  <Icon size={14} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="neo-icon-button lg:hidden"
            aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <div className={`mobile-drawer ${isMobileOpen ? 'is-open' : ''} print:hidden`}>
        <div className="mb-8 border-b-2 border-[#f3edf0] pb-5">
          <p className="mono-label text-[#ffb0cb]">Lê Xuân Vi Bảo</p>
          <p className="mt-2 text-sm text-[#e1bdc7]">Ngôn ngữ và Văn hóa Anh · ULIS - VNU</p>
        </div>
        <div className="grid gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileOpen(false);
                }}
                className={`mobile-nav-item ${isActive ? 'is-active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-8 border-t-2 border-[#f3edf0] pt-5 text-xs text-[#e1bdc7]">
          <p>Môn: Nhập môn CN Số & ƯD AI</p>
          <p>Năm học: 2025-2026</p>
        </div>
      </div>
      
      {isMobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/70 lg:hidden print:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
