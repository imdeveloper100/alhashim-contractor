export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (message.trim().length < 10) {
      return Response.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    // Here you would typically send an email or save to database
    // For now, we'll just log and return success
    console.log('[v0] Contact form submission:', {
      name,
      email,
      phone,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Return success response
    return Response.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact API error:', error)
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
