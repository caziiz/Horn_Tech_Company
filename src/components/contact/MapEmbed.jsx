import Card from '../common/Card'

export default function MapEmbed({ map, companyName }) {
  if (!map?.embedUrl) return null

  return (
    <Card hover={false} className="overflow-hidden p-0">
      <iframe
        title={`${companyName} office location`}
        src={map.embedUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </Card>
  )
}
