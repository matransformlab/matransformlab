interface PhaseCardProps {
  title: string
  description: string
  phase: string
}

export default function PhaseCard({ title, description, phase }: PhaseCardProps) {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <div className="text-sm text-gray-400 mb-2">PHASE {phase}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
