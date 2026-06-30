import Card from './Card'

const statLabels = {
  clients: 'Happy Clients',
  projects: 'Projects Completed',
  employees: 'Team Members',
  yearsExperience: 'Years Experience',
  countriesServed: 'Countries Served',
}

export default function StatCounter({ statistics }) {
  const entries = Object.entries(statistics)

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
      {entries.map(([key, value]) => (
        <Card key={key} className="text-center">
          <p className="text-3xl font-bold text-accent sm:text-4xl">
            {value}
            {key === 'clients' || key === 'projects' ? '+' : ''}
          </p>
          <p className="mt-2 text-sm font-medium text-slate-600">{statLabels[key] || key}</p>
        </Card>
      ))}
    </div>
  )
}
