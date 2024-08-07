// emailService.js

export const sendEmail = async (subject, text) => {
  try {
    // Create a FormData object to send the email data
    const payload = new FormData()
    payload.append('from', 'Catalysts <mailgun@catalystsafrica.org>')
    payload.append('to', 'info@catalystsafrica.org')
    payload.append('bcc', 'webdev@valsigsolutions.com')
    payload.append('subject', subject)
    payload.append('text', text)

    // Send a POST request to Mailgun API endpoint
    const response = await fetch('https://api.mailgun.net/v3/catalystsafrica.org/messages', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic YXBpOmM1ZjAzYTdmZmI3YWIwOWU1ZTQ2Y2ZhOTU1NDI3NTFjLTUxMzU2NTI3LWY3ZTg3MDcx'
      },
      body: payload
    })

    if (response.ok) {
      console.log('Email sent successfully.')
      return true
    } else {
      console.log('Failed to send email. Please try again.')
      return false
    }
  } catch (error) {
    console.log('An error occurred. Please try again later.')
    return false
  }
}
