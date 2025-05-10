import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <a href="#" className="navbar-brand">LearnHub</a>
        <div className="navbar-menu">
          <a href="#">Dashboard</a>
          <a href="#">My Courses</a>
          <a href="#">Progress</a>
          <a href="#">Profile</a>
        </div>
      </nav>

      <section className="welcome-section">
        <h1>Welcome back, Student!</h1>
        <p>Continue your learning journey. You're making great progress!</p>
      </section>

      <div className="dashboard-grid">
        <div className="stats-card">
          <h3>Course Progress</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '75%' }}></div>
          </div>
          <p style={{ fontSize: '1.1rem', color: '#2563eb', fontWeight: '600' }}>75% Complete</p>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Keep up the great work!</p>
        </div>

        <div className="stats-card">
          <h3>Hours Studied</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a' }}>24 hours</p>
          <p style={{ color: '#64748b' }}>This week</p>
        </div>

        <div className="stats-card">
          <h3>Achievements</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a' }}>12 badges</p>
          <p style={{ color: '#64748b' }}>Keep collecting!</p>
        </div>
      </div>

      <h2>Your Courses</h2>
      <div className="dashboard-grid">
        {[
          {
            title: 'Introduction to React',
            progress: 80,
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          },
          {
            title: 'Advanced JavaScript',
            progress: 60,
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
          },
          {
            title: 'Web Development Basics',
            progress: 90,
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
          }
        ].map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <div className="course-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p>{course.progress}% Complete</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard