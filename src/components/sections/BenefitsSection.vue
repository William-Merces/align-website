<template>
  <section class="benefits-section">
    <div class="container">
      <div class="section-title">
        <h2>Benefits That Transform <span class="highlight">Your Business</span></h2>
        <p>Our unique outsourcing model combines technology, optimized processes, and exceptional talent.</p>
      </div>

      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <h3>Cut Costs, Not Quality</h3>
          <p>Save up to 40% on operational expenses while maintaining top-notch performance and service quality.</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
          <h3>Fast & Dedicated Teams</h3>
          <p>Get your specialized team ready to go in as little as 15 business days—tailored to your specific needs.</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h3>Scalable Solutions</h3>
          <p>Adapt seamlessly to changing demands with the flexibility to scale up or down as your business evolves.</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>Global Talent Access</h3>
          <p>Tap into a diverse pool of highly skilled professionals to enhance your capabilities and reach.</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <h3>Strategic Oversight</h3>
          <p>Benefit from experienced management and proven methodologies to ensure project success and operational excellence.</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-8 3v7c0 5.2 3.3 10 8 11 1.9-.4 3.6-1.4 5-2.7"></path>
              <path d="M14.6 15h1.8a2 2 0 0 1 1.9 2.4l-1 5"></path>
              <path d="M5 10h14"></path>
              <path d="M21 22l-3-3m0 3 3-3"></path>
            </svg>
          </div>
          <h3>24/7 Support</h3>
          <p>Our dedicated support team is always available to assist you and ensure your operations run smoothly at all times.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Static component, no logic needed
</script>

<style lang="scss" scoped>
.benefits-section {
  padding: 80px 0;
  background: linear-gradient(to bottom, var(--white), var(--bg-light));
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -150px;
    right: -150px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 133, 255, 0.05) 0%,
      rgba(0, 133, 255, 0.02) 50%,
      transparent 70%
    );
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 133, 255, 0.05) 0%,
      rgba(0, 133, 255, 0.01) 60%,
      transparent 80%
    );
    z-index: 0;
  }
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;

    .highlight {
      color: var(--primary-color);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: var(--primary-color);
        border-radius: 2px;
      }
    }
  }

  p {
    color: var(--text-light);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.benefit-card {
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-color);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--primary-color) 0%,
      var(--primary-dark) 100%
    );
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

    &::before {
      transform: translateY(0);
    }

    .benefit-icon {
      background-color: var(--primary-color);
      color: white;
      transform: scale(1.1);
    }

    h3 {
      color: var(--primary-color);
    }
  }
}

.benefit-icon {
  width: 60px;
  height: 60px;
  background-color: rgba(0, 133, 255, 0.1);
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  font-weight: 600;
  transition: color 0.3s ease;
}

p {
  color: var(--text-light);
  font-size: 0.9375rem;
  line-height: 1.6;
}

@media (max-width: 1200px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .section-title h2 {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .section-title h2 {
    font-size: 1.75rem;
  }

  .benefit-icon {
    width: 50px;
    height: 50px;
  }
}
</style>
