/**
 * Utility function to handle registration via WhatsApp
 * Opens WhatsApp with a pre-filled message for course registration
 */
export const handleRegister = () => {
  const message = encodeURIComponent(
    "Hi! I'm interested in registering for the aviation cabin crew training course. Please provide me with more details about the enrollment process."
  );
  const whatsappUrl = `https://wa.me/94743293829?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

/**
 * Utility function to handle service inquiry via WhatsApp
 * Opens WhatsApp with a pre-filled message for specific services
 */
export const handleServiceInquiry = (serviceName: string, customMessage?: string) => {
  const defaultMessage = `Hi! I'm interested in the ${serviceName} service. Please provide more details.`;
  const message = encodeURIComponent(customMessage || defaultMessage);
  const whatsappUrl = `https://wa.me/94743293829?text=${message}`;
  window.open(whatsappUrl, '_blank');
};