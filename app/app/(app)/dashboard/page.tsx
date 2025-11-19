export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">My Courses</h3>
          <p>Your learning journey starts here</p>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Progress</h3>
          <p>Track your transformation</p>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Resources</h3>
          <p>Downloads & tools</p>
        </div>
      </div>
    </div>
  )
}
