export interface PlumbingServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryKey: string;
  description: string;
  image: string;
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  service: string;
  message: string;
}
