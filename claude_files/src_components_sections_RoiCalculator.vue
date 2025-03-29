<template>
  <section class="roi-calculator-section">
    <div class="container">
      <!-- Calculator Header -->
      <div class="calculator-header">
        <div v-if="!embedded" class="section-title">
          <h2>{{ title || 'ROI Calculator' }}</h2>
          <p class="section-description">
            {{ description || 'Discover how much your company can save with Align\'s smart outsourcing model' }}
          </p>
        </div>
        <button v-if="!embedded" @click="$emit('close')" class="close-button" aria-label="Close calculator">
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
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Calculator Container -->
      <div class="calculator-container">
        <!-- Calculator Tabs -->
        <div class="calculator-tabs">
          <button
            v-for="(tab, index) in calculatorTabs"
            :key="index"
            class="tab-button"
            :class="{ active: activeTab === index }"
            @click="setActiveTab(index)"
          >
            <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <svg v-if="index === 1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
            {{ tab.name }}
          </button>
        </div>

        <!-- Calculator Content -->
        <div class="calculator-content">
          <!-- Basic ROI Calculator View -->
          <div v-if="activeTab === 0" class="calculator-view basic-view">
            <div class="calculator-grid">
              <!-- Inputs Section -->
              <div class="calculator-inputs">
                <h3>Your Team Information</h3>

                <!-- Team Size Slider -->
                <div class="input-group">
                  <div class="input-label">
                    <label for="teamSize">Team Size</label>
                    <div class="tooltip-container">
                      <span
                        class="info-icon"
                        @mouseenter="showTooltip('teamSize')"
                        @mouseleave="hideTooltip()"
                      >i</span>
                      <div
                        class="tooltip"
                        :class="{ 'active': activeTooltip === 'teamSize' }"
                      >
                        Number of people in your current team
                      </div>
                    </div>
                  </div>
                  <div class="slider-container">
                    <input
                      type="range"
                      id="teamSize"
                      v-model.number="teamSize"
                      min="5"
                      max="50"
                      step="5"
                      @input="updateResults"
                      :style="{ '--progress': getProgressPercentage(teamSize, 5, 50) }"
                    />
                    <span class="slider-value">{{ teamSize }}</span>
                  </div>
                  <div class="slider-markers">
                    <span>5</span>
                    <span>50</span>
                  </div>
                </div>

                <!-- Average Salary Slider -->
                <div class="input-group">
                  <div class="input-label">
                    <label for="averageSalary">Average Salary</label>
                    <div class="tooltip-container">
                      <span
                        class="info-icon"
                        @mouseenter="showTooltip('averageSalary')"
                        @mouseleave="hideTooltip()"
                      >i</span>
                      <div
                        class="tooltip"
                        :class="{ 'active': activeTooltip === 'averageSalary' }"
                      >
                        Average monthly salary per employee, including benefits
                      </div>
                    </div>
                  </div>
                  <div class="slider-container">
                    <input
                      type="range"
                      id="averageSalary"
                      v-model.number="averageSalary"
                      min="2000"
                      max="10000"
                      step="500"
                      @input="updateResults"
                      :style="{ '--progress': getProgressPercentage(averageSalary, 2000, 10000) }"
                    />
                    <span class="slider-value">${{ formatNumber(averageSalary) }}</span>
                  </div>
                  <div class="slider-markers">
                    <span>$2,000</span>
                    <span>$10,000</span>
                  </div>
                </div>

                <!-- Inefficiency Rate Slider -->
                <div class="input-group">
                  <div class="input-label">
                    <label for="inefficiencyRate">Inefficiency Rate</label>
                    <div class="tooltip-container">
                      <span
                        class="info-icon"
                        @mouseenter="showTooltip('inefficiencyRate')"
                        @mouseleave="hideTooltip()"
                      >i</span>
                      <div
                        class="tooltip"
                        :class="{ 'active': activeTooltip === 'inefficiencyRate' }"
                      >
                        Estimated percentage of time lost due to inefficiencies
                      </div>
                    </div>
                  </div>
                  <div class="slider-container">
                    <input
                      type="range"
                      id="inefficiencyRate"
                      v-model.number="inefficiencyRate"
                      min="5"
                      max="40"
                      step="5"
                      @input="updateResults"
                      :style="{ '--progress': getProgressPercentage(inefficiencyRate, 5, 40) }"
                    />
                    <span class="slider-value">{{ inefficiencyRate }}%</span>
                  </div>
                  <div class="slider-markers">
                    <span>5%</span>
                    <span>40%</span>
                  </div>
                </div>
              </div>

              <!-- Results Section -->
              <div class="calculator-results">
                <h3>Results</h3>

                <div class="results-grid">
                  <!-- Annual Savings Result -->
                  <div
                    class="result-card"
                    :class="{ 'highlight': isHighlighted.annualSavings }"
                  >
                    <div class="result-icon savings-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <div class="result-content">
                      <h4>Annual Savings</h4>
                      <div class="result-value">${{ formatNumber(annualSavings) }}</div>
                    </div>
                  </div>

                  <!-- Productivity Gain Result -->
                  <div
                    class="result-card"
                    :class="{ 'highlight': isHighlighted.productivityGain }"
                  >
                    <div class="result-icon productivity-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                    </div>
                    <div class="result-content">
                      <h4>Productivity Gain</h4>
                      <div class="result-value">{{ productivityGain }}%</div>
                    </div>
                  </div>

                  <!-- ROI Result -->
                  <div
                    class="result-card"
                    :class="{ 'highlight': isHighlighted.roi }"
                  >
                    <div class="result-icon roi-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                      </svg>
                    </div>
                    <div class="result-content">
                      <h4>ROI Estimate</h4>
                      <div class="result-value">{{ roi }}x</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Comparison View -->
          <div v-if="activeTab === 1" class="calculator-view compare-view">
            <div class="comparison-table">
              <div class="comparison-header">
                <div class="comparison-col empty-col"></div>
                <div class="comparison-col">Current Team</div>
                <div class="comparison-col">With Align</div>
                <div class="comparison-col">Difference</div>
              </div>

              <div class="comparison-row">
                <div class="comparison-label">Annual Cost</div>
                <div class="comparison-value">${{ formatNumber(calculateCurrentCost()) }}</div>
                <div class="comparison-value">${{ formatNumber(calculateAlignCost()) }}</div>
                <div class="comparison-value savings">
                  -${{ formatNumber(calculateCurrentCost() - calculateAlignCost()) }}
                </div>
              </div>

              <div class="comparison-row alternate">
                <div class="comparison-label">Team Flexibility</div>
                <div class="comparison-value">
                  <div class="stars">
                    <span class="star filled">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                  </div>
                </div>
                <div class="comparison-value">
                  <div class="stars">
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                  </div>
                </div>
                <div class="comparison-value improvement">+400%</div>
              </div>

              <div class="comparison-row">
                <div class="comparison-label">Operational Efficiency</div>
                <div class="comparison-value">{{ 100 - inefficiencyRate }}%</div>
                <div class="comparison-value">{{ 100 - Math.round(inefficiencyRate / 4) }}%</div>
                <div class="comparison-value improvement">+{{ Math.round(inefficiencyRate * 0.75) }}%</div>
              </div>

              <div class="comparison-row alternate">
                <div class="comparison-label">Setup Time</div>
                <div class="comparison-value">1-3 months</div>
                <div class="comparison-value">15 days</div>
                <div class="comparison-value improvement">Up to 75% faster</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div class="calculator-summary">
        <p>
          Based on your information, your company can save <strong>${{ formatNumber(annualSavings) }}</strong> annually with Align's outsourcing model, while gaining significant improvements in productivity and flexibility.
        </p>
      </div>

      <!-- CTA Button -->
      <div class="calculator-cta">
        <router-link to="/contact" class="btn-primary">
          Request a Proposal
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RoiCalculator',

  props: {
    embedded: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      // Calculator tabs
      calculatorTabs: [
        { name: "ROI Calculator", icon: "dollar-sign" },
        { name: "Comparison", icon: "bar-chart" }
      ],
      activeTab: 0,
      activeTooltip: null,

      // Calculator inputs
      teamSize: 10,
      averageSalary: 5000,
      inefficiencyRate: 20,

      // Calculator results
      annualSavings: 0,
      productivityGain: 0,
      roi: 0,

      // Highlight states
      isHighlighted: {
        annualSavings: false,
        productivityGain: false,
        roi: false
      }
    };
  },

  mounted() {
    this.updateResults();
  },

  methods: {
    // Tab navigation
    setActiveTab(index) {
      this.activeTab = index;
    },

    // Tooltip handling
    showTooltip(tooltipId) {
      this.activeTooltip = tooltipId;
    },

    hideTooltip() {
      this.activeTooltip = null;
    },

    // Format numbers with commas
    formatNumber(value) {
      return new Intl.NumberFormat().format(Math.round(value));
    },

    // Get progress percentage for slider styling
    getProgressPercentage(value, min, max) {
      return `${((value - min) / (max - min)) * 100}%`;
    },

    // Calculation methods
    calculateAnnualSavings() {
      const annualCost = this.teamSize * this.averageSalary * 12;
      return Math.round(annualCost * 0.4); // 40% savings
    },

    calculateProductivityGain() {
      return Math.round(this.inefficiencyRate * 0.75);
    },

    calculateRoi() {
      const savings = this.calculateAnnualSavings();
      const investment = this.teamSize * this.averageSalary * 6;
      return Math.round((savings / investment) * 10) / 10;
    },

    calculateCurrentCost() {
      return this.teamSize * this.averageSalary * 12;
    },

    calculateAlignCost() {
      return Math.round(this.calculateCurrentCost() * 0.6);
    },

    // Update all results with animation
    updateResults() {
      // Calculate new values
      this.annualSavings = this.calculateAnnualSavings();
      this.productivityGain = this.calculateProductivityGain();
      this.roi = this.calculateRoi();

      // Highlight changed values
      this.isHighlighted = {
        annualSavings: true,
        productivityGain: true,
        roi: true
      };

      // Clear highlights after a delay
      setTimeout(() => {
        this.isHighlighted = {
          annualSavings: false,
          productivityGain: false,
          roi: false
        };
      }, 1000);
    }
  }
};
</script>

<style scoped>
/* Main container */
.roi-calculator-section {
  padding: 3rem 0;
  background-color: var(--bg-light, #f8f9fa);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header styling */
.calculator-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.section-title {
  text-align: center;
  width: 100%;
}

.section-title h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-color, #333);
}

.section-description {
  font-size: 1.1rem;
  color: var(--text-light, #666);
  max-width: 700px;
  margin: 0 auto;
}

.close-button {
  background: none;
  border: none;
  color: var(--text-light, #666);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--text-color, #333);
  transform: rotate(90deg);
}

/* Calculator container */
.calculator-container {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 2rem;
  border: 1px solid var(--border-color, #eaeaea);
}

/* Calculator tabs */
.calculator-tabs {
  display: flex;
  background-color: var(--bg-light, #f8f9fa);
  border-bottom: 1px solid var(--border-color, #eaeaea);
}

.tab-button {
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 500;
  color: var(--text-light, #666);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent;
}

.tab-button:hover {
  color: var(--text-color, #333);
  background-color: rgba(0, 0, 0, 0.02);
}

.tab-button.active {
  color: var(--primary-color, #0085ff);
  border-bottom-color: var(--primary-color, #0085ff);
  background-color: white;
}

/* Calculator content */
.calculator-content {
  padding: 2rem;
}

/* Grid layout */
.calculator-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

/* Section headings */
.calculator-view h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-color, #333);
  position: relative;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-light, #e6f4ff);
  display: inline-block;
}

/* Input section styling */
.input-group {
  margin-bottom: 1.75rem;
}

.input-label {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.input-label label {
  font-weight: 500;
  color: var(--text-color, #333);
  font-size: 0.95rem;
  margin-right: 0.5rem;
}

/* Tooltips */
.tooltip-container {
  position: relative;
  display: inline-block;
}

.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--text-light, #666);
  color: white;
  font-size: 12px;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.info-icon:hover {
  background-color: var(--primary-color, #0085ff);
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-5px);
  background-color: var(--text-color, #333);
  color: white;
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: 10;
  width: 180px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--text-color, #333) transparent transparent transparent;
}

.tooltip.active {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-10px);
}

/* Slider styling */
.slider-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.slider-container input[type="range"] {
  flex: 1;
  height: 6px;
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(
    to right,
    var(--primary-color, #0085ff) 0%,
    var(--primary-color, #0085ff) var(--progress, 50%),
    var(--border-color, #eaeaea) var(--progress, 50%),
    var(--border-color, #eaeaea) 100%
  );
  border-radius: 3px;
  outline: none;
}

.slider-container input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--primary-color, #0085ff);
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.slider-container input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--primary-color, #0085ff);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.slider-value {
  min-width: 80px;
  text-align: center;
  font-weight: 600;
  color: var(--primary-color, #0085ff);
  padding: 0.4rem 0.75rem;
  background-color: rgba(0, 133, 255, 0.1);
  border-radius: 4px;
  font-size: 0.9rem;
}

.slider-markers {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-light, #666);
}

/* Results section */
.results-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.result-card {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background-color: var(--bg-light, #f8f9fa);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.result-card.highlight {
  background-color: var(--primary-color, #0085ff);
  color: white;
  animation: pulse 1s;
}

.result-icon {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  background-color: rgba(0, 133, 255, 0.1);
  color: var(--primary-color, #0085ff);
}

.result-card.highlight .result-icon {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.result-icon.productivity-icon {
  background-color: rgba(0, 200, 117, 0.1);
  color: #00c875;
}

.result-icon.roi-icon {
  background-color: rgba(255, 153, 0, 0.1);
  color: #ff9900;
}

.result-content {
  flex: 1;
}

.result-content h4 {
  margin: 0 0 0.25rem;
  font-size: 0.9rem;
  color: var(--text-light, #666);
  font-weight: 500;
}

.result-card.highlight .result-content h4 {
  color: rgba(255, 255, 255, 0.8);
}

.result-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color, #333);
}

.result-card.highlight .result-value {
  color: white;
}

/* Comparison table */
.comparison-table {
  border-radius: 8px;
  border: 1px solid var(--border-color, #eaeaea);
  overflow: hidden;
}

.comparison-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background-color: var(--text-color, #333);
  color: white;
  font-weight: 600;
}

.comparison-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid var(--border-color, #eaeaea);
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-row.alternate {
  background-color: var(--bg-light, #f8f9fa);
}

.comparison-col,
.comparison-label,
.comparison-value {
  padding: 1rem;
  display: flex;
  align-items: center;
}

.empty-col {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.comparison-label {
  font-weight: 500;
  color: var(--text-color, #333);
  border-right: 1px solid var(--border-color, #eaeaea);
}

.comparison-value {
  justify-content: center;
  border-right: 1px solid var(--border-color, #eaeaea);
}

.comparison-value:last-child {
  border-right: none;
}

/* Star ratings */
.stars {
  display: flex;
  gap: 0.25rem;
  font-size: 1.1rem;
}

.star {
  color: #ddd;
}

.star.filled {
  color: #ffb400;
}

/* Value indicators */
.savings {
  color: #00c875;
  font-weight: 600;
}

.improvement {
  color: var(--primary-color, #0085ff);
  font-weight: 600;
}

/* Summary and CTA */
.calculator-summary {
  background-color: rgba(0, 200, 117, 0.1);
  border-left: 3px solid #00c875;
  padding: 1.25rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.calculator-summary p {
  margin: 0;
  color: var(--text-color, #333);
  font-size: 0.95rem;
}

.calculator-summary strong {
  color: #00c875;
}

.calculator-cta {
  text-align: center;
  margin-top: 2rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background-color: var(--primary-color, #0085ff);
  color: white;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 133, 255, 0.2);
}

.btn-primary:hover {
  background-color: var(--primary-dark, #0066cc);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 133, 255, 0.3);
}

.btn-primary svg {
  transition: transform 0.2s ease;
}

.btn-primary:hover svg {
  transform: translateX(3px);
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    background-color: var(--primary-color, #0085ff);
  }
  50% {
    background-color: var(--primary-dark, #0066cc);
  }
}

/* Responsive styles */
@media (max-width: 992px) {
  .calculator-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .calculator-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .comparison-header,
  .comparison-row {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .calculator-content {
    padding: 1rem;
  }

  .calculator-tabs {
    flex-direction: column;
  }

  .tab-button {
    border-left: 2px solid transparent;
    border-bottom: none;
    text-align: left;
  }

  .tab-button.active {
    border-left-color: var(--primary-color, #0085ff);
    border-bottom: none;
  }

  .comparison-header,
  .comparison-row {
    grid-template-columns: 1fr;
  }

  .comparison-header {
    display: none;
  }

  .comparison-row {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid var(--border-color, #eaeaea);
    border-radius: 8px;
  }

  .comparison-label {
    font-weight: 600;
    border-right: none;
    border-bottom: 1px solid var(--border-color, #eaeaea);
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
  }

  .comparison-value {
    border-right: none;
    padding: 0.5rem 0;
    justify-content: flex-start;
  }

  .slider-container {
    flex-direction: column;
    align-items: stretch;
  }

  .slider-value {
    align-self: flex-end;
    margin-top: 0.5rem;
  }

  .result-card {
    flex-direction: column;
    text-align: center;
  }

  .result-icon {
    margin: 0 auto 1rem;
  }
}
</style>
