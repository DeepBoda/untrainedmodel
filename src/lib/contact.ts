export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: 'general' | 'support' | 'feature' | 'business';
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: string;
}

class ContactService {
  async submitForm(data: ContactFormData): Promise<ContactResponse> {
    try {
      // In a real implementation, this would send to your backend
      // For now, we'll simulate the submission and could integrate with:
      // - Netlify Forms
      // - EmailJS
      // - Supabase Functions
      // - Traditional backend API

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Log the form submission (in production, send to your backend)
      console.log('Contact form submission:', {
        ...data,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
      });

      // Store in localStorage for demo purposes
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        id: Date.now().toString(),
        ...data,
        timestamp: new Date().toISOString(),
        status: 'received'
      };
      submissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      // Simulate email notification (in production, handle server-side)
      this.simulateEmailNotification(data);

      return {
        success: true,
        message: 'Your message has been sent successfully! We will respond within 24 hours.',
        id: newSubmission.id
      };
    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        message: 'There was an error sending your message. Please try again or email us directly.'
      };
    }
  }

  private simulateEmailNotification(data: ContactFormData) {
    // In production, this would be handled by your backend
    console.log('📧 Email notification would be sent:', {
      to: 'contact@untrainedmodel.xyz',
      subject: `New ${data.type} inquiry: ${data.subject}`,
      from: data.email,
      content: data.message
    });

    // Auto-responder email simulation
    console.log('📧 Auto-responder email would be sent:', {
      to: data.email,
      subject: 'Thank you for contacting UntrainedModel',
      content: `Hi ${data.name},\n\nThank you for reaching out! We have received your ${data.type} inquiry and will respond within 24 hours.\n\nBest regards,\nThe UntrainedModel Team`
    });
  }

  async getSubmissionStatus(id: string): Promise<{ status: string; timestamp: string } | null> {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const submission = submissions.find((s: any) => s.id === id);
    
    if (submission) {
      return {
        status: submission.status,
        timestamp: submission.timestamp
      };
    }
    
    return null;
  }

  // Analytics helper
  trackFormEvent(event: 'viewed' | 'started' | 'completed' | 'error', data?: any) {
    // In production, integrate with your analytics service
    console.log('📊 Contact form analytics:', {
      event,
      data,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    });
  }
}

export const contactService = new ContactService();