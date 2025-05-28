const ContactForm = () => {
  return (
    <div className="bg-white py-16 px-6" id="contact">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold text-gray-900">Need Help Choosing the Right Skincare Combo?</h2>
        <p className="mt-2 text-gray-600">
          Not sure if your skincare products work well together? Reach out to our team for personalized advice on ingredient compatibility and safe usage.
        </p>
      </div>

      <form className="mt-10 max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="mt-1 w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-green-700 focus:ring-green-700"
            placeholder="Tell us your concern or question..."
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-green-700 px-4 py-2 text-white font-semibold hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
