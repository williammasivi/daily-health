import React from 'react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "How to Use Daily Health for Online Consultations",
      image: "/medium-shot-doctor-holding-smartphone.jpg",
      alt: "Doctor holding smartphone",
      content: "Daily Health allows you to easily schedule and conduct online consultations with healthcare professionals..."
    },
    {
      id: 2,
      title: "Top 5 Benefits of Using Daily Health",
      image: "/black-person-with-medic-profession-using-laptop.jpg",
      alt: "Medic professional using laptop",
      content: "Discover the top benefits of using Daily Health for your medical needs, including convenience, accessibility, and more..."
    },
    {
      id: 3,
      title: "Daily Health: Connecting Patients with Doctors",
      image: "/685e4b4dc7e00480f7d5756cb54f3acf.jpg",
      alt: "Doctor taking selfie",
      content: "Learn how Daily Health is bridging the gap between patients and doctors, providing seamless communication and care..."
    },
    {
      id: 4,
      title: "Your Guide to Finding Pharmacies with Daily Health",
      image: "/pexels-tima-miroshnichenko-8376193.jpg",
      alt: "Doctor consulting patient online",
      content: "Easily locate pharmacies near you using Daily Health's intuitive interface and comprehensive database..."
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Daily Health Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.map(article => (
          <div key={article.id} className="relative group bg-white rounded-md shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <img src={article.image} alt={article.alt} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-700">{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
