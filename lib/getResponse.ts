const API_KEY = "u9pmt4ktnz08izvc1y1ft25stwmk8iln"
const API_URL = "https://api.getresponse.com/v3"

interface Contact {
  email: string
  name?: string
  customFields?: Array<{ name: string; value: string }>
}

export async function addContact(listId: string, contact: Contact) {
  const response = await fetch(`${API_URL}/contacts`, {
    method: "POST",
    headers: {
      "X-Auth-Token": `api-key ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      campaign: { campaignId: listId },
      email: contact.email,
      name: contact.name,
      customFields: contact.customFields,
    }),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || "Failed to add contact to GetResponse")
  }

  return response.json()
}

