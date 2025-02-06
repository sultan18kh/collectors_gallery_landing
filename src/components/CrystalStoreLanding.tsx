import { useState, CSSProperties } from "react";
import { Sun, Moon, MapPin, Clock, Mail } from "lucide-react";
import moduleStyles from "../styles/CrystalStoreLanding.module.scss";

// Type for our style object
type StyleDictionary = {
  [key: string]: CSSProperties;
};

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
}

const CrystalStoreLanding = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(
    null
  );
  const [hoveredButton, setHoveredButton] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  // Theme styles that will be used throughout the component
  const theme = {
    colors: {
      light: {
        primary: "#232323", // Dark grey for primary elements
        secondary: "#333333", // Slightly lighter grey for secondary elements
        background: "#f5f5f5",
        text: "#232323",
        cardBg: "#ffffff",
        shadow: "rgba(0, 0, 0, 0.1)",
      },
      dark: {
        primary: "#1a1a1a", // Even darker grey for dark mode
        secondary: "#232323",
        background: "#121212",
        text: "#ffffff",
        cardBg: "#1e1e1e",
        shadow: "rgba(0, 0, 0, 0.3)",
      },
    },
  };

  // Get current theme colors
  const currentTheme = isDarkTheme ? theme.colors.dark : theme.colors.light;

  // Shared styles
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Anderson",
      content:
        "The amethyst clusters from Sohail's are simply stunning. The energy in the store is amazing, and the staff is so knowledgeable!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      content:
        "Found the perfect crystal point set for meditation. The quality and selection here are unmatched in Sausalito.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Roberts",
      content:
        "A magical place with beautiful crystals. The healing stone bundle I purchased has made such a difference in my daily practice.",
      rating: 5,
    },
  ];

  // Add video data structure
  const videos = [
    {
      id: 1,
      title: "Holiday Crystal Collection",
      source: "/src/assets/videos/christmas_crystals.mp4",
      description: "Discover our enchanting holiday crystal collection",
    },
    {
      id: 2,
      title: "Premium Crystal Showcase",
      source: "/src/assets/videos/lion_king_crystals.mp4",
      description: "Experience the majesty of our finest crystal selections",
    },
  ];

  const styles: StyleDictionary = {
    container: {
      minHeight: "100vh",
      backgroundColor: currentTheme.background,
      color: currentTheme.text,
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    header: {
      position: "relative",
      padding: "6rem 2rem",
      backgroundColor: currentTheme.primary,
    },
    heroContent: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    title: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      color: currentTheme.text,
      marginBottom: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    subtitle: {
      fontSize: "1.25rem",
      marginBottom: "2rem",
      color: currentTheme.text,
    },
    buttonHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 4px 15px rgba(156, 39, 176, 0.3)",
    } as CSSProperties,
    themeToggle: {
      position: "fixed" as const,
      top: "1rem",
      right: "1rem",
      padding: "0.5rem",
      borderRadius: "50%",
      backgroundColor: currentTheme.cardBg,
      border: `2px solid ${currentTheme.primary}`,
      cursor: "pointer",
      zIndex: 100,
      color: currentTheme.text,
    } as CSSProperties,
    productSection: {
      padding: "4rem 2rem",
      backgroundColor: currentTheme.background,
    },
    sectionTitle: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "3rem",
      color: currentTheme.text,
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    productCard: {
      backgroundColor: currentTheme.cardBg,
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: `0 4px 6px ${currentTheme.shadow}`,
      transition: "all 0.4s ease",
      cursor: "pointer",
    } as CSSProperties,
    productCardHover: {
      transform: "translateY(-10px) scale(1.02)",
      boxShadow: `0 20px 30px ${currentTheme.shadow}`,
    } as CSSProperties,
    productImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    productContent: {
      padding: "1.5rem",
    },
    productTitle: {
      fontSize: "1.25rem",
      marginBottom: "0.5rem",
      color: currentTheme.text,
    },
    price: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: currentTheme.primary,
    },
    contactSection: {
      padding: "4rem 2rem",
      backgroundColor: currentTheme.cardBg,
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    contactCard: {
      textAlign: "center",
      padding: "2rem",
      backgroundColor: currentTheme.cardBg,
      borderRadius: "1rem",
      boxShadow: `0 4px 6px ${currentTheme.shadow}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    contactIcon: {
      color: currentTheme.primary,
      marginBottom: "1rem",
      display: "block",
      margin: "0 auto 1rem auto",
    },
    testimonialSection: {
      padding: "4rem 2rem",
      backgroundColor: currentTheme.background,
    },
    testimonialGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    testimonialCard: {
      backgroundColor: currentTheme.cardBg,
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: `0 4px 6px ${currentTheme.shadow}`,
      transition: "all 0.3s ease",
    },
    testimonialContent: {
      color: currentTheme.text,
      fontSize: "1.1rem",
      fontStyle: "italic",
      marginBottom: "1rem",
    },
    testimonialAuthor: {
      color: currentTheme.primary,
      fontWeight: "bold",
      fontSize: "1rem",
    },
    footer: {
      padding: "2rem",
      backgroundColor: currentTheme.primary,
      textAlign: "center",
      color: "#ffffff",
    },
    videoBackground: {
      backgroundColor: currentTheme.background,
    } as CSSProperties,

    videoCardTheme: {
      backgroundColor: currentTheme.cardBg,
      boxShadow: `0 4px 6px ${currentTheme.shadow}`,
    } as CSSProperties,
    videoTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: currentTheme.text,
    } as CSSProperties,
    videoDescription: {
      color: currentTheme.text,
      fontSize: "1rem",
    } as CSSProperties,
    button: {
      padding: "1rem 2rem",
      borderRadius: "0.5rem",
      backgroundColor: currentTheme.secondary,
      color: "#ffffff",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    } as CSSProperties,
    storeContent: {
      padding: "4rem 2rem",
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
      textAlign: "center",
    } as CSSProperties,
    storeTitle: {
      color: "#ffffff",
      fontSize: "2.5rem",
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
      marginBottom: "1.5rem",
    } as CSSProperties,
    storeDescription: {
      color: "#ffffff",
      fontSize: "1.25rem",
      maxWidth: "600px",
      textAlign: "center",
      margin: "1rem auto",
      lineHeight: "1.6",
    } as CSSProperties,
  };

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Ocean Eye Crystal Vessel",
      description:
        "A mesmerizing handcrafted glass vessel featuring a stunning blue bubble design with a mystical eye motif. Perfect as a decorative piece or tealight holder.",
      price: 149.99,
      imageUrl: "/src/assets/images/blue-eye-crystal.png", // Image 1
    },
    {
      id: 2,
      name: "Glitter Giraffe Family Sculpture",
      description:
        "Elegant crystal sculpture featuring a mother and baby giraffe adorned with champagne-colored glitter. A stunning statement piece symbolizing family bonds.",
      price: 299.99,
      imageUrl: "/src/assets/images/giraffe-crystal.png", // Image 2
    },
    {
      id: 3,
      name: "Rose Essence Crystal Glass",
      description:
        "Unique crystal glass with a delicate rose quartz-inspired base and an ethereal floating orb design. Features intricate honeycomb patterns.",
      price: 129.99,
      imageUrl: "/src/assets/images/rose-crystal.png", // Image 3
    },
  ];

  const handleExploreClick = () => {
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  const handleGetDirections = () => {
    const destination = "37.856551,-122.4800998";
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=ChIJLXa7ZUWEhYARYQE7s3QPDRs&travelmode=driving`;

    window.open(mapsUrl, "_blank");
  };

  return (
    <div style={styles.container}>
      <button
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        style={styles.themeToggle}
        aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} theme`}
      >
        {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      {/* Header Section */}
      <header className={moduleStyles.storeHeader}>
        <div className={moduleStyles.headerContent}>
          <h1 className={moduleStyles.mainTitle}>Collector's Gallery</h1>
          <div className={moduleStyles.brandRow}>
            <span className={moduleStyles.brandText}>ALEX AND ANI</span>
            <img
              src="/src/assets/images/logos/pandora-logo.png"
              alt="Pandora"
              className={moduleStyles.brandLogo}
            />
            <div className={moduleStyles.swarovskiWrapper}>
              <img
                src="/src/assets/images/logos/swarovski-logo.svg"
                alt="Swarovski"
                className={moduleStyles.swarovskiImage}
              />
              <span className={moduleStyles.alignmentLine}></span>
            </div>
            <span className={moduleStyles.glassArt}>GLASS ART</span>
          </div>
          <button
            className={moduleStyles.animatedButton}
            style={{
              ...styles.button,
              boxShadow: hoveredButton
                ? `0 4px 15px ${currentTheme.shadow}`
                : "none",
              marginTop: "2rem",
            }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            onClick={handleExploreClick}
          >
            Explore Our Collection
          </button>
        </div>
      </header>
      {/* Product Section */}
      <section style={styles.productSection}>
        <h2 style={styles.sectionTitle}>Featured Crystals</h2>
        <div style={styles.productGrid}>
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                ...styles.productCard,
                ...(hoveredCard === product.id ? styles.productCardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                style={styles.productImage}
              />
              <div style={styles.productContent}>
                <h3 style={styles.productTitle}>{product.name}</h3>
                <p style={{ color: currentTheme.text }}>
                  {product.description}
                </p>
                <p style={styles.price}>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Visit Store Section */}
      <section className={moduleStyles.storeShowcase}>
        <div style={styles.storeContent}>
          <h2 style={styles.storeTitle}>Visit Our Sausalito Gallery</h2>
          <p style={styles.storeDescription}>
            Experience our curated collection of Swarovski, Glass Art, and
            premium crystals in person
          </p>
          <button
            className={moduleStyles.animatedButton}
            style={{
              ...styles.button,
              backgroundColor: "transparent",
              border: "2px solid white",
              marginTop: "2rem",
            }}
            onClick={handleGetDirections}
          >
            Plan Your Visit
          </button>
        </div>
      </section>
      {/* Video Showcase Section */}
      <section
        className={moduleStyles.videoSection}
        style={styles.videoBackground}
        data-theme={isDarkTheme ? "dark" : "light"}
      >
        <h2 style={styles.sectionTitle}>Crystal Collections in Motion</h2>
        <div className={moduleStyles.videoGrid}>
          {videos.map((video) => (
            <div
              key={video.id}
              className={moduleStyles.videoCard}
              style={styles.videoCardTheme}
            >
              <video
                className={moduleStyles.video}
                autoPlay
                muted
                loop
                playsInline
                poster="/api/placeholder/400/300"
              >
                <source src={video.source} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={moduleStyles.videoContent}>
                <h3 className={moduleStyles.videoTitle}>{video.title}</h3>
                <p className={moduleStyles.videoDescription}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
      <section style={styles.testimonialSection}>
        <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
        <div style={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                ...styles.testimonialCard,
                transform:
                  hoveredTestimonial === testimonial.id
                    ? "translateY(-5px)"
                    : "none",
                boxShadow:
                  hoveredTestimonial === testimonial.id
                    ? `0 10px 20px ${currentTheme.shadow}`
                    : `0 4px 6px ${currentTheme.shadow}`,
              }}
              onMouseEnter={() => setHoveredTestimonial(testimonial.id)}
              onMouseLeave={() => setHoveredTestimonial(null)}
            >
              <p style={styles.testimonialContent}>"{testimonial.content}"</p>
              <p style={styles.testimonialAuthor}>- {testimonial.name}</p>
              <div style={{ color: currentTheme.primary, marginTop: "0.5rem" }}>
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Visit Us</h2>
        <div style={styles.contactGrid}>
          <div style={styles.contactCard}>
            <MapPin size={32} style={styles.contactIcon} />
            <h3 style={styles.productTitle}>Location</h3>
            <p style={{ color: currentTheme.text }}>
              745 Bridgeway
              <br />
              Sausalito, CA 94965
            </p>
          </div>
          <div style={styles.contactCard}>
            <Clock size={32} style={styles.contactIcon} />
            <h3 style={styles.productTitle}>Hours</h3>
            <p style={{ color: currentTheme.text }}>
              Mon-Sat: 10am - 6pm
              <br />
              Sun: 11am - 5pm
            </p>
          </div>
          <div style={styles.contactCard}>
            <Mail size={32} style={styles.contactIcon} />
            <h3 style={styles.productTitle}>Contact</h3>
            <p style={{ color: currentTheme.text }}>
              info@sohailsamethyst.com
              <br />
              (415) 331-0930
            </p>
          </div>
        </div>
      </section>
      <footer style={styles.footer}>
        <p>&copy; 2025 Collector's Gallery Sausalito. All rights reserved.</p>
      </footer>
      {/* Snackbar */}
      {showSnackbar && (
        <div className={moduleStyles.snackbar}>
          Our collection will be available soon! Stay tuned.
        </div>
      )}
    </div>
  );
};

export default CrystalStoreLanding;
