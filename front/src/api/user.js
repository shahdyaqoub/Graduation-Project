import axios from 'axios';

// إعداد Axios مع عنوان URL الأساسي (Base URL)
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1',  // تأكد من أن عنوان URL والمنفذ صحيحان
  timeout: 1000,
});

// دالة لإرسال طلب POST مع البيانات المطلوبة
export const youreExperince1 = async (emotion, text) => {
  try {
    const response = await apiClient.post('/youreExperince', {
      emotion,
      text
    });
    if (response.status === 200) {
      console.log("Feedback submitted successfully");
      return response.data;
    }
  } catch (error) {
    console.error("Error submitting feedback:", error);
    throw new Error("Failed to submit feedback");
  }
};

// دالة لإرسال طلب POST لنموذج الاتصال
export const ContactUs = async (Name, Email, Message) => {
  try {
    const response = await apiClient.post('/contact', {
      Name,
      Email,
      Message
    });
    if (response.status === 200) {
      console.log("Contact submitted successfully");
      return response.data;
    }
  } catch (error) {
    console.error("Error submitting contact:", error);
    throw new Error("Failed to submit contact");
  }
};
