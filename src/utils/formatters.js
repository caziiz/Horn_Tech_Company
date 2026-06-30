export function formatAddress(headquarters) {
  if (!headquarters) return ''
  const parts = [
    headquarters.building,
    headquarters.street,
    headquarters.district,
    headquarters.city,
    headquarters.country,
    headquarters.postalCode,
  ].filter(Boolean)
  return parts.join(', ')
}

export function formatLocationAddress(location) {
  if (!location) return ''
  const parts = [location.district, location.city].filter(Boolean)
  return parts.join(', ')
}

export function formatPhone(phone) {
  return phone
}
