// Fonction utilitaire pour envoyer des données à Airtable avec Personal Access Token

interface AirtableRecord {
  fields: Record<string, any>
}

/**
 * Envoie des données à une table Airtable spécifique
 * @param tableName Nom de la table Airtable
 * @param data Données à envoyer
 * @returns La réponse de l'API Airtable
 */
export async function sendToAirtable(tableName: string, data: Record<string, any>) {
  const personalAccessToken = process.env.NEXT_PUBLIC_AIRTABLE_PAT
  const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID

  if (!personalAccessToken || !baseId) {
    console.error("Airtable Personal Access Token or Base ID is missing")
    throw new Error("Airtable configuration is incomplete")
  }

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`

  const record: AirtableRecord = {
    fields: { ...data },
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${personalAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [record] }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Airtable API error: ${errorData.error?.message || response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error sending data to Airtable:", error)
    throw error
  }
}

// Fonctions spécifiques pour chaque type de formulaire
export async function submitWaitlistForm(data: {
  email: string
  name?: string
  userType: string
}) {
  return sendToAirtable("waitlists", data)
}

export async function submitContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  return sendToAirtable("contacts", data)
}

export async function submitInvestorForm(data: {
  fullName: string
  email: string
  company: string
  investorType: string
  investmentInterest: string
  requestDocumentation: boolean
}) {
  return sendToAirtable("investments", data)
}

export async function submitBusinessForm(data: {
  name: string
  email: string
  company: string
  message: string
}) {
  return sendToAirtable("business", data)
}

export async function submitNewsletterSubscription(data: {
  email: string
}) {
  return sendToAirtable("Newsletter", data)
}

