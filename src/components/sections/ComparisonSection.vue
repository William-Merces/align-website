<template>
  <section class="comparison-section">
    <div class="container">
      <div class="section-title">
        <h2>How We Compare</h2>
        <p>See how Align's innovative model compares to traditional outsourcing approaches</p>
      </div>

      <div class="comparison-table-wrapper">
        <div class="table-decoration-dots"></div>
        <div class="table-decoration-circle"></div>

        <table class="comparison-table">
          <thead>
            <tr>
              <th class="feature-header">Feature</th>
              <th class="traditional-header">
                <div class="header-content">
                  <div class="header-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                  <span>Traditional Outsourcing</span>
                </div>
              </th>
              <th class="align-header">
                <div class="header-content">
                  <div class="header-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span>Align Model</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(feature, index) in comparisonFeatures"
              :key="index"
              :class="{
                highlight: feature.highlight,
                'row-even': index % 2 === 0,
              }"
            >
              <td class="feature-name">
                <div class="feature-icon">
                  <svg v-if="feature.icon === 'onboarding'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <svg v-else-if="feature.icon === 'flexibility'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <svg v-else-if="feature.icon === 'team-management'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <svg v-else-if="feature.icon === 'costs'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <svg v-else-if="feature.icon === 'support'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <svg v-else-if="feature.icon === 'scalability'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <span>{{ feature.name }}</span>
                <div
                  class="tooltip-trigger"
                  @mouseover="showTooltip(index)"
                  @mouseleave="hideTooltip()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <div
                    class="tooltip-content"
                    :class="{ active: activeTooltip === index }"
                  >
                    {{ feature.tooltip }}
                  </div>
                </div>
              </td>
              <td class="traditional-cell">
                <div class="comparison-content">
                  <div
                    v-if="feature.traditionalScore !== null"
                    class="score-dots"
                  >
                    <span
                      v-for="n in 5"
                      :key="n"
                      class="dot"
                      :class="{ filled: n <= feature.traditionalScore }"
                    ></span>
                  </div>
                  <p>{{ feature.traditional }}</p>
                  <div class="score-value" v-if="feature.traditionalValue">
                    {{ feature.traditionalValue }}
                  </div>
                </div>
              </td>
              <td class="align-cell">
                <div class="comparison-content">
                  <div v-if="feature.alignScore !== null" class="score-dots">
                    <span
                      v-for="n in 5"
                      :key="n"
                      class="dot"
                      :class="{ filled: n <= feature.alignScore }"
                    ></span>
                  </div>
                  <p>{{ feature.align }}</p>
                  <div class="score-value highlight" v-if="feature.alignValue">
                    {{ feature.alignValue }}
                  </div>
                  <div class="advantage-badge" v-if="feature.advantage">
                    {{ feature.advantage }}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="comparison-summary">
        <div class="summary-card">
          <div class="card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
              <path d="M15 7h6v6"></path>
            </svg>
          </div>
          <div class="card-content">
            <h3>Higher ROI</h3>
            <p>
              Our model offers a 3x higher return on investment in the first year,
              with ongoing cost savings and performance improvements.
            </p>
          </div>
        </div>

        <div class="summary-card">
          <div class="card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path
                d="M16 8.5C15.5 8 14.5 7 13 7h-2.5C9.5 7 8.5 8 8.5 9.5S9.5 12 11 12h2c1.5 0 2.5 1 2.5 2.5S14.5 17 13 17h-2.5c-1.5 0-2.5-1-3-1.5"
              ></path>
              <path d="M12 7V17"></path>
            </svg>
          </div>
          <div class="card-content">
            <h3>Cost Efficiency</h3>
            <p>
              Align provides up to 40% savings compared to traditional models,
              without compromising quality or performance.
            </p>
          </div>
        </div>

        <div class="summary-card">
          <div class="card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
              ></path>
              <path d="M12 20h9"></path>
            </svg>
          </div>
          <div class="card-content">
            <h3>Flexibility & Adaptability</h3>
            <p>
              Our model adapts to your constantly changing needs, with easy scaling options
              and no long-term commitments required.
            </p>
          </div>
        </div>
      </div>

      <div class="section-cta">
        <router-link to="/contact" class="btn btn-primary">
          Request a Proposal
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="btn-arrow"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

// State for active tooltip
const activeTooltip = ref<number | null>(null)

// Comparison data
const comparisonFeatures = [
  {
    name: "Onboarding Process",
    icon: "onboarding",
    traditional: "Slow process, 1-3 months for team assembly and integration.",
    traditionalScore: 2,
    traditionalValue: "60-90 days",
    align: "Dedicated team in just 15 days, with agile and structured integration.",
    alignScore: 5,
    alignValue: "15 days",
    advantage: "75% faster",
    tooltip: "The time needed to assemble, train, and integrate the team into your workflow.",
    highlight: true,
  },
  {
    name: "Flexibility",
    icon: "flexibility",
    traditional: "Long contracts with little flexibility for adjustments.",
    traditionalScore: 1,
    traditionalValue: "12+ month contracts",
    align: "Quickly adjust team size as needed, without bureaucracy.",
    alignScore: 5,
    alignValue: "5-day notice",
    advantage: "Maximum adaptability",
    tooltip: "The ability to scale your team up or down based on your changing needs.",
  },
  {
    name: "Team Management",
    icon: "team-management",
    traditional: "Manual processes with higher supervision burden.",
    traditionalScore: 2,
    traditionalValue: null,
    align: "Efficient management with dashboards and automated reporting.",
    alignScore: 4,
    alignValue: null,
    advantage: "100% more efficient",
    tooltip: "How teams are supervised, evaluated, and optimized for performance.",
  },
  {
    name: "Costs",
    icon: "costs",
    traditional: "High fixed costs with low predictability.",
    traditionalScore: 2,
    traditionalValue: "100%",
    align: "Save up to 40% with optimized model and predictability.",
    alignScore: 5,
    alignValue: "60%",
    advantage: "Up to 40% savings",
    tooltip: "Total costs including recruitment, HR management, infrastructure and operational expenses.",
    highlight: true,
  },
  {
    name: "Support",
    icon: "support",
    traditional: "Limited support during business hours.",
    traditionalScore: 3,
    traditionalValue: "9am-6pm Support",
    align: "24/7 support with multiple service channels.",
    alignScore: 5,
    alignValue: "24/7 Support",
    advantage: "Always available",
    tooltip: "Availability and responsiveness of support for your team and operations.",
  },
  {
    name: "Scalability",
    icon: "scalability",
    traditional: "Slow growth limited by internal resources.",
    traditionalScore: 2,
    traditionalValue: "Weeks/Months",
    align: "Rapid expansion without infrastructure or hiring limitations.",
    alignScore: 5,
    alignValue: "Days",
    advantage: "5x faster",
    tooltip: "The ability to quickly expand your operation in response to new opportunities.",
    highlight: true,
  },
]

// Methods to manage tooltips
const showTooltip = (index: number) => {
  activeTooltip.value = index
}

const hideTooltip = () => {
  activeTooltip.value = null
}
</script>
<style lang="scss" scoped>
.comparison-section {
  padding: 80px 0;
  background-color: white;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 133, 255, 0.05) 0%,
      rgba(0, 133, 255, 0.02) 40%,
      transparent 70%
    );
    z-index: 0;
  }

  &::before {
    top: -150px;
    right: -100px;
  }

  &::after {
    bottom: -150px;
    left: -100px;
    width: 400px;
    height: 400px;
    opacity: 0.7;
  }
}

.container {
  position: relative;
  z-index: 1;
}

.comparison-table-wrapper {
  position: relative;
  margin-bottom: 4rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);

  .table-decoration-dots {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 140px;
    height: 140px;
    background-image: radial-gradient(var(--text-light) 1px, transparent 1px);
    background-size: 10px 10px;
    z-index: 0;
    opacity: 0.5;
  }

  .table-decoration-circle {
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 133, 255, 0.05) 0%,
      rgba(0, 133, 255, 0.02) 60%,
      transparent 80%
    );
    z-index: 0;
  }
}

.comparison-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  position: relative;
  z-index: 1;

  th,
  td {
    padding: 1.5rem;
    text-align: left;
    position: relative;
    transition: all 0.3s ease;
  }

  th {
    font-weight: 600;
    font-size: 1.125rem;

    &.feature-header {
      width: 30%;
      background-color: var(--text-color);
      color: white;
      border-radius: 1rem 0 0 0;
    }

    &.traditional-header {
      width: 35%;
      background-color: var(--text-light);
      color: white;

      .header-content {
        display: flex;
        align-items: center;
        gap: 1rem;

        .header-icon {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    &.align-header {
      width: 35%;
      background: linear-gradient(
        135deg,
        var(--primary-color) 0%,
        var(--primary-dark) 100%
      );
      color: white;
      border-radius: 0 1rem 0 0;

      .header-content {
        display: flex;
        align-items: center;
        gap: 1rem;

        .header-icon {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid var(--border-color);
      transition: all 0.3s ease;

      &:last-child {
        border-bottom: none;

        td:first-child {
          border-radius: 0 0 0 1rem;
        }

        td:last-child {
          border-radius: 0 0 1rem 0;
        }
      }

      &:hover {
        background-color: rgba(0, 133, 255, 0.03);

        .feature-icon {
          transform: scale(1.1);
          background-color: var(--primary-color);
          color: white;
        }
      }

      &.highlight {
        background-color: rgba(0, 133, 255, 0.05);
        border-left: 3px solid var(--primary-color);
      }

      &.row-even {
        background-color: var(--bg-light);

        &:hover {
          background-color: rgba(0, 133, 255, 0.05);
        }
      }

      td {
        &.feature-name {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          color: var(--text-color);
          position: relative;

          .feature-icon {
            width: 48px;
            height: 48px;
            background-color: rgba(0, 133, 255, 0.1);
            color: var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .tooltip-trigger {
            margin-left: 0.5rem;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-light);
            cursor: pointer;
            position: relative;

            svg {
              width: 16px;
              height: 16px;
            }

            &:hover {
              color: var(--primary-color);
            }

            .tooltip-content {
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translate(-50%, -100%);
              background-color: var(--text-color);
              color: white;
              padding: 0.75rem 1rem;
              border-radius: 0.5rem;
              font-size: 0.875rem;
              font-weight: normal;
              width: 250px;
              opacity: 0;
              visibility: hidden;
              transition: all 0.3s ease;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              z-index: 10;

              &::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -8px;
                border-width: 8px;
                border-style: solid;
                border-color: var(--text-color) transparent transparent transparent;
              }

              &.active {
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, -110%);
              }
            }
          }
        }

        &.traditional-cell {
          .comparison-content {
            p {
              color: var(--text-light);
              font-size: 0.9375rem;
              margin-bottom: 0.5rem;
            }

            .score-value {
              font-size: 0.875rem;
              color: var(--text-light);
              background-color: var(--bg-light);
              display: inline-block;
              padding: 0.25rem 0.75rem;
              border-radius: 1rem;
              font-weight: 500;
            }
          }
        }

        &.align-cell {
          background-color: rgba(0, 133, 255, 0.02);

          .comparison-content {
            p {
              color: var(--text-color);
              font-size: 0.9375rem;
              margin-bottom: 0.5rem;
              font-weight: 500;
            }

            .score-value {
              font-size: 0.875rem;
              background-color: rgba(0, 133, 255, 0.1);
              color: var(--primary-color);
              display: inline-block;
              padding: 0.25rem 0.75rem;
              border-radius: 1rem;
              font-weight: 600;

              &.highlight {
                background: linear-gradient(
                  90deg,
                  var(--primary-color) 0%,
                  var(--primary-dark) 100%
                );
                color: white;
                box-shadow: 0 2px 8px rgba(0, 133, 255, 0.2);
              }
            }

            .advantage-badge {
              font-size: 0.75rem;
              background-color: rgba(0, 200, 117, 0.1);
              color: var(--secondary-color);
              display: inline-block;
              padding: 0.25rem 0.75rem;
              border-radius: 1rem;
              font-weight: 600;
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
}
.score-dots {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.75rem;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--border-color);
    transition: background-color 0.3s ease;

    &.filled {
      background-color: var(--text-light);
    }
  }
}

.align-cell .score-dots .dot.filled {
  background-color: var(--primary-color);
  box-shadow: 0 0 5px rgba(0, 133, 255, 0.3);
}

.comparison-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  .summary-card {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    display: flex;
    gap: 1.5rem;
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
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

      &::before {
        transform: scaleX(1);
      }

      .card-icon {
        background-color: var(--primary-color);
        color: white;
        transform: scale(1.1);
      }
    }

    .card-icon {
      width: 60px;
      height: 60px;
      flex-shrink: 0;
      border-radius: 50%;
      background-color: rgba(0, 133, 255, 0.1);
      color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .card-content {
      h3 {
        font-size: 1.25rem;
        color: var(--text-color);
        margin-bottom: 0.75rem;
      }

      p {
        color: var(--text-light);
        font-size: 0.9375rem;
        line-height: 1.6;
        margin: 0;
      }
    }
  }
}

.section-cta {
  text-align: center;

  .btn {
    padding: 1rem 2rem;
    background: linear-gradient(
      135deg,
      var(--primary-color) 0%,
      var(--primary-dark) 100%
    );
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1.125rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(0, 133, 255, 0.2);
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transition: all 0.6s ease;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 25px rgba(0, 133, 255, 0.3);

      &::after {
        left: 100%;
      }

      .btn-arrow {
        transform: translateX(5px);
      }
    }

    .btn-arrow {
      transition: transform 0.3s ease;
    }
  }
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .comparison-summary {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 1.25rem 1rem;
  }
}

@media (max-width: 992px) {
  .comparison-table {
    display: block;
    overflow-x: auto;

    th.feature-header {
      width: 40%;
    }

    th.traditional-header,
    th.align-header {
      width: 30%;
    }
  }

  .feature-icon {
    width: 40px !important;
    height: 40px !important;
  }
}

@media (max-width: 768px) {
  .section-title h2 {
    font-size: 2rem;
  }

  .section-title p {
    font-size: 1.125rem;
  }

  .comparison-table tbody td.feature-name {
    padding-right: 0.5rem;
  }

  .tooltip-trigger .tooltip-content {
    width: 200px;
  }
}

@media (max-width: 576px) {
  .comparison-table th .header-content {
    flex-direction: column;
    gap: 0.5rem;

    .header-icon {
      width: 32px;
      height: 32px;
    }
  }

  .score-dots {
    .dot {
      width: 8px;
      height: 8px;
    }
  }

  .comparison-summary .summary-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
    gap: 1rem;
  }

  .advantage-badge {
    display: block !important;
    margin: 0.5rem 0 0 0 !important;
  }

  .section-cta .btn {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
  }
}
</style>
