import emailjs from "@emailjs/browser"

// Initialiser EmailJS avec votre User ID
emailjs.init("YOUR_USER_ID") // Remplacez par votre User ID EmailJS

export const sendContactForm = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Remplacez par votre Service ID
      "YOUR_TEMPLATE_ID", // Remplacez par votre Template ID pour le formulaire de contact
      templateParams,
    )
    return response
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export const sendNewsletterSubscription = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Remplacez par votre Service ID
      "YOUR_NEWSLETTER_TEMPLATE_ID", // Remplacez par votre Template ID pour les inscriptions à la newsletter
      templateParams,
    )
    return response
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export const sendInvestorForm = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Remplacez par votre Service ID
      "YOUR_INVESTOR_TEMPLATE_ID", // Remplacez par votre Template ID pour le formulaire d'investisseur
      templateParams,
    )
    return response
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

