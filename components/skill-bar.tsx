interface SkillBarProps {
  name: string
  progress: number
}

export default function SkillBar({ name, progress }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

