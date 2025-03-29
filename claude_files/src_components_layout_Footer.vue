<template>
  <footer class="footer">
    <div class="container">
      <!-- Principal Footer Content -->
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-text">Align</div>
            <div class="logo-dot"></div>
          </div>
          <p class="tagline">Boost your Bottom Line with Smart Hires.</p>
          <div class="cta-container">
            <router-link to="/contact" class="btn btn-primary-light">
              Request a Proposal
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
          </div>
          <div class="social-icons">
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <!-- Navigation Links -->
          <div class="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/how-it-works">How It Works</router-link></li>
              <li><router-link to="/why-align">Why Align</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>

          <!-- Services Links -->
          <div class="footer-section">
            <h3>Services</h3>
            <ul>
              <li><router-link to="/services#development">Development</router-link></li>
              <li><router-link to="/services#support">Customer Support</router-link></li>
              <li><router-link to="/services#management">Project Management</router-link></li>
              <li><router-link to="/services#marketing">Marketing</router-link></li>
              <li><router-link to="/services#design">Design</router-link></li>
            </ul>
          </div>

          <!-- Contact Information -->
          <div class="footer-section">
            <h3>Contact</h3>
            <ul class="contact-info">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M22 7l-10 5-10-5"></path></svg>
                <a href="mailto:contact@align.com">contact@align.com</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>San Francisco, USA</span>
              </li>
            </ul>


          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2024 Align. All rights reserved.</p>
        <div class="footer-legal">
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// AppFooter component
// Footer component that contains navigation, contact information and key metrics
</script>

<style lang="scss" scoped>
.footer {
  background-color: #1c2237;
  color: #fff;
  padding: 3.5rem 0 1.5rem; // Reduced padding
  margin-top: 2rem;

  /* Container styling */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* Main footer layout */
  .footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-bottom: 2.5rem;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  /* Brand section styling */
  .footer-brand {
    .footer-logo {
      display: flex;
      align-items: center;
      margin-bottom: 1.25rem;

      .logo-text {
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        color: white;
        position: relative;
      }

      .logo-dot {
        width: 8px;
        height: 8px;
        background-color: #00c875;
        border-radius: 50%;
        margin-left: 2px;
        margin-bottom: 5px;
      }
    }

    .tagline {
      color: rgba(255, 255, 255, 0.8);
      margin: 0.75rem 0 1.25rem;
      font-size: 0.95rem;
      max-width: 280px;
    }

    .cta-container {
      margin: 1.25rem 0;

      .btn-primary-light {
        background-color: rgba(255, 255, 255, 0.15);
        color: white;
        padding: 0.6rem 1.25rem;
        border-radius: 6px;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.2s ease;
        text-decoration: none;
        font-size: 0.9rem;

        .btn-icon {
          transition: transform 0.2s ease;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);

          .btn-icon {
            transform: translateX(3px);
          }
        }
      }
    }

    .social-icons {
      display: flex;
      gap: 0.75rem;
      margin-top: 1.25rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
        transition: all 0.2s ease;

        &:hover {
          background-color: var(--primary-color, #0085FF);
          transform: translateY(-3px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  /* Footer links section */
  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    .footer-section {
      h3 {
        color: #fff;
        font-size: 1.1rem;
        margin-bottom: 1.25rem;
        font-weight: 600;
        position: relative;
        padding-bottom: 0.6rem;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: var(--primary-color, #0085FF);
        }
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.6rem;

          a {
            color: rgba(255, 255, 255, 0.75);
            text-decoration: none;
            transition: all 0.2s ease;
            font-size: 0.9rem;

            &:hover {
              color: var(--primary-color, #0085FF);
              padding-left: 3px;
            }
          }
        }
      }

      .contact-info {
        li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.75rem;

          svg {
            color: var(--primary-color, #0085FF);
            flex-shrink: 0;
          }

          a, span {
            color: rgba(255, 255, 255, 0.75);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.2s ease;
          }

          a:hover {
            color: white;
          }
        }
      }

      /* Key metrics highlight */

    }
  }

  /* Footer bottom section */
  .footer-bottom {
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }

    p {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.85rem;
      margin: 0;
    }

    .footer-legal {
      display: flex;
      gap: 1.5rem;

      a {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.85rem;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: var(--primary-color, #0085FF);
        }
      }
    }
  }
}
</style>
