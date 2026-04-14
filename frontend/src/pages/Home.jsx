import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, Facebook, Clock, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observerRef.current.observe(el));

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const menuCards = [
    {
      title: 'Menu Gourmet',
      price: '25,90€',
      items: [
        'Foie Gras Maison',
        'Assiette du Boucher',
        'Dessert du Chef',
        'Café ou Thé'
      ],
      note: 'Notre sélection raffinée'
    },
    {
      title: 'Menu Bistrot',
      price: '15,90€',
      items: [
        'Entrée au choix',
        'Plat du Jour',
        'Dessert maison',
        'Café offert'
      ],
      note: 'Midi uniquement'
    },
    {
      title: 'Menu Enfant',
      price: '10,50€',
      items: [
        'Steak haché',
        'Frites maison',
        'Glace au choix',
        'Sirop ou Jus'
      ],
      note: 'Jusqu\'à 12 ans'
    }
  ];

  const carteData = {
    entrees: [
      { name: 'Foie Gras Maison', price: '16,90€' },
      { name: 'Planche Charcuterie', price: '12,50€' },
      { name: 'Salade de Chèvre Chaud', price: '11,90€' },
      { name: 'Tartare de Saumon', price: '13,50€' },
      { name: 'Carpaccio de Bœuf', price: '12,90€' }
    ],
    plats: [
      { name: 'Magret de Canard', price: '21,00€' },
      { name: 'Dorade Grillée', price: '19,50€' },
      { name: 'Entrecôte Frites', price: '19,00€' },
      { name: 'Pavé de Saumon', price: '18,50€' },
      { name: 'Confit de Canard', price: '20,00€' },
      { name: 'Tartare de Bœuf', price: '15,90€' }
    ],
    burgers: [
      { name: 'Le Rossini', price: '17,90€', desc: 'Foie gras, confit d\'oignons' },
      { name: 'Le Royal Cheese', price: '15,90€', desc: 'Double cheddar, bacon' },
      { name: 'Le Provençal', price: '16,50€', desc: 'Chèvre, miel, roquette' },
      { name: 'Le Classic', price: '14,50€', desc: 'Cheddar, salade, tomate' }
    ],
    pizzas: [
      { name: 'Regina', price: '13,00€', desc: 'Jambon, champignons' },
      { name: 'Provençale', price: '12,50€', desc: 'Légumes du soleil' },
      { name: 'Quatre Fromages', price: '14,00€', desc: 'Mozzarella, chèvre, bleu, emmental' },
      { name: 'Reine', price: '13,50€', desc: 'Jambon, olives, champignons' }
    ],
    desserts: [
      { name: 'Tiramisu Maison', price: '7,50€' },
      { name: 'Crème Brûlée', price: '7,00€' },
      { name: 'Tarte Tatin', price: '8,00€' },
      { name: 'Coupe Glacée', price: '6,50€' },
      { name: 'Fondant au Chocolat', price: '8,50€' }
    ]
  };

  const galleryImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_provence-dining/artifacts/6fnel6hl_69010301_888512718189279_4142079074581348352_n.jpg',
      label: 'Entrée Melon Jambon'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_provence-dining/artifacts/7xwrj3ae_53110846_776416286065590_1070365855151292416_n.jpg',
      label: 'Petits Pains Maison'
    },
    {
      url: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
      label: 'Burgers Gourmands'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_5402dfc9-f18a-4ac1-918e-f12a259e280c/artifacts/wuf5qalk_unnamed%20%286%29.jpg',
      label: 'Dessert Tiramisu'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_5402dfc9-f18a-4ac1-918e-f12a259e280c/artifacts/eo8njvow_unnamed%20%287%29.jpg',
      label: 'Pizza Maison'
    },
    {
      url: 'https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e',
      label: 'Poisson Grillé'
    },
    {
      url: 'https://images.unsplash.com/photo-1641209751671-d1cd7bedcd86',
      label: 'Planche Bistrot'
    },
    {
      url: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804',
      label: 'Pâtes Fraîches'
    }
  ];

  return (
    <div className="bg-cream text-chocolate font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-serif text-2xl font-bold text-terracotta">Bistrot Arlésien</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#accueil" className="hover:text-terracotta transition-colors">Accueil</a>
            <a href="#identite" className="hover:text-terracotta transition-colors">Notre Histoire</a>
            <a href="#menus" className="hover:text-terracotta transition-colors">Menus</a>
            <a href="#carte" className="hover:text-terracotta transition-colors">La Carte</a>
            <a href="#galerie" className="hover:text-terracotta transition-colors">Galerie</a>
            <a href="#contact" className="hover:text-terracotta transition-colors">Contact</a>
          </div>
          <a href="tel:0490995193">
            <Button className="bg-terracotta text-white hover:bg-terracotta/90">
              Réserver
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="accueil" 
        className="min-h-screen hero-bg flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://customer-assets.emergentagent.com/job_5402dfc9-f18a-4ac1-918e-f12a259e280c/artifacts/txnast3g_58772277_813974082309810_1826016169211985920_n.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 fade-in-up">
              Bistrot Arlésien
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-6 fade-in-up">
              <span className="bg-terracotta/80 px-4 py-2 rounded-full text-sm font-semibold">[PROVENCE]</span>
              <span className="bg-terracotta/80 px-4 py-2 rounded-full text-sm font-semibold">[CUISINE MAISON]</span>
              <span className="bg-terracotta/80 px-4 py-2 rounded-full text-sm font-semibold">[ARLES]</span>
            </div>
            <p className="text-xl md:text-2xl mb-8 font-light fade-in-up">
              Bistronomie provençale — produits frais, faits maison, au cœur d'Arles
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center fade-in-up">
              <a href="tel:0490995193">
                <Button variant="outline" className="border-2 border-terracotta text-white hover:bg-terracotta hover:text-white transition-all font-semibold">
                  Appeler pour réserver
                </Button>
              </a>
              <a href="#menus">
                <Button className="bg-terracotta text-white hover:bg-terracotta/90 transition-all font-semibold">
                  Nos Menus
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Identité */}
      <section id="identite" className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 fade-in-up">
              Une cuisine du terroir, préparée avec passion
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <img 
                  src="https://customer-assets.emergentagent.com/job_provence-dining/artifacts/6fnel6hl_69010301_888512718189279_4142079074581348352_n.jpg" 
                  alt="Assiette Melon et Jambon de Parme - Spécialité Provençale" 
                  className="h-80 w-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="fade-in-up">
                <p className="text-lg leading-relaxed mb-6">
                  Au Bistrot Arlésien, tout est préparé maison avec un savoir-faire artisanal qui respecte les traditions culinaires provençales. Nous sélectionnons chaque matin des produits frais et locaux auprès de nos producteurs partenaires.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Installés en plein cœur d'Arles, sur la mythique Place du Forum, nous vous accueillons dans une atmosphère chaleureuse et authentique où se mélangent tradition et modernité.
                </p>
                <p className="text-lg leading-relaxed">
                  Notre équipe passionnée met un point d'honneur à vous offrir une expérience gastronomique unique, où chaque plat raconte l'histoire de notre belle Provence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Menus */}
      <section id="menus" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 fade-in-up">
              Nos Menus : Simple, Bon, Fait Maison
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {menuCards.map((menu, index) => (
                <Card key={index} className="fade-in-up hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl mb-4 text-terracotta">{menu.title}</h3>
                    <div className="text-3xl font-bold mb-6 text-chocolate">{menu.price}</div>
                    <ul className="space-y-3 text-gray-700">
                      {menu.items.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 italic">{menu.note}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section La Carte - Full Width Menu */}
      <section id="carte" className="py-20 bg-chocolate">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-cursive text-5xl md:text-6xl text-center mb-4 fade-in-up text-cream">
              La Carte
            </h2>
            <p className="text-center text-cream/80 mb-16 fade-in-up">Découvrez nos spécialités</p>
            
            {/* Menu Grid - 2 Columns */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              
              {/* Column 1 */}
              <div className="space-y-12">
                {/* Entrées */}
                <div className="fade-in-up">
                  <h3 className="font-cursive text-4xl mb-6 text-terracotta text-center md:text-left">Entrées</h3>
                  <div className="space-y-3">
                    {carteData.entrees.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-cream border-b border-cream/20 pb-2">
                        <span className="text-lg">{item.name}</span>
                        <span className="flex-1 mx-3 border-b border-dotted border-cream/30"></span>
                        <span className="font-semibold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Burgers */}
                <div className="fade-in-up">
                  <h3 className="font-cursive text-4xl mb-6 text-terracotta text-center md:text-left">Burgers</h3>
                  <div className="space-y-3">
                    {carteData.burgers.map((item, idx) => (
                      <div key={idx} className="text-cream pb-2 border-b border-cream/20">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold">{item.name}</span>
                          <span className="flex-1 mx-3 border-b border-dotted border-cream/30"></span>
                          <span className="font-semibold text-lg">{item.price}</span>
                        </div>
                        {item.desc && <p className="text-sm text-cream/70 mt-1 italic">{item.desc}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desserts */}
                <div className="fade-in-up">
                  <h3 className="font-cursive text-4xl mb-6 text-terracotta text-center md:text-left">Desserts</h3>
                  <div className="space-y-3">
                    {carteData.desserts.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-cream border-b border-cream/20 pb-2">
                        <span className="text-lg">{item.name}</span>
                        <span className="flex-1 mx-3 border-b border-dotted border-cream/30"></span>
                        <span className="font-semibold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-12">
                {/* Plats */}
                <div className="fade-in-up">
                  <h3 className="font-cursive text-4xl mb-6 text-terracotta text-center md:text-left">Plats</h3>
                  <div className="space-y-3">
                    {carteData.plats.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-cream border-b border-cream/20 pb-2">
                        <span className="text-lg">{item.name}</span>
                        <span className="flex-1 mx-3 border-b border-dotted border-cream/30"></span>
                        <span className="font-semibold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pizzas */}
                <div className="fade-in-up">
                  <h3 className="font-cursive text-4xl mb-6 text-terracotta text-center md:text-left">Pizzas</h3>
                  <div className="space-y-3">
                    {carteData.pizzas.map((item, idx) => (
                      <div key={idx} className="text-cream pb-2 border-b border-cream/20">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold">{item.name}</span>
                          <span className="flex-1 mx-3 border-b border-dotted border-cream/30"></span>
                          <span className="font-semibold text-lg">{item.price}</span>
                        </div>
                        {item.desc && <p className="text-sm text-cream/70 mt-1 italic">{item.desc}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section id="galerie" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 fade-in-up">
              Nos Spécialités
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in-up">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform shadow-md"
                >
                  <img 
                    src={image.url} 
                    alt={image.label} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 fade-in-up">
              Nous Contacter
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Informations */}
              <div className="bg-terracotta text-white p-8 rounded-xl fade-in-up">
                <h3 className="font-serif text-3xl mb-8">Où nous trouver ?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Adresse</h4>
                      <p>5 Place du Forum<br />13200 Arles<br />(près des arènes)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Horaires</h4>
                      <p>Lundi au Vendredi<br />Déjeuner et Dîner<br />12h-14h30 / 19h-22h30</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image Restaurant */}
              <div className="fade-in-up">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5402dfc9-f18a-4ac1-918e-f12a259e280c/artifacts/ql8ujsuf_unnamed%20%281%29.jpg" 
                  alt="Restaurant de nuit" 
                  className="h-full w-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 fade-in-up">
              <Card className="text-center p-6 shadow-md">
                <CardContent className="pt-6">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-terracotta" />
                  <h4 className="font-serif text-xl mb-2 text-terracotta">Par Téléphone</h4>
                  <p className="font-semibold">04 90 99 51 93</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 shadow-md">
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-terracotta" />
                  <h4 className="font-serif text-xl mb-2 text-terracotta">Nous Trouver</h4>
                  <p>5 Place du Forum<br />13200 Arles</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 shadow-md">
                <CardContent className="pt-6">
                  <Facebook className="w-12 h-12 mx-auto mb-4 text-terracotta" />
                  <h4 className="font-serif text-xl mb-2 text-terracotta">Sur Facebook</h4>
                  <p>Suivez notre page<br />Bistrot Arlésien</p>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <div className="mb-12 fade-in-up">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.0!2d4.6275!3d43.6767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5c4e2c3c8c8c9%3A0x1!2s5%20Place%20du%20Forum%2C%2013200%20Arles!5e0!3m2!1sen!2sfr!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bistrot Arlésien Location"
                ></iframe>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center fade-in-up">
              <a href="tel:0490995193">
                <Button className="bg-terracotta text-white px-8 py-6 text-lg hover:bg-terracotta/90 transition-all font-semibold w-full md:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler - 04 90 99 51 93
                </Button>
              </a>
              <a href="https://www.facebook.com/bistrotarlesien" target="_blank" rel="noopener noreferrer">
                <Button className="bg-terracotta/80 text-white px-8 py-6 text-lg hover:bg-terracotta transition-all font-semibold w-full md:w-auto">
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook - Bistrot Arlésien
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chocolate text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl mb-4">Bistrot Arlésien</h3>
          <p className="mb-4">Bistronomie provençale au cœur d'Arles</p>
          <p className="text-sm opacity-80">© 2024 Bistrot Arlésien - 5 Place du Forum, 13200 Arles</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
