import Image from 'next/image'

interface TeamMemberProps {
  name: string
  role: string
  image: string
  gradient: string
}

export default function TeamMember({ name, role, image, gradient }: TeamMemberProps) {
  return (
    <div className="text-center transform hover:scale-105 transition">
      <div className={`w-36 h-36 mx-auto mb-4 rounded-full bg-gradient-to-br ${gradient} p-1`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
          <Image
            src={image}
            alt={name}
            width={150}
            height={150}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-sm text-gray-400">{role}</p>
    </div>
  )
}
